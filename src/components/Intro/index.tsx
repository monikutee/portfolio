import React from "react";
import "./intro.scss";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../../helpers";

const Intro: React.FC = () => {
  return (
    <div className="intro">
      <div className="intro_info">
        <h1>MONIKA PETRULEVIČ</h1>
        <p>
          Sveiki! Esu puslapių programuotoja iš Vilniaus. Mano įgyta patirtis
          leidžia prieiti prie geriausių techninių sprendimų puslapiui - tiek
          dizaine, tiek funkcionalume, palaikyti techninį vientisumą, tačiau
          moderniai atvaizduoti tai saitvietėje. Esu kruopšti, atsakinga bei
          punktuali, tad Jūsų projekto programavimas yra gerose rankose!
        </p>

        <HashLink to="/#projects" scroll={(el) => scrollWithOffset(el)}>
          <button>PROJEKTAI</button>
        </HashLink>
      </div>
    </div>
  );
};

export default Intro;
