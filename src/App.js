import React, { useState, useEffect } from 'react';
//import Activity from '.Components/Thingstodo/Activity';

const App = () => {
  const [parkData, setParkData] = useState([]);

  useEffect(() => {
    const fetchParkData = async () => {
      const response = await fetch(
        'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=bV8ZuEbygnA1MeCloBrSanqdglZI8EiLkbPxmuRD'
      );
      const data = await response.json();
      setParkData(data.data);
    };
    fetchParkData();
  }, []);

  return (
    <div>
      {parkData.map((park) => (
        <div key={park.id}>
          <h2>{park.fullName}</h2>
          <p>{park.description}</p>
          <ul>
            {park.activities.map((activity) => (
              <Activity key={activity.id} activity={activity} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default App;
