import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea'
import Label from './components/Label'

import ConvertToNato from './lib/nato'

class App extends Component {
  state = {
    phonetic: 'Hello'
  }
  render() {
    const phonetic = ConvertToNato(this.state.phonetic);

    return (
      <div className="App">
        <div className="container">
          <Label htmlFor='message' title='Your Message' />
          <TextArea id='message' rows='5' placeholder='Enter your message' />
          <Label htmlFor='nato' title='NATO Phonetic' />
          <TextArea id='nato' rows='5' placeholder='Enter your message' value={phonetic}/>
        </div>
      </div>
    );
  }
}

export default App;
