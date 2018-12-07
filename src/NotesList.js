import React from 'react';

const NotesList = (props) => {
    // console.log(props.notes);
    return (
        <ul className="notes-list list-group">
          {
            props.notes.map(note => {
                return (
                    <li className="list-group-item">
                        <a onClick={() => {
                            console.log(note.id);
                            props.handleClick(note.id);
                        }}>
                            {note.title}
                        </a>
                    </li>)
            })
          }          
        </ul>
      
    );
};

export default NotesList;