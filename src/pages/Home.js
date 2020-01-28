import React from "react";
import Notes from "../components/Notes";
import Form from "../components/Form";
import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";
import {connect} from "react-redux";
import {addNewNote} from "../redux/notes-reducer";

const Home = ({addNewNote,notes}) => {
    const addNote = (value) => {
        addNewNote(value.notetitle);
    };

    return (
        <div>
            <Form onSubmit={addNote}/>
            <Notes notes={notes}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    notes: state.notesList.notes
});


export default connect(mapStateToProps,{addNewNote})(Home);