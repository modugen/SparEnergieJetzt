import heizkorper from '../../assets/images/results/reflectionCropped.jpg'
import heizungsburste from '../../assets/images/results/heizungsbuerste.jpg'
import thermoheld from '../../assets/images/results/thermoheld Cropped.jpg'
import wassersparender from '../../assets/images/results/duschkopf Cropped.jpg'
import timer from '../../assets/images/results/timer Cropped.jpg'
import dichtbander from '../../assets/images/results/dichtbander.png'
import thermovorhange from '../../assets/images/results/thermovorhang.png'
import thermostat from '../../assets/images/results/thermostate Cropped.jpg'
import kaltDuschen from '../../assets/images/results/kaltDuschen.png'

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
  calcSavingsColdShower,
} from '../../calc'

export interface ResultProposal {
  title: string
  description: string
  image: string
  winner?: boolean
  links: {
    provider: string
    link: string
  }[]
  type: string
  calculation: (config: ConfiguratorParameters) => number
  calculationNotPossible?: boolean
  cost: number
}

export const results: ResultProposal[] = [
  {
    title: 'Heizkörper Reflektionsfolie',
    description:
      'Die mit Aluminium beschichteten Folien werden hinter den Heizkörpern so an der Wand angebracht, dass die beschichtete Seite zum Heizkörper zeigt. Durch die Reflektion der Wärmestrahlung wird verhindert, dass die vom Heizelement abgegebene Wärme die  Außenwand erwärmt statt den Raum zu heizen.',
    image: heizkorper,
    winner: true,
    links: [
      {
        link: 'https://amzn.to/3OWoMNU',
        provider: 'Amazon',
      },
      {
        link: 'https://www.google.com/search?q=Heizk%C3%B6rper+Reflektionsfolie&sxsrf=ALiCzsbIvtBTtK4DJZfRGKMc0QYD5HRWMQ:1660313326812&source=lnms&tbm=shop&sa=X&ved=2ahUKEwj7ob2QvcH5AhWOi_0HHU7PBdoQ_AUoAXoECAIQAw&biw=1440&bih=732&dpr=2',
        provider: 'Google',
      },
    ],
    type: 'reflection',
    calculation: calcSavingsReflexionsfolie,
    cost: 20,
  },
  {
    title: 'Heizkörperbürste',
    description:
      'Staub, Schmutz und andere Verunreinigungen verringern die Wärmeabgabe des Heizkörpers. Am besten reinigst du deinen Heizkörper mit Hilfe einer Heizkörperbürste und steigerst so die Effizienz deiner Heizung. Besonders bei geschlossenen Plattenheizkörpern ist diese Maßnahme relevant!',
    image: heizungsburste,
    links: [
      {
        link: 'https://amzn.to/3Sme3PK',
        provider: 'Amazon',
      },
      {
        link: 'https://www.google.com/search?q=Heizk%C3%B6rperb%C3%BCrste+google+shopping&sxsrf=ALiCzsZiIfTMam1JeJf0FCrXAIK-S9IkHA:1660289698749&source=lnms&tbm=shop&sa=X&ved=2ahUKEwiw_t6N5cD5AhX1i_0HHU-CCnkQ_AUoAXoECAEQAw&biw=1440&bih=789&dpr=2',
        provider: 'Google',
      },
    ],
    type: 'heizkoerperbuerste',
    calculation: calcSavingsHeizkoerperbuerste,
    cost: 15,
  },
  {
    title: 'Thermoheld',
    description:
      'Das Thermoheld Heizglas ist eine elektrische Heizung, die anstatt die Raumluft zu beheizen Wärmestrahlung abgibt. So kannst du die Raumtemperatur ohne Komfortverlust senken. Durch den Betrieb mit Strom bist du unabhängig von fossilen Brennstoffen, und kannst sogar deine Photovoltaik-Anlage mit anschließen.',
    image: thermoheld,
    links: [
      {
        link: 'https://www.thermoheld.global/thermoheld-glas/',
        provider: 'Thermoheld',
      },
      {
        link: 'https://www.hornbach.de/aktuelles/ethermoheld-so-geht-waerme-heute/',
        provider: 'Hornbach',
      },
    ],
    type: 'thermoheld',
    calculation: calcSavingsThermoheld,
    calculationNotPossible: true,
    cost: 814,
  },
  {
    title: 'Wassersparender Duschkopf Crometta von Hansgrohe',
    description:
      'Mit dem richtigen Duschkopf lassen sich über das ganze Jahr große mengen Warmwasser einsparen. Der Duschkopf begrenzt dabei die maximale Durchlaufmenge an Wasser pro Minute (l/min). Ohne Duschkomfort zu verlieren können so leicht bis zu 33% an Warmwasser gespart werden. Wir empfehlen den Duschkopf "Crometta von Hansgrohe" mit 6 Liter pro Minute Durchlauf.',
    image: wassersparender,
    links: [
      {
        link: 'https://amzn.eu/d/2qi6eyZ',
        provider: 'Amazon',
      },
      {
        link: 'https://www.google.com/search?q=Wassersparender+Duschkopf&sxsrf=ALiCzsYAQAYHFPXrtebRQSB5LzY11-hH0g:1660289732868&source=lnms&tbm=shop&sa=X&ved=2ahUKEwj-rYGe5cD5AhUfgv0HHYlNDWgQ_AUoAXoECAEQAw&biw=1440&bih=789&dpr=2',
        provider: 'Google',
      },
      {
        link: 'https://docs.google.com/presentation/d/10A2ax4ydBqMSbrEWNTQA8vuHeDKODlggO55Yvc6_A4E/edit#slide=id.g14b43ccf185_0_0',
        provider: 'Beispielrechnung',
      },
    ],
    type: 'duschkopf',
    calculation: calcSavingsDuschkopf,
    cost: 20,
  },
  {
    title: 'Kälter oder ganz kalt duschen',
    description:
      'Am meisten Energie kannst du einsparen, indem du kalt duscht. Wir schätzen, dass du damit bis zu 100% deiner Warmwasserkosten einsparen kannst ;-). Du schlägst sogar zwei Fliegen mit einer Klappe, denn du wirst auch sicher kürzer duschen, wenn du kalt duscht, und damit weniger Wasser verbrauchen. Auch wenn es mentale Überwindung kostest - spring ins kalte Wasser!',
    image: kaltDuschen,
    links: [
      {
        link: 'https://docs.google.com/presentation/d/10A2ax4ydBqMSbrEWNTQA8vuHeDKODlggO55Yvc6_A4E/edit#slide=id.g14b43ccf185_0_33',
        provider: 'Beispielrechnung',
      },
    ],
    type: 'kaltDuschen',
    calculation: calcSavingsColdShower,
    cost: 0,
  },
  {
    title: 'Timer',
    description:
      'Dieser Timer hilft dir deine Energiekosten beim Duschen oder anderen Tätigkeiten zu senken. Klingt vielleicht lustig, ist aber effektiv. Mit unserem Verhalten haben wir mit den größten Einfluss auf unseren Energiebedarf. Ein Timer kann helfen, sich die Duschzeiten präsent zu machen - und zu reduzieren.',
    image: timer,
    links: [
      {
        link: 'https://amzn.to/3Qb7ayX',
        provider: 'Amazon',
      },
      {
        link: 'https://www.google.com/search?q=Duschtimer&sxsrf=ALiCzsbgXeIXCgoncksFQK-qY-sZrXZDew:1660313228245&source=lnms&tbm=shop&sa=X&ved=2ahUKEwiBv73hvMH5AhU3xQIHHVtUD5IQ_AUoAXoECAIQAw&biw=1440&bih=732&dpr=2',
        provider: 'Google',
      },
      {
        link: 'https://docs.google.com/presentation/d/10A2ax4ydBqMSbrEWNTQA8vuHeDKODlggO55Yvc6_A4E/edit#slide=id.g14b3e94ddda_0_0',
        provider: 'Beispielrechnung',
      },
    ],
    type: 'timer',
    calculation: calcSavingsTimer,
    cost: 20,
  },
  {
    title: 'Dichtbänder für Kastenfenster',
    description:
      'Heiz kein Geld zum Fenster raus. Undichte Stellen in alten Fenstern sorgen bei großen Temperaturdifferenzen zu großen Wärmeverlusten. Dichtbänder dämmen Schwachstellen und senken Energiekosten. Ein kleiner Handwerklicher Einsatz ist allerdings gefordert.',
    image: dichtbander,
    links: [
      {
        link: 'https://amzn.to/3vulM4w',
        provider: 'Amazon',
      },
      {
        link: 'https://www.google.com/search?q=Dichtb%C3%A4nder+f%C3%BCr+Kastenfenster&sxsrf=ALiCzsZwwxrOdEzHLt7zXCYKbL61kGe6cA:1660313349762&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjRi7abvcH5AhXu_rsIHXIgAS0Q_AUoAXoECAEQAw&biw=1440&bih=732&dpr=2',
        provider: 'Google',
      },
    ],
    type: 'dichtbaender',
    calculation: calcSavingsDichtbaenderKastenfenster,
    cost: 15,
  },
  {
    title: 'Thermovorhänge',
    description:
      'Thermovorhänge: Gerade bei Altbauten stellen schlecht gedämmte Fenster und fehlende Rolladen eine große Schwachstelle dar und führen zu Wärmeverlust. Die Wärmeabgabe durch das Fenster lässt sich durch raumseitige, schwere Vorhänge vermindern.',
    image: thermovorhange,
    links: [
      {
        link: 'https://amzn.to/3SmnM8C',
        provider: 'Amazon',
      },
      {
        link: 'https://www.google.com/search?q=Thermovorh%C3%A4nge&source=lmns&tbm=shop&bih=789&biw=1440&hl=de&sa=X&ved=2ahUKEwij1sXP5cD5AhVOYxoKHbZ4CJkQ_AUoAXoECAEQAQ',
        provider: 'Google',
      },
    ],
    type: 'thermovorhaenge',
    calculation: calcSavingsThermovorhaenge,
    cost: 40,
  },
  {
    title: 'Thermostat',
    description:
      'Digitale Thermostate sorgen dafür, dass deine Räume gleichmäßig und somit energiesparend beheizt werden und nur zu den Zeitpunkten beheizt werden, an denen du es wirklich brauchst. Ganz nebenbei machst du dein Haus zum Smart Home. Einfach mal die Heizung von Unterwegs ausmachen, wenn man es vergessen hat? Kein Problem!',
    image: thermostat,
    links: [
      {
        link: 'https://amzn.to/3oPxFOU',
        provider: 'Amazon',
      },
      {
        link: 'https://www.google.com/search?q=heizk%C3%B6rperthermostat&sxsrf=ALiCzsaCD-ZJf3tVzwjP5Y_v-_ZoYMdrsA:1660289924112&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjflJr55cD5AhXLX8AKHcFYCLIQ_AUoAXoECAEQAw&biw=1440&bih=789&dpr=2',
        provider: 'Google',
      },
    ],
    type: 'hydraulischeThermostate',
    calculation: calcSavingsThermostate,
    cost: 80,
  },
]
