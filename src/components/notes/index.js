import React, { useState, useEffect } from "react";
import { push as Menu } from 'react-burger-menu'
import ListNotes from "./list";
import NotesService from "../../services/notes";

const Notes = (props) => {
    const [notes, setNotes] = useState([])
    const [currentNote, setCurrentNote] = useState({title: '', body: '', id: ''})

    useEffect(()=>{
        fetchNotes()
    }, [])

    async function fetchNotes(){
        const response = await NotesService.index()
        if (response.data.length >= 1){
            setNotes (response.data.reverse())
            setCurrentNote (response.data[0])
        }else{
            setNotes ([])
        }
    }
    const selectNote = (id)=>{
        const note = notes.find((note)=>{
            return note._id===id
        })
        setCurrentNote(note);
    }

    const createNote = async()=>{
        await NotesService.create()
        fetchNotes()
    }

    const deleteNote = async(id)=>{
        await NotesService.delete(id)
        fetchNotes()
    }

    return (
        <div id="notes">
            <Menu
                pageWrapId={"notes-editor"}
                isOpen={props.isOpen}
                onStateChange={(state) => props.setOpen(state.isOpen)}
                disableAutoFocus
                outerContainerId={"notes"}
                customBurgerIcon={false}
                customCrossIcon={false}
            >
                <ListNotes notes={notes}
                selectNote={selectNote}
                current_note= {currentNote}
                createNote={createNote}
                deleteNote={deleteNote}
                />
            </Menu>
            <div id="notes-editor">
                Editor...
            </div>
        </div>
    )
}

export default Notes