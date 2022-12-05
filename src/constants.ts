import calendar_laptop from "./assets/calendar/laptop.svg";
import calendar_photo_1 from "./assets/calendar/photo1.png";
import calendar_photo_2 from "./assets/calendar/photo2.png";
import calendar_photo_3 from "./assets/calendar/photo3.png";
import calendar_photo_4 from "./assets/calendar/photo4.png";
import calendar_photo_5 from "./assets/calendar/photo5.png";
import calendar_photo_6 from "./assets/calendar/photo6.png";
import calendar_photo_7 from "./assets/calendar/photo7.png";
import crud_laptop from "./assets/crud/laptop.svg";
import crud_photo_1 from "./assets/crud/photo1.png";
import crud_photo_2 from "./assets/crud/photo2.png";
import crud_photo_3 from "./assets/crud/photo3.png";
import crud_photo_4 from "./assets/crud/photo4.png";

export const PROJECTS = [
  {
    title: "Kalendorius",
    body: "Orientuotas į funkcionalumą, o ne dizainą. Turi savo asmeninį serverį, kuriame saugomi duomenys JSON faile. Kalendorius yra pilnai veikiantis: galima sukurti, ištrinti bei redaguoti susitikimą, taip pat galima sukurti du susitikimus vienu metu ir jie atsivaizduos šalia. Kalendorius yra pritaikomas kiekvieno ekrano dydžio rezolicijai.",
    id: 1,
    image: calendar_laptop,
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
    photos: [
      calendar_photo_1,
      calendar_photo_2,
      calendar_photo_3,
      calendar_photo_4,
      calendar_photo_5,
      calendar_photo_6,
      calendar_photo_7,
    ],
  },
  {
    title: "Vartotojo sąrašo puslapis",
    body: "Puslapis buvo programuojamas atvaizduoti vartotojų sąrašui, galimybė sukurti, ištrinti bei redaguoti vartotoją. Šio puslapio duomenys yra saugomi lokaliai. Projektas buvo orientuojamas į  funkcionalumą.",
    id: 2,
    image: crud_laptop,
    stack: ["React.js", "TypeScript", "HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/monikutee/CRUD_projects",
    photos: [crud_photo_1, crud_photo_2, crud_photo_3, crud_photo_4],
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
