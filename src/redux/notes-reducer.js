import {combineReducers, createStore} from 'redux';
import { reducer as formReducer } from 'redux-form'
import uuid from 'react-uuid'

const ADD_NEW_NOTE = "ADD_NEW_NOTE";
const DELETE_NOTE = "DELETE_NOTE";

const initialState = {
    notes: [
        {id: uuid(), title: "Сделать todo list"},
        {id: uuid(), title: "Отправить резюме"},
        {id: uuid(), title: "Пройти собеседование"}
    ]
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_NOTE:
            return {
                ...state,
                notes: [...state.notes, {id: uuid(), title: action.noteText}]
            };
            case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter( el => el.id != action.id)
            };
        default:
            return state;
    }

};

export const addNewNote = (noteText) => ({type: ADD_NEW_NOTE, noteText});
export const deleteNoteElement = (id) => ({type: DELETE_NOTE, id});

const reducers = combineReducers({
    notesList: notesReducer,
    form: formReducer
});

const store = createStore(reducers);
export default store;
