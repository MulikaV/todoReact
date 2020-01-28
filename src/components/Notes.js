import React from "react";
import {connect} from "react-redux";

const Notes = ({notes}) => {
    return (
        <ul className="list-group">
            {notes.map(el => (
                    <li key={el.id} className="list-group-item notes ">
                        {el.title}
                        <button type="button" className="btn btn-danger btn-sm">&times;</button>
                    </li>
                )
            )
            }
        </ul>
    )
};



export default Notes;