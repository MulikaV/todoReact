import React from "react";
import Notes from "../components/Notes";
import Form from "../components/Form";
import {connect} from "react-redux";
import {addNewNote, deleteNoteElement} from "../redux/notes-reducer";

const Home = ({addNewNote,notes,deleteNoteElement}) => {

    const addNote = (value) => {
            addNewNote(value.notetitle);
    };

    const deleteNote = (e) => {
        deleteNoteElement(e.target.id);
    };

    return (
        <div>
            <Form onSubmit={addNote}/>
            <Notes notes={notes} deleteNote={deleteNote}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    notes: state.notesList.notes
});


export default connect(mapStateToProps,{addNewNote,deleteNoteElement})(Home);