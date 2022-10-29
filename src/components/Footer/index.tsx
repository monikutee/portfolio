import React from "react";
import "./footer.scss";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../../helpers";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <nav>
        <HashLink to="/#about-me" scroll={(el) => scrollWithOffset(el)}>
          <li>APIE MANE</li>
        </HashLink>
        <HashLink to="/#projects" scroll={(el) => scrollWithOffset(el)}>
          <li>ASMENINIAI PROJEKTAI</li>
        </HashLink>
        <HashLink to="/#life-info" scroll={(el) => scrollWithOffset(el)}>
          <li>GYVENIMO APRAŠYMAS</li>
        </HashLink>
        <HashLink to="/#contacts" scroll={(el) => scrollWithOffset(el)}>
          <li>KONTAKTAI</li>
        </HashLink>
      </nav>
      <p>© 2022 - Monika Petrulevič - Visos teisės saugomos</p>
    </footer>
  );
};

export default Footer;
