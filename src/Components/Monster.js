import React, { useEffect, useState } from "react";
import axios from "axios";

import Elements from "./Elements.js";
import Ailments from "./Ailments.js";
import Locations from "./Locations.js";

import "./Styles/Monster.css";

const Monster = ({ match }) => {
  const id = match.params.monsterId;
  const [monster, getMonster] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://localhost:5000/api/get/monster/${id}`)
        .then((res) => {
          getMonster(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  console.log(monster);

  return (
    <div className="monster-container" key={monster.id}>
      <div className="img-container">
        <img
          className="big-monster-img"
          src={monster.picture}
          alt={monster.name}
        />
      </div>
      <div className="infos-card">
        <h2 className="monster-name-m">{monster.name}</h2>
        <div className="infos-container">
          <Elements id={id} />
          <Ailments id={id} />
        </div>
        <Locations id={id} />
        <p className="tail">
          Possibilité de couper la queue :{" "}
          {monster.severable_tail === 0 ? "NON" : "OUI"}
        </p>
      </div>
    </div>
  );
};

export default Monster;
