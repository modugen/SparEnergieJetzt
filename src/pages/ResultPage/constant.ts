import heizkorper from '../../assets/images/results/reflectionCropped.jpg'
import heizungsburste from '../../assets/images/results/heizungsbuerste.jpg'
import thermoheld from '../../assets/images/results/thermoheld Cropped.jpg'
import wassersparender from '../../assets/images/results/duschkopf Cropped.jpg'
import timer from '../../assets/images/results/timer Cropped.jpg'
import dichtbander from '../../assets/images/results/dichtbander.png'
import thermovorhange from '../../assets/images/results/thermovorhang.png'
import thermostat from '../../assets/images/results/thermostate Cropped.jpg'
import {
  calcSavingsReflexionsfolie,
  calcSavingsDichtbaenderKastenfenster,
  calcSavingsHeizkoerperbuerste,
  calcSavingsThermovorhaenge,
  calcSavingsThermostate,
  ConfiguratorParameters,
  calcSavingsDuschkopf,
  calcSavingsTimer,
  calcSavingsThermoheld,
} from '../../calc'

export interface ResultProposal {
  title: string
  description: string
  image: string
  winner?: boolean
  link: string
  type: string
  calculation: (config: ConfiguratorParameters) => number
  calculationNotPossible?: boolean
  cost: number
}

export const results: ResultProposal[] = [
  {
    title: 'Heizkörper Reflektionsfolie',
    description:
      'Reflexionsfolie: Die mit Aluminium beschichteten Folien werden hinter den Heizkörpern so an der Wand angebracht, dass die beschichtete Seite zum Heizkörper zeigt. Durch die reflektierende Wirkung des Aluminiums wird die Wärmestrahlung von der Wand in Richtung des Raums reflektiert und somit verhindert, dass die vom Heizelement abgegebene Wärmestrahlung  die schlecht gedämmte Außenwand erwärmt',
    image: heizkorper,
    winner: true,
    link: 'https://amzn.to/3OWoMNU',
    type: 'reflection',
    calculation: calcSavingsReflexionsfolie,
    cost: 20,
  },
  {
    title: 'Heizkörperbürste',
    description: `Heizungsbürste:
      Staub, Schmutz und andere Verunreinigungen verringern die Wärmeabgabe des Heizkörpers. Am besten reinigst du deinen Heizkörper mithilfe einer Heizkörperbürste  und steigerst so die Effizienz deiner Heizung.`,
    image: heizungsburste,
    link: 'https://amzn.to/3Sme3PK',
    type: 'heizkoerperbuerste',
    calculation: calcSavingsHeizkoerperbuerste,
    cost: 15,
  },
  {
    title: 'Thermoheld',
    description:
      'Das thermoheld Heizglas ist eine elektrische Heizung, die statt der Raumluft beheizt Wärmestrahlung abgibt, so kannst du die Raumtemperatur ohne Komfortverlust senken. Durch den Betrieb mit Strom bist du unabhängig von fossilen Brennstoffen, und kannst sogar deine Photovoltaik noch mit anschließen.',
    image: thermoheld,
    link: 'https://www.thermoheld.global/thermoheld-glas/',
    type: 'thermoheld',
    calculation: calcSavingsThermoheld,
    calculationNotPossible: true,
    cost: 814,
  },
  {
    title: 'Wassersparender Duschkopf',
    description:
      'Warmwasser stellt einen großen Energiefresser dar. Mit einem wassersparenden Duschkopf lassen sich sogar im Sommer lassen sich hier große Einsparungen erzielen.',
    image: wassersparender,
    link: 'https://amzn.to/3cZlLiO',
    type: 'duschkopf',
    calculation: calcSavingsDuschkopf,
    cost: 20,
  },
  {
    title: 'Timer',
    description:
      'Dieser Timer hilft dir deine Energiekosten beim Duschen oder anderen Tätigkeiten zu senken.',
    image: timer,
    link: 'https://amzn.to/3Qb7ayX',
    type: 'timer',
    calculation: calcSavingsTimer,
    cost: 20,
  },
  {
    title: 'Dichtbänder für Kastenfenster',
    description:
      'Dichtbänder: Heiz kein Geld zum Fenster raus. Undichte Stellen in alten Fenstern sorgen bei großen Temperaturdifferenzen zu hohen resultierenden Wärmeverlusten. Dichtbänder dämmen Schwachstellen und senken Energiekosten.',
    image: dichtbander,
    link: 'https://amzn.to/3vulM4w',
    type: 'dichtbaender',
    calculation: calcSavingsDichtbaenderKastenfenster,
    cost: 15,
  },
  {
    title: 'Thermovorhänge',
    description:
      'Thermovorhänge: Gerade bei Altbauten stellen schlecht gedämmte Fenster und fehlende Rolladen eine große Schwachstelle dar und führen zu Wärmeverlust. Die Wärmeabgabe durch das Fenster lässt sich durch raumseitige, schwere Vorhänge vermindern.',
    image: thermovorhange,
    link: 'https://amzn.to/3SmnM8C',
    type: 'thermovorhaenge',
    calculation: calcSavingsThermovorhaenge,
    cost: 40,
  },
  {
    title: 'Thermostat',
    description:
      'Digitale Thermostate sorgen dafür, dass deine Räume gleichmäßig und somit energiesparend beheizt werden und nur zu den Zeitpunkten beheizt werden an denen du es wirklich brauchst. Ganz nebenbei machst du deine Haus zum Smart Home.',
    image: thermostat,
    link: 'https://amzn.to/3oPxFOU',
    type: 'hydraulischeThermostate',
    calculation: calcSavingsThermostate,
    cost: 80,
  },
]
