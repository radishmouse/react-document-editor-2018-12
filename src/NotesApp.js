import React, {Component} from 'react';

import SearchBar from './SearchBar';
import NotesList from './NotesList';
import EditorWindow from './EditorWindow';

class NotesApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div className="notes-app">
            <SearchBar />
            <NotesList 
                notes={[
                    'note #1',
                    'note #2',
                    'note #3',
                    'note #4',
                    'note #5',
                ]}
            />
            <EditorWindow />
          </div>

        );
    }
}

export default NotesApp;