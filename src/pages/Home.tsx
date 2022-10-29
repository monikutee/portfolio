import React from "react";
import { Intro, AboutMe, Projects } from "../components";

export const Home: React.FC = () => {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Projects />
    </div>
  );
};
