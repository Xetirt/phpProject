import React from 'react'
import './NoteCard.css' //
import { NoteContext } from '../context/node.context'
import { useContext } from 'react';

function NoteCard({note}) {
  const {updateNote} = useContext(NoteContext);

  const handleInput = (e) =>{
    const updatedNote = {...note, title: e.target.value}

    updateNote(updateNote);

  }

  const handleCheck = (e) =>{
    const updatedNote = {...note, marked: !note.marked}

    updateNote(updateNote);

    const { updateNote } = useContext(NoteContext);

    
  }

  return (
    <article className='note-card'>
      <input type="text" className='card-title' defaultValue={note.title} onChange={handleInput}/>
      <input type="checkbox" checked={note.marked} onChange={() => updateNote(note.id)}/>
    </article>
  )
}

export default NoteCard