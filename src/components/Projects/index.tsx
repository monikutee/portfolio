import React from "react";
import "./projects.scss";
import { PROJECTS } from "../../constants";
import YELLOW_CIRCLE from "../../assets/decorations/yellow_circle.svg";
import RED_BALL from "../../assets/decorations/red_ball.svg";

const Projects: React.FC = () => {
  return (
    <div className="root" id="projects">
      <div className="title">
        <h1>ASMENINIAI PROJEKTAI</h1>
        <div className="divider" />
      </div>
      <div className="projects">
        {PROJECTS.map((project, index) => (
          <div className="project_item" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project_item-img"
            />
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
      <img src={YELLOW_CIRCLE} alt="" className="yellow_circle" />
      <img src={RED_BALL} alt="" className="red_ball" />
    </div>
  );
};

export default Projects;
