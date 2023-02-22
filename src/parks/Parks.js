import './Parks.css';
import React, { useState, useEffect } from 'react';

function Parks() {
  return (
    <div>
      <h1>Parks</h1>
      <p>Here are some things you can do:</p>
      <ul>
        <li><a href="#">Activity 1</a></li>
        <li><a href="#">Activity 2</a></li>
        <li><a href="#">Activity 3</a></li>
      </ul>
    </div>
  );
}

//export default Parks;

function Parque() {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks?api_key=b8h1CMwqjOFrBiGsxx7Fcn2MFPPtFIjCa2Kb5Zpu')
      .then(response => response.json())
      .then(data => setParks(data.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>National Parks</h1>
      {parks.map(park => (
        <div key={park.id}>
          <h2>{park.fullName}</h2>
          <p>{park.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Parque;



