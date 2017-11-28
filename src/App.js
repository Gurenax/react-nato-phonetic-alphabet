import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea'
import Label from './components/Label'

import ConvertToNato from './lib/nato'

class App extends Component {
  state = {
    message: ''
  }

  onMessageChange = (message) => {
    this.setState( (prevState) => {
      const beforeItems = prevState.message
      // const afterItems = message
      return {
        message: message
      }
    })
  }

  render() {
    const phonetic = ConvertToNato(this.state.message);

    return (
      <div className="App">
        <div className="container">
          <strong><Label htmlFor='message' title='Your Secret Message' /></strong>
          <TextArea id='message' rows='5' placeholder='Enter your message'
            onTextChange={ (message) => {
              this.onMessageChange(message)
            }} />
          <br/>
          <strong><Label htmlFor='nato' title='NATO Phonetic' /></strong>
          <TextArea id='nato' rows='5' placeholder='' value={phonetic} readOnly />
        </div>
      </div>
    );
  }
}

export default App;
