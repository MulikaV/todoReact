import {combineReducers, createStore} from 'redux';
import { reducer as formReducer } from 'redux-form'

const ADD_NEW_NOTE = "ADD_NEW_NOTE";

const initialState = {
    notes: [
        {id: 1, title: "Сделать todo list"},
        {id: 2, title: "Отправить резюме"},
        {id: 3, title: "Пройти собеседование"}
    ]
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_NOTE:
            return {
                ...state,
                notes: [...state.notes, {id: 5, title: action.noteText}]
            };
        default:
            return state;
    }

};

export const addNewNote = (noteText) => ({type: ADD_NEW_NOTE, noteText});
export const deleteNote = (noteText) => ({type: ADD_NEW_NOTE, noteText});

const reducers = combineReducers({
    notesList: notesReducer,
    form: formReducer
});

const store = createStore(reducers);
export default store;
