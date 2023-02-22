import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HousePage';
import ThingsToDo from './thingstodo/ThingsToDo';
import Parks from './parks/Parks';
import LookingForMore from './lookingformore/LookingForMore';



function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/things-to-do" component={ThingsToDo} />
        <Route path="/parks" component={Parks} />
        <Route path="/looking-for-more" component={LookingForMore} />
      </Routes>
    </div>
  );
}

export default App;
