import React, { Component } from "react";
import axios from "axios";

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
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  //   axios
  //     .post(`http://localhost:5000/api/post/new-monster`, {
  //       newMonster,
  //     })
  //     .then((res) => {
  //       console.log("res:", res);
  //     })
  //     .catch((err) => {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else if (err.request) {
  //         console.log(err.request);
  //       } else {
  //         console.log("Error: ", err.message);
  //       }
  //       console.log(err.config);
  //     });

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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nom du monstre"
            value={name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Image (png uniquement) du monstre"
            value={picture}
            onChange={this.handleChange}
          />
          <h2>Éléments (Mettre entre une et trois ⭐ ou une ❌)</h2>
          <input
            type="text"
            placeholder="Feu"
            maxLength="3"
            value={fire}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Eau"
            maxLength="3"
            value={water}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Foudre"
            maxLength="3"
            value={thunder}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Glace"
            maxLength="3"
            value={ice}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Dragon"
            maxLength="3"
            value={dragon}
            onChange={this.handleChange}
          />
          <h2>Fléaux (Mettre entre une et trois ⭐)</h2>
          <input
            type="text"
            placeholder="Poison"
            maxLength="3"
            value={poison}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Sommeil"
            maxLength="3"
            value={sleep}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Paralysie"
            maxLength="3"
            value={paralysis}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Explosion"
            maxLength="3"
            value={blast}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Étourdissement"
            maxLength="3"
            value={stun}
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            value={severable_tail}
            onChange={() => !this.state.severable_tail}
          />
          <label>Cochez cette case si sa queue peut être coupée</label>
          <div>
            <input className="submit-form" type="submit" value="Valider" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddMonster;
