import { useState } from "react";
import { createContext } from "react";

const NoteContext = createContext();

function NoteProviderWrapper(props){

    const noteList = [
        {
            id: 1,
            title: "Ir a casa del Niño toppless",
            marked: false
        },
        {
            id: 2,
            title: "Ir a casa del Telaviv",
            marked: false
        },
        {
            id: 3,
            title: "Ir a casa del Netanyahu",
            marked: false
        },
        {
            id: 4,
            title: "Ir a casa del Niño Hombre",
            marked: false
        }
    ]

    const [notes, setNotes] = useState(noteList);

    const updateNote = (updateNote) => {
        const updatedNotes = notes.map((note) =>{
            if(note.id !== updateNote) return note
            return updateNote
        });

        setNotes(updatedNotes);
    };

    return(
        <NoteContext value={{notes, setNotes, updateNote}}>
            {props.children}
        </NoteContext>
    )
}

export {NoteContext, NoteProviderWrapper}