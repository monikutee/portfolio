import React from "react";
import "./projects.scss";
import LAPTOP from "../../assets/laptop.svg";

const Projects: React.FC = () => {
  const PROJECTS = [
    {
      title: "Kalendorius",
      body: "Orientuotas į funkcionalumą, o ne dizainą. Turi savo asmeninį serverį, kuriame saugomi duomenys JSON faile. Kalendorius yra pilnai veikiantis: galima sukurti, ištrinti bei redaguoti susitikimą, taip pat galima sukurti du susitikimus vienu metu ir jie atsivaizduos šalia. Kalendorius yra pritaikomas kiekvieno ekrano dydžio rezolicijai.",
      id: 1,
      image: LAPTOP,
    },
    {
      title: "Nekilnojamo turto sąrašo puslapis",
      body: "Puslapis buvo programuojamas atvaizduoti nekilnojamo turto sąrašui, galimybė sukurti, ištrinti bei redaguoti projektą, apžiūrėti, kaip atrodo pats projektas. Šio puslapio duomenys yra saugomi lokaliai. Projektas buvo orientuojamas į dizaino įvykdymą, išlaikant paprastą funkcionalumą.",
      id: 2,
      image: LAPTOP,
    },
  ];

  return (
    <div className="root">
      <div className="title">
        <h1>APIE MANE</h1>
        <div className="divider" />
      </div>
      <div className="projects">
        {PROJECTS.map((project, index) => (
          <div className="project_item" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project_item-text">
              <h3>{project.title}</h3>
              <p>{project.body}</p>
              <button>PILNAS PROJEKTAS</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
