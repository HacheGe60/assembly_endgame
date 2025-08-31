import { useState } from "react";
import { languages } from "./languages";
import clsx from "clsx";

/**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: TBA
 * 
 * Think: what would be the best way to store the user's
 * guessed letters? 
 */

export default function AssemblyEndgame() {
  // State values
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Derived values
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length;


  // Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function addGuessedLetter(letter) {
    setGuessedLetters(
      prevLetters => prevLetters.includes(letter) ? prevLetters :
        [...prevLetters, letter]);
  }

  const languageElements = languages.map((lang, index) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    };

    const n = Math.min(wrongGuessCount, languages.length);

    const isLost = index < n;

    const className = clsx("chip", isLost && "lost");

    return (
      <span
        key={lang.name}
        style={styles}
        className={className}
      >
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWord.split("").map((letter, index) => (
    <span key={index}>
      {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  ));

  const keyboardElements = alphabet.split("").map(letter => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !isCorrect;
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong
    });

    return (
      <button
        key={letter}
        onClick={() => addGuessedLetter(letter)}
        disabled={isGuessed}
        className={className}
      >{letter.toUpperCase()}</button>
    );
  });

  const newGameElement = (
    (wrongGuessCount >= languages.length - 1 || currentWord.split('').every(letter => guessedLetters.includes(letter))) &&
    <button className="new-game">New Game</button>
  );

  const statusElement = (
    wrongGuessCount >= languages.length - 1 ? <span className='lost'><h2>Game Over</h2><p>You lose! Better start learning Assembly 😭</p></span> : currentWord.split('').every(letter => guessedLetters.includes(letter)) ? <span className='won'><h2>You win!</h2><p>Well done! 🎉</p></span> : <span className='attempts'><h2>Attempts {wrongGuessCount} / {languages.length - 1}</h2></span>

  );

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the
          programming world safe from Assembly!</p>
      </header>
      <section className="game-status">
        {statusElement}
      </section>
      <section className="language-chips">
        {languageElements}
      </section>
      <section className="word">
        {letterElements}
      </section>
      <section className="keyboard">
        {keyboardElements}
      </section>
      {newGameElement}
    </main>
  );
}

