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
  const [currentWord, setCurrentWord] = useState("react");

  const [guessedLetters, setGuessedLetters] = useState([]);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function addGuessedLetter(letter) {
    setGuessedLetters(
      prevLetters => prevLetters.includes(letter) ? prevLetters :
        [...prevLetters, letter]);
  }

  console.log(guessedLetters);

  const languageElements = languages.map(lang => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    };
    return (
      <span
        className="chip"
        style={styles}
        key={lang.name}
      >
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWord.split("").map((letter, index) => (
    <span key={index}>{letter.toUpperCase()}</span>
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

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the
          programming world safe from Assembly!</p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
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
      <button className="new-game">New Game</button>
    </main>
  );
}

