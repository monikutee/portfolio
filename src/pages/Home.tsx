import React from "react";
import { Intro, AboutMe, Projects, LifeInfo, Contacts } from "../components";

export const Home: React.FC = () => {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Projects />
      <LifeInfo />
      <Contacts />
    </div>
  );
};
