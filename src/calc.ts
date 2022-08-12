export enum RelativeWohnlage {
  AmEck = 'AmEck',
  Innenliegend = 'Innenliegend',
  Freistehend = 'Freistehend',
}

export enum Bausubstanz {
  Altbau = 'Altbau',
  AltbauSaniert = 'AltbauSaniert',
  Neubau = 'Neubau',
}

export enum Heizungsart {
  Gas = 'Gas',
  Strom = 'Strom',
  Pellets = 'Pellets',
  Fernwaerme = 'Fernwaerme',
}

export enum Lage {
  DG = 'DG',
  EG = 'EG',
  Zwischengeschoss = 'Zwischengeschoss',
  DG_EG = 'DG+EG',
}

export interface WindowConfiguration {
  areaPerWindow: number // non-negative
  NumberOfWindows: number // non-negative
}

export enum ComponentWithUValue {
  Wall = 'Wall',
  Window = 'Window',
  Floor = 'Floor',
  Roof = 'Roof',
}

export interface ConfiguratorParameters {
  wohnflaeche: number
  relativeWohnlage: RelativeWohnlage
  lage: Lage
  deckenhoehe: number
  bausubstanz: Bausubstanz
  heizungsart: Heizungsart
  windows: Array<WindowConfiguration>
  energieEinheitsKosten: Map<Heizungsart, number>
}

export const DEFAULT_ENERGY_UNIT_COST = new Map<Heizungsart, number>([
  [Heizungsart.Gas, 0.27],
  [Heizungsart.Strom, 0.5],
  [Heizungsart.Pellets, 1], // TODO: find actual value
  [Heizungsart.Fernwaerme, 1], // TODO: find actual value
])

export const HEATING_ENERGY_SOURCE_EFFICIENCY_MAP = new Map<Heizungsart, number>([
  [Heizungsart.Gas, 0.88],
  [Heizungsart.Strom, 1],
  [Heizungsart.Pellets, 0.9],
  [Heizungsart.Fernwaerme, 1],
])

function calcExternalWallArea(params: ConfiguratorParameters): number {
  const singleOuterSurfaceArea = Math.sqrt(params.wohnflaeche) * params.deckenhoehe
  switch (params.relativeWohnlage) {
    case RelativeWohnlage.AmEck:
      return singleOuterSurfaceArea * 2
    case RelativeWohnlage.Freistehend:
      return singleOuterSurfaceArea * 4
    case RelativeWohnlage.Innenliegend:
      return singleOuterSurfaceArea * 1
    default:
      // TODO: maybe raise error here
      return 0
  }
}

function calcCeilingAndFloorArea(params: ConfiguratorParameters): number {
  switch (params.lage) {
    case Lage.DG:
      return params.wohnflaeche
    case Lage.EG:
      return params.wohnflaeche
    case Lage.Zwischengeschoss:
      return 0
    case Lage.DG_EG:
      return params.wohnflaeche
    default:
      // TODO: maybe raise error here
      return 0
  }
}

function calcRoomVolume(params: ConfiguratorParameters): number {
  return params.wohnflaeche * params.deckenhoehe
}

function calcEffectiveWindowArea(params: ConfiguratorParameters): number {
  // Using this snippet here https://stackoverflow.com/a/39214814
  const windowArea = params.windows
    .map((w) => w.areaPerWindow * w.NumberOfWindows)
    .reduce((sum, current) => sum + current)
  return windowArea
}

function calcEffectiveExternalWallArea(params: ConfiguratorParameters): number {
  const windowArea = calcEffectiveWindowArea(params)
  const effectiveWallArea = calcExternalWallArea(params) - windowArea
  // TODO: this could become negative, if the user inputs are not properly configured
  return effectiveWallArea
}

