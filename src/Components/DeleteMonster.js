import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Styles/MonstersList.css";

const DeleteMonsters = () => {
  const [monstersToDelete, getMonstersToDelete] = useState([]);
  const [specificMonsterToDelete, getSpecificMonsterToDelete] = useState("");

  useEffect(() => {
    const getNewData = async () => {
      await axios
        .get(`http://localhost:5000/api/get/monsters`)
        .then((res) => {
          getMonstersToDelete(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getNewData();
  }, []);

  const filteredMonstersToDelete = monstersToDelete.filter(
    (filteredMonsterToDelete) => {
      return filteredMonsterToDelete.name
        .toLowerCase()
        .includes(specificMonsterToDelete.toLowerCase());
    }
  );

  return (
    <div>
      <h1 className="center">Supprimer un monstre</h1>
      <div className="input-container">
        <input
          className="search-input"
          type="text"
          placeholder="Rathalos"
          onChange={(e) => getSpecificMonsterToDelete(e.target.value)}
        />
      </div>
      <div className="cards-container">
        {filteredMonstersToDelete.map((monsterToDelete) => (
          <form
            className="monster-card"
            key={monsterToDelete.id}
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .delete(
                  `http://localhost:5000/api/delete/monster/${monsterToDelete.id}`
                )
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
              alert(`${monsterToDelete.name} a bien été supprimé !`);
            }}
          >
            <a>
              <h3 className="monster-name">
                {monsterToDelete.name.toUpperCase()}
              </h3>
              <div className="monster-img-container">
                <img
                  className="monster-img"
                  src={monsterToDelete.picture}
                  alt={monsterToDelete.name}
                />
              </div>
            </a>
            <input className="admin" type="submit" value="SUPPRIMER" />
          </form>
        ))}
      </div>
    </div>
  );
};

export default DeleteMonsters;
