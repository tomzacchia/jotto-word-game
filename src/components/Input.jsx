import React from 'react';
import { connect } from 'react-redux';

const Input = ({ success }) => {
  let contents;

  if (success) {
    contents = null;
  } else {
    contents = (
      <form className="form-inline">
        <input
          className="mb-2 ms-sm-3"
          type="text"
          placeholder="enter guess"
          data-test="input-box"
        />
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    );
  }
  return <div data-test="component-input"> {contents} </div>;
};

const mapState = ({ success }) => {
  return { success };
};

export default connect(mapState)(Input);
