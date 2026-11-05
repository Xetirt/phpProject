import { useState } from "react";
import { createContext } from "react";

const NoteContext = createContext();

//const API_URL = "https://ca599dc98e75c8ba71bc.free.beeceptor.com/api/notes";

function NoteProviderWrapper(props){

     const [notes, setNotes] = useState([]);
     const [hasError, setError] = useState(false);
     const [hasLoaded, setLoaded] = useState(false);

    const getNotes = async () =>{
        try {
            const respose = await fetch(API_URL);
            const data = await respose.json();
            setNotes(data.reverse());
            setError(false);
            setLoaded(true);
        } catch (e) {
            console.log(e);
            setError(true);
        }
    }

    const addNote = async (newNote) =>{
        try {
            await fetch(API_URL, {
                method:"POST",
                body:JSON.stringify(newNote)
            })
            setNotes([newNote,...notes])
        } catch (e) {
            console.log(e)
        }
        
    };

    const updateNote = (id) => {
    const updatedNotes = notes.map((note) => {
        if (note.id === id) {
            return { ...note, marked: !note.marked }
        }
        return note;
    });

    setNotes(updatedNotes);
};

    return(
        <NoteContext.Provider value={{notes, hasError, hasLoaded, getNotes, setNotes, addNote, updateNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export {NoteContext, NoteProviderWrapper}