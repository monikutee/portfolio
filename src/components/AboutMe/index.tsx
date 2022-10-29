import React from "react";
import "./aboutMe.scss";
import { SKILLS } from "../../constants";

const AboutMe: React.FC = () => {
  return (
    <div className="about_me" id="about-me">
      <div className="about_me-title">
        <h1>APIE MANE</h1>
        <div className="divider" />
      </div>
      <div className="about_me-info">
        <div className="skills_section">
          <h3>Mano įgūdžiai</h3>
          <div className="skils">
            {SKILLS.map((item, key) => (
              <div key={key} className="skill_item">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="what_do_i_do">
          <h3>Kaip aš dirbu?</h3>
          <ul>
            <li>
              Programuojant orientuojuosi į kiekvieno ekrano dydžio rezoliuciją,
              kad kiekvienas Jūsų saitvietės lankytojas, naudodamasis svetaine,
              liktų patenkintas
            </li>
            <li>
              Programuoju su naujausiomis technologijomis, kad Jūsų svetainės
              kodas neatsiliktų nuo tendencijų
            </li>
            <li>Laikausi švaraus kodo gairių</li>
            <li>
              Programuojant rašau visų tipų testus: vienetinius, integracinius
              bei automatizuotus.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
