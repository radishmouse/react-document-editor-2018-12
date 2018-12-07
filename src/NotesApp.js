import React, {Component} from 'react';

import SearchBar from './SearchBar';
import NotesList from './NotesList';
import EditorWindow from './EditorWindow';

class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNoteIndex: 2,
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
                content={this.state.notes[this.state.currentNoteIndex].content}
            />
          </div>

        );
    }
}

export default NotesApp;