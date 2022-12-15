import React from "react";
import "./intro.scss";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../../helpers";
import GREEN_CIRCLE from "../../assets/decorations/green_circle.svg";
import RED_BALL from "../../assets/decorations/red_ball.svg";
import POINTS from "../../assets/decorations/points.svg";
import TRIANGLES from "../../assets/decorations/triangles.svg";

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
          <button className="pulse">PROJEKTAI</button>
        </HashLink>
      </div>
      <img src={GREEN_CIRCLE} alt="" className="green_circle" />
      <img src={RED_BALL} alt="" className="red_ball" />
      <img src={TRIANGLES} alt="" className={`triangles`} />
      <img src={POINTS} alt="" className="points" />
    </div>
  );
};

export default Intro;
