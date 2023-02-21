import React, { useState, useEffect } from 'react';

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
      <form>
    <button>Parks</button>
       </form>

      {parkData.map((park) => (
        <div key={park.id}>
          <h2>{park.fullName}</h2>
          <p>{park.description}</p>
          <ul>
            {park.activities.map((activity) => (
              <activity key={activity.id} activity={activity} />
            ))}
          </ul>
          <form>
            <button>
              <h3>Park Rules</h3>
              </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default App;
