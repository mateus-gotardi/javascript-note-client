import React, { useState, useEffect } from "react";
import { push as Menu } from 'react-burger-menu'
import ListNotes from "./list";
import NotesService from "../../services/notes";
import Editor from "./editor";
import Search from "./search";

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

    const updateNote=async(oldNote, params)=>{
        const updatedNote = await NotesService.update(oldNote._id, params)
        const index = notes.indexOf(oldNote)
        const newNotes = notes
        newNotes[index]=updatedNote.data
        setNotes(newNotes)
        setCurrentNote(updatedNote.data)
    }

    const searchNote = async(query)=>{
        const response = await NotesService.search(query)
        setNotes(response.data)
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
                <div className="search">
                    <Search searchNote={searchNote} fetchNotes={fetchNotes}/>
                </div>
                
                <ListNotes notes={notes}
                selectNote={selectNote}
                current_note = {currentNote}
                createNote={createNote}
                deleteNote={deleteNote}
                />
            </Menu>
            <div id="notes-editor" className="notes-editor">
                <Editor note={currentNote} updateNote={updateNote}/>
            </div>
        </div>
    )
}

export default Notes