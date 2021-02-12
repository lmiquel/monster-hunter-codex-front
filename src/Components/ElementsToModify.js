import React, { Component } from "react";
import axios from "axios";

import "./Styles/AddMonster.css";

class ElementsToModify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fire: "",
      water: "",
      thunder: "",
      ice: "",
      dragon: "",
    };
  }

  componentDidMount() {
    const getElementsToModifyData = async () => {

      await axios
        .get(`http://localhost:5000/api/get/elements/${this.props.id}`)
        .then((res) => {
          this.setState(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getElementsToModifyData();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .put(
        `http://localhost:5000/api/put/elements/${this.state.id}`,
        this.state
      )
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
    alert(`Les éléments ont bien été modifiés !`);
  };

  render() {
    const { fire, water, thunder, ice, dragon } = this.state;
    return (
      <div>
        <form className="form-container" onSubmit={this.handleSubmit}>
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
          <div className="submit-container">
            <input className="submit-form" type="submit" value="Valider" />
          </div>
        </form>
      </div>
    );
  }
}

export default ElementsToModify;
