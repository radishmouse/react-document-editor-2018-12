import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import EditorWindow from './EditorWindow';

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
          <EditorWindow />
        </div>
      </div>
    );
  }
}

export default App;
