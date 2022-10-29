import React from "react";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../constants";

export const Project: React.FC = () => {
  const { id } = useParams();
  const [active, setActive] = React.useState<{
    title: string;
    body: string;
    id: number;
    image: string;
  } | null>(null);

  if (PROJECTS[0].id.toString() === id) {
    setActive(PROJECTS[0]);
  } else if (PROJECTS[1].id.toString() === id) {
    setActive(PROJECTS[1]);
  } else {
    return <h1>TOKIO PROJEKTO NĖRA</h1>;
  }
  return (
    <div className="project_root">
      <h1>{active?.title}</h1>
    </div>
  );
};
