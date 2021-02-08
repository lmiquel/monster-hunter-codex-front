import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Styles/MonstersList.css";

const MonstersList = () => {
  const [monsters, getMonsters] = useState([]);
  const [specificMonster, getSpecificMonster] = useState("");

  useEffect(() => {
    const getListData = async () => {
      await axios
        .get(`http://localhost:5000/api/get/monsters`)
        .then((res) => {
          getMonsters(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getListData();
  }, []);

  const filteredMonsters = monsters.filter((filteredMonster) => {
    return filteredMonster.name
      .toLowerCase()
      .includes(specificMonster.toLowerCase());
  });

  return (
    <div>
      <a href="/admin">
        <button className="admin">Admin</button>
      </a>
      <div className="input-container">
        <input
          className="search-input"
          type="text"
          placeholder="Rathalos"
          onChange={(e) => getSpecificMonster(e.target.value)}
        />
      </div>
      <div className="cards-container">
        {filteredMonsters.map((monster) => (
          <div className="monster-card" key={monster.id}>
            <a href={`monster/${monster.id}`}>
              <h3 className="monster-name">{monster.name.toUpperCase()}</h3>
              <div className="monster-img-container">
                <img
                  className="monster-img"
                  src={monster.picture}
                  alt={monster.name}
                />
              </div>
            </a>
            <p className="clique">Clique sur l'image pour en savoir plus !</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonstersList;
