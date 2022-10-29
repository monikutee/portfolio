import React from "react";
import "./header.scss";
import MENU from "../../assets/menu.svg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const MobileDrawer = () => {
    return (
      <div className="hidden">
        <nav className="mobile_nav">
          <li>APIE MANE</li>
          <li>ASMENINIAI PROJEKTAI</li>
          <li>GYVENIMO APRAŠYMAS</li>
          <li>KONTAKTAI</li>
        </nav>
      </div>
    );
  };
  return (
    <header className={`collapsible ${isOpen ? "openCollapsible" : ""}`}>
      <div className="header">
        <div className="logo">MONIKA PETRULEVIČ</div>
        <nav className="desktop_nav">
          <li>APIE MANE</li>
          <li>ASMENINIAI PROJEKTAI</li>
          <li>GYVENIMO APRAŠYMAS</li>
          <li>KONTAKTAI</li>
        </nav>
        <button className="menu_btn" onClick={toggle}>
          <img src={MENU} alt="menu" />
        </button>
      </div>
      {MobileDrawer()}
    </header>
  );
};

export default Header;
