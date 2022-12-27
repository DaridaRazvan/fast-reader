import { useState } from 'react';
import './App.css';
import CurrentWord from './CurrentWord';
import SpeedSlider from './SpeedSlider';

function App() {
  const [text, setText] = useState('');
  const [words, setWords] = useState([]);
  const [speed, setSpeed] = useState(250);

  const minSpeed = 50;
  const maxSpeed = 600;

  const changeSpeed = (newSpeed) => {
    setSpeed(newSpeed);
  }

  const start = (event) => {
    event.preventDefault();

    const wordsArray = text.split(" ");
    setWords(words => wordsArray);
  } 

  return (
    <div className="app">
      <CurrentWord wordsToDisplay={words} speed={maxSpeed - speed + minSpeed}/>
      <div className="textBox">
      <p>Time between words in miliseconds: {maxSpeed - speed + minSpeed}</p>
      <p>You are reading {Math.round(60000/(maxSpeed - speed + minSpeed))} words/minute</p>
      <SpeedSlider sliderValue={speed} changeSpeed={changeSpeed}
                  minSpeed={minSpeed} maxSpeed={maxSpeed}/>
      <p>Insert Text:</p>
        <form onSubmit={start}>
          <textarea type="text"
                 value={text}
                 onChange={(e) => setText(e.target.value)} />
          <button>Start</button>
        </form>
      </div>
    </div>
  );
}

export default App;
