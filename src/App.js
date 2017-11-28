import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea'
import Label from './components/Label'

import { toNato, toMessage } from './lib/nato'

class App extends Component {
  state = {
    message: '',
    source: ''
  }

  onMessageChange = (message) => {
    this.setState( () => {
      return {
        message: message,
        source: 'message'
      }
    })
  }

  onPhoneticChange = (phonetic) => {
    const message = toMessage(phonetic)
    this.setState( () => {
      return {
        message: message,
        source: 'phonetic'
      }
    })
  }

  render() {
    const message = this.state.message
    // If message was entered in message text field, convert to Nato. Otherwise, use props value
    const phonetic = this.state.source==='message' ? toNato(this.state.message) : this.props.value

    return (
      <div className="App">
        <div className="container">
          <strong><Label htmlFor='message' title='Your Secret Message' /></strong>
          <TextArea id='message' rows='5' placeholder='Enter your message' value={ message }
            onTextChange={ (message) => {
              this.onMessageChange(message)
            }} />
          <br/>
          <strong><Label htmlFor='nato' title='NATO Phonetic' /></strong>
          <TextArea id='nato' rows='5' placeholder='Enter your phonetics' value={ phonetic }
            onTextChange={ (phonetic) => {
              this.onPhoneticChange(phonetic)
            }} />
        </div>
      </div>
    );
  }
}

export default App;
