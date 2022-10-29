import React from "react";
import "./header.scss";
import MENU from "../../assets/menu.svg";

const Header: React.FC<{
  aboutMeRef: React.MutableRefObject<HTMLDivElement | null>;
  projectsRef: React.MutableRefObject<HTMLDivElement | null>;
  lifeInfoRef: React.MutableRefObject<HTMLDivElement | null>;
  contactsRef: React.MutableRefObject<HTMLDivElement | null>;
}> = ({ aboutMeRef, projectsRef, lifeInfoRef, contactsRef }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const scrollToAboutMe = () =>
    aboutMeRef.current
      ? window.scrollTo({
          top: aboutMeRef.current.offsetTop - 85,
          behavior: "smooth",
        })
      : undefined;

  const scrollToProjects = () =>
    projectsRef.current
      ? window.scrollTo({
          top: projectsRef.current.offsetTop - 85,
          behavior: "smooth",
        })
      : undefined;

  const scrollToLifeInfo = () =>
    lifeInfoRef.current
      ? window.scrollTo({
          top: lifeInfoRef.current.offsetTop - 85,
          behavior: "smooth",
        })
      : undefined;

  const scrollToContacts = () =>
    contactsRef.current
      ? window.scrollTo({
          top: contactsRef.current.offsetTop - 85,
          behavior: "smooth",
        })
      : undefined;

  const MobileDrawer = () => {
    return (
      <div className="hidden">
        <nav className="mobile_nav">
          <li onClick={scrollToAboutMe}>APIE MANE</li>
          <li onClick={scrollToProjects}>ASMENINIAI PROJEKTAI</li>
          <li onClick={scrollToLifeInfo}>GYVENIMO APRAŠYMAS</li>
          <li onClick={scrollToContacts}>KONTAKTAI</li>
        </nav>
      </div>
    );
  };
  return (
    <header className={`collapsible ${isOpen ? "openCollapsible" : ""}`}>
      <div className="header">
        <div className="logo">MONIKA PETRULEVIČ</div>
        <nav className="desktop_nav">
          <li onClick={scrollToAboutMe}>APIE MANE</li>
          <li onClick={scrollToProjects}>ASMENINIAI PROJEKTAI</li>
          <li onClick={scrollToLifeInfo}>GYVENIMO APRAŠYMAS</li>
          <li onClick={scrollToContacts}>KONTAKTAI</li>
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
