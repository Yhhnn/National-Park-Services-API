import React, { useState, useEffect } from "react";



function App() {
const [activities, setActivities] = useState([])
  useEffect(() => {
   fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=bV8ZuEbygnA1MeCloBrSanqdglZI8EiLkbPxmuRD')
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
       throw new Error("Server says bad response");
      })
      .then((res)=>{ console.log(res.activities); console.log(res);})
      .catch((err)=> console.log(err));
},[]);
    
  return (
    <div>{ activities && activities.map((userActivities)=>{
      return <div key={userActivities.id}>{userActivities.name}</div>
    })}
      </div>);
}


export default App;
