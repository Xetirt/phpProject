import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useContext } from 'react';
import { NoteContext } from '../context/node.context';
import NoteCard from '../components/NoteCard';
import './NotesPage.css';

 function NotesPage() {
    const {notes} = useContext(NoteContext);

    const noteCards = notes.map((note) => {
      return(
        <li key={note.id}>
          <NoteCard note={note}></NoteCard>
        </li>
      )
    })
  return (
    <>
    <HeaderComponent></HeaderComponent>
    <h1>Notes Page</h1>

    <ul className='note-list'>{noteCards}</ul>
    </>
  )
}

export default NotesPage;