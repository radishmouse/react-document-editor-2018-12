import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NotesList from './NotesList';
import EditorWindow from './EditorWindow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="notes-app">
          <div className="search-bar">
            <input value="it" />
          </div>

          <NotesList />
          <EditorWindow />
        </div>
      </div>
    );
  }
}

export default App;
