import React from "react";
import Header from "../Components/Header/Header";

/**
 * Project planning:
 * 
 * Questions to ask yourself before writing any code:
 * 
 * - What are the main containers of elements I need
 *   in this app?
 *   Header: game title, game description
 *   Status banner (info, success, error, warning)
 *   Tech chips row
 *   Game board
 *   Keyboard
 *   Footer (new game)
 * 
 * - What data will I need to store in state?
 *   solution, guesses, wrongCount, phase(idle, playing, won, lost), maxAttempts
 *    
 * 
 * - What values will need to be saved in state vs.
 *   what values can be derived from the state?
 *   lettersRevealed, wrongGuesses, attemptsLeft, gameWon, gameLost, keyStatus
 * 
 * 
 * - How will the user interact with the app? What
 *   events do I need to handle?
 *   keydown, click on keyboard. New Game,
 * 
 * 
 */

export default function AssemblyEndgame() {
  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the
          programming world safe from Assembly!</p>
      </header>
    </main>
  );
}