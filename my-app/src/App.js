import { useState, useEffect } from "react";

function App() {
   
  const[data,setData] = useState(null);

  useEffect(() => {
   fetch('https://catfact.ninja/docs')
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
       throw new Error("Server says bad response");
      })
      .then((res)=>{ console.log(res.data); console.log(res);})
      .catch((err)=> console.log(err));
},[]);
    
  return (
    <div>{ data && data.map((userData)=>{
      return <div key={userData.breed}>{userData.country}</div>
    })}
      </div>

  
  );
}

export default App;
