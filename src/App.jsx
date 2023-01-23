import { useState } from 'react';

import './css/App.css';
import Asteroid from './Asteroid';
import Rabbit from './Rabbit';
import Sky from './Sky';
import Carrot from './Carrot';
import { useEffect } from 'react';

function App() {
  // X: Min: 0, Max: 880
  // Y: Min: 0, Max: 425
  const [score, setScore] = useState(0);
  const [rabbitPos, setRabbitPos] = useState(200);
  const [rabbitVel, setRabbitVel] = useState(0);
  const [rabbitAcc, setRabbitAcc] = useState(0);
  const [bonk, setBonk] = useState(false);
  const [asteroids, setAsteroids] = useState([]);
  const [carrots, setCarrots] = useState([]);
  const [stars, setStars] = useState(
    new Array(40).fill().map((star, index, array) => {
      return [Math.random() * 485, Math.random() * 880, index];
    })
  );

  useEffect(() => {
    // Initialize game
    setScore(0);
    setAsteroids(new Array(10).fill().map(() => new Asteroid()));
    setCarrots(new Array(5).fill().map(() => new Carrot()));
  }, []);

  const handleKeyDown = (ev) => {
    if (
      (ev.code === 'KeyW' && rabbitPos + rabbitVel < 424) ||
      (ev.code === 'ArrowUp' && rabbitPos + rabbitVel < 424)
    ) {
      setRabbitAcc(0.1);
    } else if (
      (ev.code === 'KeyS' && rabbitPos + rabbitVel > 1) ||
      (ev.code === 'ArrowDown' && rabbitPos + rabbitVel > 1)
    ) {
      setRabbitAcc(-0.1);
    }
  };

  const handleKeyUp = (ev) => {
    if (
      (ev.code === 'KeyW' && rabbitAcc > 0) ||
      (ev.code === 'ArrowUp' && rabbitAcc > 0) ||
      (ev.code === 'KeyS' && rabbitAcc < 0) ||
      (ev.code === 'ArrowDown' && rabbitAcc < 0)
    ) {
      setRabbitAcc(0);
    }
  };

  requestAnimationFrame(() => {
    if (rabbitPos + rabbitVel >= 0 && rabbitPos + rabbitVel <= 425) {
      setBonk(false);
      setRabbitVel(rabbitVel + rabbitAcc);
      setRabbitPos(rabbitPos + rabbitVel);
      asteroids.forEach((asteroid) => moveObject(asteroid));
      carrots.forEach((carrot) => moveObject(carrot));
    } else {
      setBonk(true);
      setRabbitVel(0);
    }
    setStars(
      stars.map((star, index, array) => {
        if (star[1] < -50) {
          return [Math.random() * 485, Math.random() * 100 + 880, index];
        }
        return [star[0], star[1] - 0.4, index];
      })
    );
  });

  const moveObject = (object) => {
    if (isTouchingPlayer(object)) {
      setScore(score + object.value);
      object.reset();
    }
    if (object.left < -50) {
      object.reset();
    }
    object.moveLeft(1);
  };

  const isTouchingPlayer = (object) => {
    if (
      object.top <= rabbitPos + 15 &&
      object.top >= rabbitPos - 70 &&
      object.left >= 40 &&
      object.left <= 120
    )
      return true;
    return false;
  };

  const asteroidElements = asteroids.map((asteroid, index, array) =>
    asteroid.toElement(index)
  );
  const carrotElements = carrots.map((carrot, index, array) =>
    carrot.toElement(index)
  );

  return (
    <div className="App">
      <h1>Rabbit Run</h1>
      <main tabIndex={-1} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
        <Sky stars={stars} />
        <Rabbit pos={rabbitPos} vel={rabbitVel} bonk={bonk} />
        {asteroidElements}
        {carrotElements}
      </main>
      <h3>Score: {score}</h3>
    </div>
  );
}

export default App;
