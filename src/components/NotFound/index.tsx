import React from "react";
import "./notFound.scss";

const NotFound: React.FC = () => {
  return (
    <div className="not_found_root">
      <svg viewBox="0 0 1320 300" className="not_found">
        <defs>
          <pattern
            id="GPattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(35)"
          >
            <animateTransform
              attributeType="xml"
              attributeName="patternTransform"
              type="rotate"
              from="35"
              to="395"
              begin="0"
              dur="160s"
              repeatCount="indefinite"
            />
            <circle cx="10" cy="10" r="10" stroke="none" fill="#f9e95e">
              <animate
                attributeName="r"
                type="xml"
                from="1"
                to="1"
                values="1; 10; 1"
                begin="0s"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          </pattern>
        </defs>

        <symbol id="s-text">
          <text textAnchor="middle" x="35%" y="50%" dy=".35em">
            4
          </text>
        </symbol>
        <symbol id="v-text">
          <text textAnchor="middle" x="50%" y="50%" dy=".35em">
            0
          </text>
        </symbol>
        <symbol id="g-text">
          <text textAnchor="middle" x="65%" y="50%" dy=".35em">
            4
          </text>
        </symbol>

        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#v-text" className="text1" />
        <use xlinkHref="#v-text" className="text1" />
        <use xlinkHref="#v-text" className="text1" />

        <use
          id="g-usetag"
          xlinkHref="#g-text"
          className="text2"
          style={{ fill: "url(#GPattern)" }}
        />
      </svg>
    </div>
  );
};

export default NotFound;
