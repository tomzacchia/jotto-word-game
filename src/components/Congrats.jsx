import React from 'react';

// receive success value -> show congrats if true
function Congrats({ isSuccessful }) {
  let successMessageMarkup = null;

  if (isSuccessful) {
    successMessageMarkup = (
      <span data-test="congrats-message">
        Congratulations! You guessed the word
      </span>
    );
  }

  return <div data-test="component-congrats">{successMessageMarkup}</div>;
}

export default Congrats;
