import React from "react";
import { useParams } from "react-router-dom";
import { PROJECTS, PROJECT_PHOTOS } from "../constants";
import Slider from "react-slick";
import "./project.scss";

import LEFT from "../assets/leftChevron.svg";
import RIGHT from "../assets/rightChevron.svg";
import LAPTOP from "../assets/laptop.svg";

const ArrowButtonNext = (props: any) => {
  return (
    <button className="slider_btn next" onClick={props.onClick}>
      <img src={RIGHT} alt="next" />
    </button>
  );
};

const ArrowButtonPrevious = (props: any) => {
  return (
    <button className="slider_btn previous" onClick={props.onClick}>
      <img src={LEFT} alt="previous" />
    </button>
  );
};

const MAIN_SETTINGS = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  centerMode: true,
  dots: true,
  nextArrow: <ArrowButtonNext />,
  prevArrow: <ArrowButtonPrevious />,

  responsive: [
    {
      breakpoint: 700,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
    },
  ],
};

export const Project: React.FC = () => {
  const { id } = useParams();
  const [active, setActive] = React.useState<{
    title: string;
    body: string;
    id: number;
    image: string;
    stack: string[];
    link: string;
  } | null>(null);

  React.useEffect(() => {
    if (PROJECTS[0].id.toString() === id) {
      setActive(PROJECTS[0]);
    } else if (PROJECTS[1].id.toString() === id) {
      setActive(PROJECTS[1]);
    } else {
      setActive(null);
    }
  }, [id]);

  return active ? (
    <div className="project_root">
      <h1>{active?.title}</h1>
      <div className="project_photos">
        <Slider {...MAIN_SETTINGS}>
          {PROJECT_PHOTOS.map((photo, key) => (
            <div key={key} className="custom_slide">
              <img src={photo} alt="project" />
            </div>
          ))}
        </Slider>
      </div>
      <img src={LAPTOP} alt="project laptop" className="laptop_photo" />
      <div className="project_info">
        <div>
          <h3>Projekto aprašymas</h3>
          {active.body}
        </div>
        <div>
          <h3>Naudotos technologijos</h3>
          <div className="skils">
            {active.stack.map((item, key) => (
              <div key={key} className="skill_item">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Pamatyti visą projektą</h3>
          <div className="project_btn">
            <a href={active.link} target="_blank" rel="noopener noreferrer">
              <button>GITHUB NUORODA</button>
            </a>
            <a href="/">
              <button className="go_back">GRĮŽTI Į PAGRINDINĮ</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>TOKIO PROJEKTO NĖRA</h1>
  );
};
