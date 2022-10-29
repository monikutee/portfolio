import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Header, Footer } from "./components";

const App = () => {
  const aboutMeRef = React.useRef<HTMLDivElement | null>(null);
  const projectsRef = React.useRef<HTMLDivElement | null>(null);
  const lifeInfoRef = React.useRef<HTMLDivElement | null>(null);
  const contactsRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div className="App">
      <Header
        aboutMeRef={aboutMeRef}
        projectsRef={projectsRef}
        lifeInfoRef={lifeInfoRef}
        contactsRef={contactsRef}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              aboutMeRef={aboutMeRef}
              projectsRef={projectsRef}
              lifeInfoRef={lifeInfoRef}
              contactsRef={contactsRef}
            />
          }
        />
        <Route path="project:id" element={<Project />} />
      </Routes>
      <Footer
        aboutMeRef={aboutMeRef}
        projectsRef={projectsRef}
        lifeInfoRef={lifeInfoRef}
        contactsRef={contactsRef}
      />
    </div>
  );
};

export default App;
