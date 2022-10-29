import React from "react";
import "./footer.scss";

const Footer: React.FC<{
  aboutMeRef: React.MutableRefObject<HTMLDivElement | null>;
  projectsRef: React.MutableRefObject<HTMLDivElement | null>;
  lifeInfoRef: React.MutableRefObject<HTMLDivElement | null>;
  contactsRef: React.MutableRefObject<HTMLDivElement | null>;
}> = ({ aboutMeRef, projectsRef, lifeInfoRef, contactsRef }) => {
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
  return (
    <footer className="footer">
      <nav>
        <li onClick={scrollToAboutMe}>APIE MANE</li>
        <li onClick={scrollToProjects}>ASMENINIAI PROJEKTAI</li>
        <li onClick={scrollToLifeInfo}>GYVENIMO APRAŠYMAS</li>
        <li onClick={scrollToContacts}>KONTAKTAI</li>
      </nav>
      <p>© 2022 - Monika Petrulevič - Visos teisės saugomos</p>
    </footer>
  );
};

export default Footer;
