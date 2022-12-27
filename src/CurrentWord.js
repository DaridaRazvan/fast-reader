import { useState, useEffect } from 'react';

const CurrentWord = (props) => {
    const [currentWord, setCurrentWord] = useState('');

    useEffect(() => {
        if(props.wordsToDisplay.length === 0)
            return;

        let currentPosition = 0;
        const interval = setInterval(() => {
          setCurrentWord(props.wordsToDisplay[currentPosition]);
          if(currentPosition < props.wordsToDisplay.length)
            currentPosition++;
        }, props.speed);

        return () => clearInterval(interval);
      }, [props.wordsToDisplay, props.speed]);

    return(
        <div className="wordBox">
            <p>{currentWord}</p>
        </div>
    )
}

export default CurrentWord;