import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HousePage';
import ThingsToDo from './todo/ThingsToDo';
import Parks from './parks/Parks';
import LookingForMore from './lookingformore/LookingForMore';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/things-to-do" element={<ThingsToDo/>} />
        <Route path="/parks" element={<Parks/>} />
        <Route path="/looking-for-more" element={<LookingForMore/>} />
      </Routes>
    </div>
  );
}

export default App;
