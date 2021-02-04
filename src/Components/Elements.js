import React, { useEffect, useState } from "react";
import axios from "axios";

import fire from "./Assets/fire.png";
import water from "./Assets/water.png";
import thunder from "./Assets/thunder.png";
import ice from "./Assets/ice.png";
import dragon from "./Assets/dragon.png";

import "./Styles/Monster.css";

const Elements = (props) => {
  const [elements, getElements] = useState([]);

  useEffect(() => {
    const getDataElements = async () => {
      await axios
        .get(`http://localhost:5000/api/get/elements/${props.id}`)
        .then((res) => {
          getElements(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getDataElements();
  }, []);

  console.log(elements);

  return (
    <div className="caracteristics" key={elements.id}>
      <h2>ÉLÉMENTS</h2>
      <div className="element-list-container">
        <div className="list">
          <img className="icons" src={fire} alt="fire" />
          <p className="element-list">FEU {elements.fire}</p>
        </div>
        <div className="list">
          <img className="icons" src={water} alt="water" />
          <p className="element-list">EAU {elements.water}</p>
        </div>
        <div className="list">
          <img className="icons" src={thunder} alt="thunder" />
          <p className="element-list">FOUDRE {elements.thunder}</p>
        </div>
        <div className="list">
          <img className="icons" src={ice} alt="ice" />
          <p className="element-list">GLACE {elements.ice}</p>
        </div>
        <div className="list">
          <img className="icons" src={dragon} alt="dragon" />
          <p className="element-list">DRAGON {elements.dragon}</p>
        </div>
      </div>
    </div>
  );
};

export default Elements;
