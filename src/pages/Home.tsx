import React from "react";
import { Intro, AboutMe, Projects, LifeInfo, Contacts } from "../components";

export const Home: React.FC<{
  aboutMeRef: React.MutableRefObject<HTMLDivElement | null>;
  projectsRef: React.MutableRefObject<HTMLDivElement | null>;
  lifeInfoRef: React.MutableRefObject<HTMLDivElement | null>;
  contactsRef: React.MutableRefObject<HTMLDivElement | null>;
}> = ({ aboutMeRef, projectsRef, lifeInfoRef, contactsRef }) => {
  return (
    <>
      <Intro />
      <AboutMe reference={aboutMeRef} />
      <Projects reference={projectsRef} />
      <LifeInfo reference={lifeInfoRef} />
      <Contacts reference={contactsRef} />
    </>
  );
};
