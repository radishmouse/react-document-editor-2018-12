import React, {Component} from 'react';

import SearchBar from './SearchBar';
import NotesList from './NotesList';
import EditorWindow from './EditorWindow';

class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    title: 'the la la note',
                    content: 'la la la'
                },
                {
                    title: 'the wa wa note',
                    content: 'wa wa wa'
                },
                {
                    title: 'lady',
                    content: 'ga ga'
                },
            ]
        }
    }
    render() {
        return (
          <div className="notes-app">
            <SearchBar />
            <NotesList 
                notes={this.state.notes.map(note => note.title)}
            />
            <EditorWindow 
                content={
                    'aw yiss. it was the best of times, it was the pretty ok-ish of times.'
                }
            />
          </div>

        );
    }
}

export default NotesApp;