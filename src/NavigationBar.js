import React, { useState, useEffect } from 'react';
import "./App.css";
import Sidebar from './Sidebar';
import uuid from "react-uuid";
import Main from "./Main";
export default function NavigationBar() {

    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    );
    const [activeNote, setActiveNote] = useState(false);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const onAddNote = () => {
        const newNote = {
            id: uuid(),
            title: "Untitled Note",
            body: "",
            lastModified: Date.now(),
        };

        setNotes([newNote, ...notes]);
        setActiveNote(newNote.id);
    };
    



    const onDeleteNote = (noteId) => {
        const answer = window.confirm("Are you sure?");
        if (answer) {
            setNotes(notes.filter(({ id }) => id !== noteId));   
        }
    };

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArr = notes.map((note) => {
            if (note.id === updatedNote.id) {
                return updatedNote;
            }

            return note;
        });

        setNotes(updatedNotesArr);
    };

    const getActiveNote = () => {
        return notes.find(({ id }) => id === activeNote);
    };


    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

   
    return (
        <>
            <div className="navigation-bar">
                <div>
                    <button onClick={toggleSidebar} className="button">
                        <div class="menu-icon">
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </div>
                    </button>

                </div>
                <h1 className="title">
                    <p id='upper'>Lotion</p>
                    <p id='des'>Like Notion, But Worse</p>
                </h1>
                <div className="spacer"></div>
            </div>
            <div className='App'>
                {showSidebar && <Sidebar notes={notes}
                    onAddNote={onAddNote}
                    onDeleteNote={onDeleteNote}
                    activeNote={activeNote}
                    setActiveNote={setActiveNote} />}
                <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
            </div>
        </>
    )
}