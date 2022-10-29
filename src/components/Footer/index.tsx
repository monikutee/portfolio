import React from "react";
import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <nav>
        <li>APIE MANE</li>
        <li>ASMENINIAI PROJEKTAI</li>
        <li>GYVENIMO APRAŠYMAS</li>
        <li>KONTAKTAI</li>
      </nav>
      <p>© 2022 - Monika Petrulevič - Visos teisės saugomos</p>
    </footer>
  );
};

export default Footer;
