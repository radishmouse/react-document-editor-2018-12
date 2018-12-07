import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="notes-app">
          <div className="search-bar">
            <input value="it" />
          </div>
          <div className="notes-list">
            <ul>
              <li><a>note #1</a></li>
              <li><a>note #2</a></li>
              <li><a>note #3</a></li>
            </ul>
          </div>
          <div className="editor-window">
            it was the best of times, it was the pretty okish of times.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
