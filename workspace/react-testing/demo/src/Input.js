import React, { Component } from 'react'
import { connect } from 'react-redux';

import { guessWord } from './actions'

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGuess: null,
    }

    this.submitGuessWord = this.submitGuessWord.bind(this);
  }

  submitGuessWord(evt) {
    evt.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: ''});
    }
  }

  render() {
    const contents = this.props.success
      ? null
      : (
          <form className='form-input'>
          <input
            data-test= 'input-box'
            className='mb-2 mx-sm-3'
            type='text'
            value={this.state.currentGuess}
            onChange={(evt) => this.setState({ currentGuess: evt.target.value })}
            placeholder='enter guess' />
          <button
            data-test="submit-button"
            onClick={(evt) => this.submitGuessWord(evt)}
            type='submit'
            className='bnt- btn-primary mb-2'>
              Submit
          </button>
        </form>
      )
    return (
      <div data-test='component-input'>
        { contents }
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);