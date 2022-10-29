import React from "react";
import "./contacts.scss";
import MAIL from "../../assets/mail.svg";
import PHONE from "../../assets/phone.svg";
import LINKEDIN from "../../assets/linkedin.svg";

const Contacts: React.FC = () => {
  return (
    <div className="contacts_root">
      <div className="title">
        <h1>KONTAKTAI</h1>
        <div className="divider" />
      </div>
      <div className="contacts">
        <div className="contacts_info">
          <img src={MAIL} alt="mail" />
          <h2>EL. PAŠTAS</h2>
          <a href="mailto:petrulevicmonika@gmail.com">
            <p>petrulevicmonika@gmail.com</p>
          </a>
        </div>
        <div className="contacts_info">
          <img src={PHONE} alt="mail" />
          <h2>TELEFONO NUMERIS</h2>
          <a href="tel:+37068238136">
            <p>+37068238136</p>
          </a>
        </div>
        <div className="contacts_info">
          <img src={LINKEDIN} alt="mail" />
          <h2>LINKEDIN</h2>
          <a
            href="www.linkedin.com/in/monikapetrulevic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>linkedin.com/in/monikapetrulevic</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
