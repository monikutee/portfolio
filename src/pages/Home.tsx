import React from "react";
import { Intro, AboutMe, Projects, LifeInfo, Contacts } from "../components";

export const Home: React.FC = () => {
  React.useEffect(() => {
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split("#");
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0];
        document.querySelector(`#${hash}`)?.scrollIntoView();
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor;
  }, []);
  return (
    <>
      <Intro />
      <AboutMe />
      <Projects />
      <LifeInfo />
      <Contacts />
    </>
  );
};
