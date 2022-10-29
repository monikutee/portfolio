import React from "react";
import "./lifeInfo.scss";
import PHOTO from "../../assets/photo.svg";

const LifeInfo: React.FC<{
  reference: React.MutableRefObject<HTMLDivElement | null>;
}> = ({ reference }) => {
  return (
    <div className="life_info-root" ref={reference}>
      <div className="title">
        <h1>GYVENIMO APRAŠYMAS</h1>
        <div className="divider" />
      </div>
      <div className="info_sections">
        <div className="section">
          <h3>Išsilavinimas</h3>
          <div className="steps">
            <div className="step">
              <div className="ball" />
              <div className="line" />
            </div>
            <div className="text">
              <p>
                <strong>Vilnius Tech.</strong>
              </p>
              <p>Multimedija ir kompiuterinis dizainas</p>
              <p>2020 - 2024</p>
            </div>
          </div>
          <div className="steps">
            <div className="step">
              <div className="ball" />
            </div>
            <div className="text">
              <p>
                <strong>Vilniaus Simono Daukanto gimnazija </strong>
              </p>
              <p>2016 - 2020</p>
            </div>
          </div>
        </div>
        <div className="section">
          <h3>Sertifikatai</h3>
          <img src={PHOTO} alt="projects_photo" />
          <img src={PHOTO} alt="projects_photo" />
        </div>
        <div className="section">
          <h3>Patirtis</h3>
          <div className="steps">
            <div className="step">
              <div className="ball" />
              <div className="line" />
            </div>
            <div className="text">
              <p>
                <strong>Profitus</strong>
              </p>
              <p>Puslapių programuotoja</p>
              <p>2022 - Dabar</p>
            </div>
          </div>
          <div className="steps">
            <div className="step">
              <div className="ball" />
              <div className="line" />
            </div>
            <div className="text">
              <p>
                <strong>Crypto Casino</strong>
              </p>
              <p>Puslapių programuotoja</p>
              <p>2021 - 2022</p>
            </div>
          </div>
          <div className="steps">
            <div className="step">
              <div className="ball" />
            </div>
            <div className="text">
              <p>
                <strong>Wix</strong>
              </p>
              <p>Puslapių programuotoja</p>
              <p>2020 - 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeInfo;
