import LAPTOP from "./assets/laptop.svg";
import PHOTO from "./assets/bigPhoto.svg";

export const PROJECTS = [
  {
    title: "Kalendorius",
    body: "Orientuotas į funkcionalumą, o ne dizainą. Turi savo asmeninį serverį, kuriame saugomi duomenys JSON faile. Kalendorius yra pilnai veikiantis: galima sukurti, ištrinti bei redaguoti susitikimą, taip pat galima sukurti du susitikimus vienu metu ir jie atsivaizduos šalia. Kalendorius yra pritaikomas kiekvieno ekrano dydžio rezolicijai.",
    id: 1,
    image: LAPTOP,
    stack: [
      "React.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "GIT",
      "Responsive Design",
      "Terminal",
      "JavaScript",
    ],
    link: "https://github.com/monikutee/calendar-app",
  },
  {
    title: "Nekilnojamo turto sąrašo puslapis",
    body: "Puslapis buvo programuojamas atvaizduoti nekilnojamo turto sąrašui, galimybė sukurti, ištrinti bei redaguoti projektą, apžiūrėti, kaip atrodo pats projektas. Šio puslapio duomenys yra saugomi lokaliai. Projektas buvo orientuojamas į dizaino įvykdymą, išlaikant paprastą funkcionalumą.",
    id: 2,
    image: LAPTOP,
    stack: ["React.js", "TypeScript", "HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/monikutee/CRUD_projects",
  },
];

export const SKILLS = [
  "React.js",
  "TypeScript",
  "JavaScript",
  "SQL",
  "Node.js",
  "Next.js",
  "HTML5",
  "CSS3",
  "Material UI",
  "SASS",
  "GIT",
  "Responsive Design",
  "Terminal",
  "PHP",
  "Socket.io",
  "Elasticsearch",
];

export const PROJECT_PHOTOS = [PHOTO, PHOTO, PHOTO, PHOTO, PHOTO, PHOTO, PHOTO];
