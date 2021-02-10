import React, { Component } from "react";
import axios from "axios";

import "./Styles/AddMonster.css";

class AddMonster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      picture: "",
      severable_tail: false,
      fire: "",
      water: "",
      thunder: "",
      ice: "",
      dragon: "",
      poison: "",
      sleep: "",
      paralysis: "",
      blast: "",
      stun: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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
    axios
      .post(`http://localhost:5000/api/post/new-monster`, this.state)
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
    alert(`${this.state.name} a bien été enregistré !`);
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
          <div className="box-elements">
            <h2>
              Éléments <br />
              (Mettre entre une et trois ⭐ ou une ❌)
            </h2>
            <input
              className="input-text"
              type="text"
              name="fire"
              placeholder="Feu"
              maxLength="3"
              value={fire}
              onChange={this.handleChange}
            />
            <input
              className="input-text"
              type="text"
              name="water"
              placeholder="Eau"
              maxLength="3"
              value={water}
              onChange={this.handleChange}
            />
            <input
              className="input-text"
              type="text"
              name="thunder"
              placeholder="Foudre"
              maxLength="3"
              value={thunder}
              onChange={this.handleChange}
            />
            <input
              className="input-text"
              type="text"
              name="ice"
              placeholder="Glace"
              maxLength="3"
              value={ice}
              onChange={this.handleChange}
            />
            <input
              className="input-text"
              type="text"
              name="dragon"
              placeholder="Dragon"
              maxLength="3"
              value={dragon}
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
        <div className="next-container">
          <a href={`http://localhost:3000/admin/add-locations/${name}`}>
            <button className="next">Suivant</button>
          </a>
        </div>
      </div>
    );
  }
}

export default AddMonster;
