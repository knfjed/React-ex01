import React from "react";
import Card from "./Card.jsx";
import "./CardList.css";

function CardList({ data }) {
  return (
    <div className="CardList">
      <header>
        <nav>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 172 172"
            style={{ fill: R:255 G:255 B:255 }}
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#ffffff">
                <path d="M0,14.33333v14.33333h172v-14.33333zM0,78.83333v14.33333h172v-14.33333zM0,143.33333v14.33333h172v-14.33333z"></path>
              </g>
            </g>
          </svg> */}
          <h1>My Air Trips</h1>
        </nav>
      </header>

      {data.map(({ img, title, subtitle, date, location, reference }) => (
        <Card
          className="Card"
          img={img}
          title={title}
          subtitle={subtitle}
          date={date}
          location={location}
          reference={reference}
        />
      ))}

      {/* <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 172 172"
          style=" fill:#000000;"
        >
          <g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
          >
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#e74c3c">
              <path d="M86,6.88c-43.62952,0 -79.12,35.49048 -79.12,79.12c0,43.62952 35.49048,79.12 79.12,79.12c43.62952,0 79.12,-35.49048 79.12,-79.12c0,-43.62952 -35.49048,-79.12 -79.12,-79.12zM110.08,89.44h-20.64v20.64c0,1.90232 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.53768 -3.44,-3.44v-20.64h-20.64c-1.90232,0 -3.44,-1.53768 -3.44,-3.44c0,-1.90232 1.53768,-3.44 3.44,-3.44h20.64v-20.64c0,-1.90232 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.53768 3.44,3.44v20.64h20.64c1.90232,0 3.44,1.53768 3.44,3.44c0,1.90232 -1.53768,3.44 -3.44,3.44z"></path>
            </g>
          </g>
        </svg>
      </a> */}
    </div>
  );
}

export default CardList;
