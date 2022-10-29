import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Header, Footer } from "./components";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project:id" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
