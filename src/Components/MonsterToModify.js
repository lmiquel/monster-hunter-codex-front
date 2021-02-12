import React, { Component } from "react";
import axios from "axios";

import ElementsToModify from "./ElementsToModify.js";

import "./Styles/AddMonster.css";

class MonsterToModify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      picture: "",
      severable_tail: false,
      poison: "",
      sleep: "",
      paralysis: "",
      blast: "",
      stun: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const getMonsterToModifyData = async () => {
      await axios
        .get(`http://localhost:5000/api/get/monster/${this.props.match.params.monsterId}`)
        .then((res) => {
          this.setState(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });

      await axios
        .get(`http://localhost:5000/api/get/ailments/${this.state.id}`)
        .then((res) => {
          this.setState(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getMonsterToModifyData();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .put(`http://localhost:5000/api/put/monster/${this.state.id}`, this.state)
      .then((res) => {
        console.log("res:", res);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error: ", err.message);
        }
        console.log(err.config);
      });
    alert(`${this.state.name} a bien été modifié !`);
  };

  render() {
    const {
      name,
      picture,
      severable_tail,
      fire,
      water,
      thunder,
      ice,
      dragon,
      poison,
      sleep,
      paralysis,
      blast,
      stun,
    } = this.state;
    return (
      <div>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div className="box-identity-monster">
            <input
              className="input-text"
              type="text"
              name="name"
              placeholder="Nom du monstre"
              value={name}
              onChange={this.handleChange}
            />
            <input
              className="input-text"
              type="text"
              name="picture"
              placeholder="Lien vers l'image (png uniquement) du monstre"
              value={picture}
              onChange={this.handleChange}
            />
          </div>
          <div className="box-ailments">
            <h2>
              Fléaux <br />
              (Mettre entre une et trois ⭐)
            </h2>
            <input
              className="input-text"
              type="text"
              name="poison"
              placeholder="Poison"
              maxLength="3"
              value={poison}
              onChange={this.handleChange}
            />
            <input
              className="input-text"
              type="text"
              name="sleep"
              placeholder="Sommeil"
              maxLength="3"
              value={sleep}
              onChange={this.handleChange}
            />
            <input
              className="input-text"
              type="text"
              name="paralysis"
              placeholder="Paralysie"
              maxLength="3"
              value={paralysis}
              onChange={this.handleChange}
            />
            <input
              className="input-text"
              type="text"
              name="blast"
              placeholder="Explosion"
              maxLength="3"
              value={blast}
              onChange={this.handleChange}
            />
            <input
              className="input-text"
              type="text"
              name="stun"
              placeholder="Étourdissement"
              maxLength="3"
              value={stun}
              onChange={this.handleChange}
            />
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="severable_tail"
              value={severable_tail}
              checked={this.state.severable_tail}
              onChange={this.handleInputChange}
            />
            <label>Cochez cette case si sa queue peut être coupée</label>
          </div>
          <div className="submit-container">
            <input className="submit-form" type="submit" value="Valider" />
          </div>
        </form>
        <ElementsToModify id={this.props.match.params.monstrId}/>
        <div className="next-container">
          <a href={`http://localhost:3000/admin/add-locations/${name}`}>
            <button className="next">Suivant</button>
          </a>
        </div>
      </div>
    );
  }
}

export default MonsterToModify;
