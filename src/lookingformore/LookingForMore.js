import './LookingForMore.css';
import React, { useState, useEffect } from 'react';

function Jokes() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then(response => response.json())
      .then(data => setJoke(data.jokes[0].setup + ' ' + data.jokes[0].punchline))
      .catch(error => console.log(error));
  }, []);

  const handleClick = () => {
    fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then(response => response.json())
      .then(data => setJoke(data.jokes[0].setup + ' ' + data.jokes[0].punchline))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Jokes</h1>
      <p>Click the button to get a programming joke:</p>
      <button onClick={handleClick}>Get Joke</button>
      <p>{joke}</p>
      
    </div>
  );
}

export default Jokes;

