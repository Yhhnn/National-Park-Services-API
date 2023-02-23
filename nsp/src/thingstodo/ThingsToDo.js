import React, { useState, useEffect } from 'react';
import './ThingsToDo.css';

function Parks({ parks }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const allActivities = parks.reduce((acc, park) => {
      return [...acc, ...park.activities];
    }, []);
    const uniqueActivities = [...new Set(allActivities.map(activity => activity.name))];
    setActivities(uniqueActivities);
  }, [parks]);

  return (
    <div>
      <h1>Parks</h1>
      <p>Here are some things you can do:</p>
      <ul>
        {activities.map(activity => (
          <li key={activity}><a href="#">{activity}</a></li>
        ))}
      </ul>
    </div>
  );
}

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
      <Parks parks={parks} />
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