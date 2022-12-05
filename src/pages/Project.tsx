import React from "react";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../constants";
import Slider from "react-slick";
import "./project.scss";

import LEFT from "../assets/leftChevron.svg";
import RIGHT from "../assets/rightChevron.svg";
import YELLOW_CIRCLE from "../assets/decorations/yellow_circle_plain.svg";
import GREEN_CIRCLE from "../assets/decorations/green_circle.svg";
import RED_BALL from "../assets/decorations/red_ball.svg";

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
  slidesToShow: 1,
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
const COLORS = ["#F9E95E", "#83E573", "#EE4074"];

export const Project: React.FC = () => {
  const { id } = useParams();
  const [active, setActive] = React.useState<{
    title: string;
    body: string;
    id: number;
    image: string;
    stack: string[];
    link: string;
    photos: string[];
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
          {active.photos.map((photo, key) => (
            <div key={key} className="custom_slide">
              <img src={photo} alt="project" />
            </div>
          ))}
        </Slider>
      </div>
      <img src={active.image} alt="project laptop" className="laptop_photo" />
      <div className="project_info">
        <div>
          <h3>Projekto aprašymas</h3>
          {active.body}
        </div>
        <div>
          <h3>Naudotos technologijos</h3>
          <div className="skils">
            {active.stack.map((item, key) => (
              <div
                key={key}
                className="skill_item"
                style={{
                  borderColor: COLORS[Math.floor(Math.random() * (2 + 1))],
                }}
              >
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
      <img src={GREEN_CIRCLE} alt="" className="green_circle" />
      <img src={RED_BALL} alt="" className="red_ball" />
      <img src={YELLOW_CIRCLE} alt="" className="yellow_circle" />
    </div>
  ) : (
    <h1>TOKIO PROJEKTO NĖRA</h1>
  );
};
