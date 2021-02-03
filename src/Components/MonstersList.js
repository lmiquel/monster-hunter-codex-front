import React from "react";
import axios from "axios";

import "./Styles/MonstersList.css";

class MonstersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/get/monsters")
      .then((res) => {
        const monsters = res.data;
        this.setState({ monsters });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.state);
  }

  render() {
    const monsters = this.state.monsters;
    return (
      <div>
        <div className="cards-container">
          {monsters.map((monster) => (
            <div className="monster-card" key={monster.id}>
              <a href={`http://localhost:3000/monster/${monster.id}`}>
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
  }
}

export default MonstersList;
