import React from "react";

const Notes = ({notes,deleteNote}) => {
    return (
        <ul className="list-group">
            {notes.map(el => (
                    <li key={el.id} className="list-group-item notes ">
                        {el.title}
                        <button type="button" id={el.id} className="btn btn-danger btn-sm" onClick={deleteNote}>&times;</button>
                    </li>
                )
            )
            }
        </ul>
    )
};



export default Notes;