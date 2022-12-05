import React from "react";
import "./header.scss";
import MENU from "../../assets/menu.svg";
import { HashLink } from "react-router-hash-link";
import { scrollWithHeaderOffset } from "../../helpers";
import LOGO from "../../assets/logo.svg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const MobileDrawer = () => {
    return (
      <div className="hidden">
        <nav className="mobile_nav">
          <HashLink
            to="/#about-me"
            scroll={(el) => {
              setIsOpen(false);
              scrollWithHeaderOffset(el);
            }}
          >
            <li>APIE MANE</li>
          </HashLink>
          <HashLink
            to="/#projects"
            scroll={(el) => {
              setIsOpen(false);
              scrollWithHeaderOffset(el);
            }}
          >
            <li>ASMENINIAI PROJEKTAI</li>
          </HashLink>
          <HashLink
            to="/#life-info"
            scroll={(el) => {
              setIsOpen(false);
              scrollWithHeaderOffset(el);
            }}
          >
            <li>GYVENIMO APRAŠYMAS</li>
          </HashLink>
          <HashLink
            to="/#contacts"
            scroll={(el) => {
              setIsOpen(false);
              scrollWithHeaderOffset(el);
            }}
          >
            <li>KONTAKTAI</li>
          </HashLink>
        </nav>
      </div>
    );
  };
  return (
    <header className={`collapsible ${isOpen ? "openCollapsible" : ""}`}>
      <div className="header">
        <div className="logo">
          <a href="/">
            <img src={LOGO} alt="logo" />
          </a>
        </div>
        <nav className="desktop_nav">
          <HashLink to="/#about-me" scroll={(el) => scrollWithHeaderOffset(el)}>
            <li>APIE MANE</li>
          </HashLink>
          <HashLink to="/#projects" scroll={(el) => scrollWithHeaderOffset(el)}>
            <li>ASMENINIAI PROJEKTAI</li>
          </HashLink>
          <HashLink
            to="/#life-info"
            scroll={(el) => scrollWithHeaderOffset(el)}
          >
            <li>GYVENIMO APRAŠYMAS</li>
          </HashLink>
          <HashLink to="/#contacts" scroll={(el) => scrollWithHeaderOffset(el)}>
            <li>KONTAKTAI</li>
          </HashLink>
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
