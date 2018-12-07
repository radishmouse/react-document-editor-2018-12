import React, {Component} from 'react';

import SearchBar from './SearchBar';
import NotesList from './NotesList';
import EditorWindow from './EditorWindow';

class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNoteId: 1001,
            notes: [
                {
                    id: 1001,
                    title: 'the la la note',
                    content: 'la la la'
                },
                {
                    id: 1002,
                    title: 'the wa wa note',
                    content: 'wa wa wa'
                },
                {
                    id: 1004,
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
                content={this._getById(this.state.currentNoteId).content}
            />
          </div>

        );
    }

    _getById = (idToFind) => {
        // find the object in this.state.notes where id === idToFind
        const theOne = this.state.notes.find(note => {
            return note.id === idToFind
        });
        return theOne;
    }
}

export default NotesApp;