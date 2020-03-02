import React, { Component } from 'react';
import './App.css';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1> Jotto </h1>
        <Congrats isSuccessful={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
