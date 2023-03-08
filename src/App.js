import React,{useState,useEffect} from 'react';
import {nanoid} from 'nanoid';
import NoteList from "./components/NoteList";
import Search from './components/Search';
import Header from './components/Header';
function App() {
  const [notes, setNotes]=useState([
    {
      id:nanoid(),
      text:"this is my first note",
      date:"10/20/30"
    },
    {
      id:nanoid(),
      text:"this is my second note",
      date:"20/30/40"
    },
    {
      id:nanoid(),
      text:"this is my Third note",
      date:"30/40/50"
    },
    {
      id:nanoid(),
      text:"this is my fourth note",
      date:"40/50/60"
    },
    {
      id:nanoid(),
      text:"this is my fifth note",
      date:"50/60/70"
    },
  ]);
  const [darker, setDarker]=useState(false);
  const [searchText, setSearchText]=useState("");
  useEffect(()=>{
    const savedNotes =JSON.parse( localStorage.getItem('react-note-app-data'));
    if(savedNotes){
     setNotes(savedNotes);
    }
   },[]);

  useEffect(()=>{
    localStorage.setItem('react-note-app-data',JSON.stringify(notes));
  },[notes]);

  const addNote=(text)=>{
    const date=new Date();
    const newNote={
      id : nanoid(),
      text:text,
      date : date.toLocaleDateString()
    }
    const newNotes=[...notes, newNote];
    setNotes(newNotes);
  }
  const deleteNote =(id)=>{
    const newNotes = notes.filter((note) => note.id !== id );
    setNotes(newNotes);
  }

return (
  <div className={darker ? "dark-mode" : null}>
    <div className="container">
    <Header handleToggleDarkMode={setDarker}/>
    <Search  handleSearchNote={setSearchText}/>
    <NoteList 
    notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))}
     handleAddNote={addNote} 
     handleDeleteNote={deleteNote}

     />
   </div>
</div>
  );
}

export default App;
