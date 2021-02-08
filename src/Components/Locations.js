import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Styles/Monster.css";

const Locations = (props) => {
  const [locations, getLocations] = useState([]);

  useEffect(() => {
    const getDataLocations = async () => {
      await axios
        .get(`http://localhost:5000/api/get/locations/${props.id}`)
        .then((res) => {
          getLocations(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getDataLocations();
  }, []);

  console.log(locations);

  return (
    <div className="locations-container">
      <h2>HABITAT</h2>
      {locations.map((location) => (
        <div key={location.id}>
          <p className="place">{location.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Locations;