function getUValueMap(params: ConfiguratorParameters): Map<ComponentWithUValue, number> {
  switch (params.bausubstanz) {
    case Bausubstanz.Neubau:
      return new Map<ComponentWithUValue, number>([
        [ComponentWithUValue.Wall, 0.2],
        [ComponentWithUValue.Window, 0.8],
        [ComponentWithUValue.Floor, 0.4],
        [ComponentWithUValue.Roof, 0.2],
      ])
    case Bausubstanz.AltbauSaniert:
      return new Map<ComponentWithUValue, number>([
        [ComponentWithUValue.Wall, 0.8],
        [ComponentWithUValue.Window, 1.3],
        [ComponentWithUValue.Floor, 0.4],
        [ComponentWithUValue.Roof, 0.5],
      ])
    case Bausubstanz.Altbau:
      return new Map<ComponentWithUValue, number>([
        [ComponentWithUValue.Wall, 1.4],
        [ComponentWithUValue.Window, 2.7],
        [ComponentWithUValue.Floor, 0.4],
        [ComponentWithUValue.Roof, 1.4],
      ])
    default:
      throw new Error('not implemented')
  }
}

function calcHT(params: ConfiguratorParameters): Map<ComponentWithUValue, number> {
  const uValueMap = getUValueMap(params)
  const HTvalueMap = new Map<ComponentWithUValue, number>([
    [
      ComponentWithUValue.Wall,
      (uValueMap.get(ComponentWithUValue.Wall) as number) * calcEffectiveExternalWallArea(params),
    ],
    [
      ComponentWithUValue.Window,
      (uValueMap.get(ComponentWithUValue.Window) as number) * calcEffectiveWindowArea(params),
    ],
    [
      ComponentWithUValue.Floor,
      (uValueMap.get(ComponentWithUValue.Floor) as number) * calcCeilingAndFloorArea(params),
    ],
    [
      ComponentWithUValue.Roof,
      (uValueMap.get(ComponentWithUValue.Roof) as number) * calcCeilingAndFloorArea(params),
    ],
  ])
  return HTvalueMap
}

function calcHV(params: ConfiguratorParameters): number {
  const HV = 0.163 * calcRoomVolume(params)
  return HV
}

function calcQi(params: ConfiguratorParameters): number {
  const Qi = 22 * 0.32 * params.wohnflaeche
  return Qi
}

function calcQs(params: ConfiguratorParameters): number {
  const Qs = calcEffectiveWindowArea(params) * 150 * 0.65 * 0.567
  return Qs
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function calcQH(params: ConfiguratorParameters): number {
  const heizgradstunden = 66000
  const QH =
    heizgradstunden * calcHTtotal(params) +
    calcHV(params) -
    0.95 * (calcQs(params) + calcQi(params))
  return QH
}

function calcHTtotal(params: ConfiguratorParameters): number {
  let HTtotal = 0
  const HTvalueMap = calcHT(params)
  HTvalueMap.forEach((HTi) => {
    HTtotal += HTi
  })
  const HTTotalFinal = HTtotal // return const instead of variable
  return HTTotalFinal
}

export function calcEffectiveHeatingCost(params: ConfiguratorParameters): number {
  const Q_H = calcQH(params)
  const wattHoursToKiloWattHours = 1 / 1000
  const heatingCost =
    (Q_H / (HEATING_ENERGY_SOURCE_EFFICIENCY_MAP.get(params.heizungsart) as number)) *
    (params.energieEinheitsKosten.get(params.heizungsart) as number) *
    wattHoursToKiloWattHours
  return heatingCost
}

export function calcSavingsHeizkoerperbuerste(params: ConfiguratorParameters): number {
  let savingsCoefficient
  switch (params.bausubstanz) {
    case Bausubstanz.Altbau:
      savingsCoefficient = 0.05
      break
    case Bausubstanz.AltbauSaniert:
      savingsCoefficient = 0.03
      break
    case Bausubstanz.Neubau:
      savingsCoefficient = 0.02
  }
  const savings = savingsCoefficient * calcEffectiveHeatingCost(params)
  return savings
}

export function calcSavingsThermovorhaenge(params: ConfiguratorParameters): number {
  const wattHoursToKiloWattHours = 1 / 1000
  const heizgradstunden = 66000
  const HTMap = calcHT(params)
  const HTWIndows = HTMap.get(ComponentWithUValue.Window)
  const savings =
    HTWIndows *
    0.1 *
    HEATING_ENERGY_SOURCE_EFFICIENCY_MAP.get(params.heizungsart) *
    params.energieEinheitsKosten.get(params.heizungsart) *
    wattHoursToKiloWattHours *
    heizgradstunden
  return savings
}
