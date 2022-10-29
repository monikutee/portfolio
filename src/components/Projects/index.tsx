import React from "react";
import "./projects.scss";
import { PROJECTS } from "../../constants";

const Projects: React.FC = () => {
  return (
    <div className="root" id="projects">
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
              <a href={`projects/${project.id}`}>
                <button>PILNAS PROJEKTAS</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
