import React from 'react';
import PropTypes from 'prop-types';

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

  return (
    <div className="alert alert-success" data-test="component-congrats">
      {successMessageMarkup}
    </div>
  );
}

Congrats.propTypes = {
  isSuccessful: PropTypes.bool.isRequired
};

export default Congrats;
