import heizkorper from '../../assets/images/results/heizkorper.png'
import heizungsburste from '../../assets/images/results/heizungsburste.png'
import thermoheld from '../../assets/images/results/thermoheld.png'
import wassersparender from '../../assets/images/results/wassersparender.png'
import timer from '../../assets/images/results/timer.png'
import leuchten from '../../assets/images/results/leuchten.png'
import dichtbander from '../../assets/images/results/dichtbander.png'
import thermovorhange from '../../assets/images/results/thermovorhange.png'
import thermostat from '../../assets/images/results/thermostat.png'
import {
  calcSavingsReflexionsfolie,
  calcSavingsDichtbaenderKastenfenster,
  calcSavingsHeizkoerperbuerste,
  calcSavingsThermovorhaenge,
  calcSavingsThermostate,
  ConfiguratorParameters,
} from '../../calc'

export interface ResultProposal {
  title: string
  description: string
  image: string
  winner?: boolean
  link: string
  type: string
  calculation: (config: ConfiguratorParameters) => number
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
  },
  {
    title: 'Heizkörperbürste',
    description: `Heizungsbürste:
      Staub, Schmutz und andere Verunreinigungen verringern die Wärmeabgabe des Heizkörpers. Am besten reinigst du deinen Heizkörper mithilfe einer Heizkörperbürste  und steigerst so die Effizienz deiner Heizung.`,
    image: heizungsburste,
    link: 'https://amzn.to/3Sme3PK',
    type: 'heizkoerperbuerste',
    calculation: calcSavingsHeizkoerperbuerste,
  },
  {
    title: 'Thermoheld',
    description:
      'Das thermoheld Heizglas ist eine elektrische Heizung, die statt der Raumluft beheizt Wärmestrahlung abgibt, so kannst du die Raumtemperatur ohne Komfortverlust senken. Durch den Betrieb mit Strom bist du unabhängig von fossilen Brennstoffen, und kannst sogar deine Photovoltaik noch mit anschließen.',
    image: thermoheld,
    link: 'https://www.thermoheld.global/thermoheld-glas/',
    type: 'thermoheld',
    calculation: () => 300,
  },
  {
    title: 'Wassersparender Duschkopf',
    description:
      'Warmwasser stellt einen großen Energiefresser dar. Mit einem wassersparenden Duschkopf lassen sich sogar im Sommer lassen sich hier große Einsparungen erzielen.',
    image: wassersparender,
    link: 'https://amzn.to/3cZlLiO',
    type: 'duschkopf',
    calculation: () => 300,
  },
  {
    title: 'Timer',
    description:
      'Dieser Timer hilft dir deine Energiekosten beim Duschen oder anderen Tätigkeiten zu senken.',
    image: timer,
    link: 'https://amzn.to/3Qb7ayX',
    type: 'timer',
    calculation: () => 300,
  },
  {
    title: 'Leuchten mit Bewegungsmelder',
    description:
      'Mit diesen Leuchten vergisst du nie wieder das Licht auszuschalten, denn das geschieht automatisch.',
    image: leuchten,
    link: 'https://amzn.to/3bpDiA0',
    type: 'movementsensor',
    calculation: () => 300,
  },
  {
    title: 'Dichtbänder für Kastenfenster',
    description:
      'Dichtbänder: Heiz kein Geld zum Fenster raus. Undichte Stellen in alten Fenstern sorgen bei großen Temperaturdifferenzen zu hohen resultierenden Wärmeverlusten. Dichtbänder dämmen Schwachstellen und senken Energiekosten.',
    image: dichtbander,
    link: 'https://amzn.to/3vulM4w',
    type: 'dichtbaender',
    calculation: calcSavingsDichtbaenderKastenfenster,
  },
  {
    title: 'Thermovorhänge',
    description:
      'Thermovorhänge: Gerade bei Altbauten stellen schlecht gedämmte Fenster und fehlende Rolladen eine große Schwachstelle dar und führen zu Wärmeverlust. Die Wärmeabgabe durch das Fenster lässt sich durch raumseitige, schwere Vorhänge vermindern.',
    image: thermovorhange,
    link: 'https://amzn.to/3SmnM8C',
    type: 'thermovorhaenge',
    calculation: calcSavingsThermovorhaenge,
  },
  {
    title: 'Thermostat',
    description:
      'Digitale Thermostate sorgen dafür, dass deine Räume gleichmäßig und somit energiesparend beheizt werden und nur zu den Zeitpunkten beheizt werden an denen du es wirklich brauchst. Ganz nebenbei machst du deine Haus zum Smart Home.',
    image: thermostat,
    link: 'https://amzn.to/3oPxFOU',
    type: 'hydraulischeThermostate',
    calculation: calcSavingsThermostate,
  },
]
