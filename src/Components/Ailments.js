import React, { useEffect, useState } from "react";
import axios from "axios";

import poison from "./Assets/poison.png";
import sleep from "./Assets/sleep.png";
import paralysis from "./Assets/paralysis.png";
import blastscourge from "./Assets/blastscourge.png";
import stun from "./Assets/stun.png";

import "./Styles/Monster.css";

const Ailments = (props) => {
  const [ailments, getAilments] = useState([]);

  useEffect(() => {
    const getDataAilments = async () => {
      await axios
        .get(`http://localhost:5000/api/get/ailments/${props.id}`)
        .then((res) => {
          getAilments(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getDataAilments();
  }, []);

  console.log(ailments);

  return (
    <div className='caracteristics' key={ailments.id}>
      <h2>FLÉAUX</h2>
      <div className='element-list-container'>
        <div className="list">
          <img className="icons" src={poison} alt="poison" />
          <p className="element-list">POISON {ailments.poison}</p>
        </div>
        <div className="list">
          <img className="icons" src={sleep} alt="sleep" />
          <p className="element-list">SOMMEIL {ailments.sleep}</p>
        </div>
        <div className="list">
          <img className="icons" src={paralysis} alt="paralysis" />
          <p className="element-list">PARALYSIE {ailments.paralysis}</p>
        </div>
        <div className="list">
          <img className="icons" src={blastscourge} alt="blast" />
          <p className="element-list">EXPLOSION {ailments.blast}</p>
        </div>
        <div className="list">
          <img className="icons" src={stun} alt="stun" />
          <p className="element-list">ÉTOURDISSEMENT {ailments.stun}</p>
        </div>
      </div>
    </div>
  );
};

export default Ailments;
