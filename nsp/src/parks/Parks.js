/*import React, { useState, useEffect } from 'react';

function App() {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks?api_key=b8h1CMwqjOFrBiGsxx7Fcn2MFPPtFIjCa2Kb5Zpu')
      .then(res => res.json())
      .then(data => setParks(data.data));
  }, []);

  return (
    <div>
      <h1>Parks</h1>
      <ul>
        {parks.map(park => (
          <li key={park.id}>
            {park.fullName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;*/