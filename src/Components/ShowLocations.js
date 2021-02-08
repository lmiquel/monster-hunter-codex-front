import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Styles/AddMonster.css";

const ShowLocations = ({ match }) => {
  const monsterName = match.params.monsterName;
  const [locations, getLocation] = useState([]);

  useEffect(() => {
    const getDataLocation = async () => {
      await axios
        .get(`http://localhost:5000/api/get/locations`)
        .then((res) => {
          getLocation(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getDataLocation();
  }, []);

  return (
    <div className="locations-container-form">
      {locations.map((location) => (
        <form
          className="form-container-location"
          key={location.id}
          onSubmit={(e) => {
            e.preventDefault();
            const requestBody = { locations_id: location.id };
            axios
              .post(
                `http://localhost:5000/api/post/location/${monsterName}`,
                requestBody
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
            alert(
              `${location.name} a bien été ajouté à la liste des habitats du ${monsterName} !`
            );
          }}
        >
          <h2 className="location-name">{location.name}</h2>
          <div className="img-location-container">
            <img
              className="location-img"
              src={location.picture}
              alt={location.name}
            />
          </div>
          <input className="submit-form-location" type="submit" value="Ajouter" />
        </form>
      ))}
    </div>
  );
};

export default ShowLocations;
