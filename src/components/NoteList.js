import React from 'react';
import Note from './Note';
import AddNote from './AddNote';
function NoteList({notes, handleAddNote, handleDeleteNote}) {
  return (
    <div className="notes-list">
    {notes.map((note) =>{
      return(
        <Note 
          note={note.text}
          date={note.date}
          id={note.id}
          handleDeleteNote={handleDeleteNote}
        />
      );
    })
    }
    <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NoteList;
