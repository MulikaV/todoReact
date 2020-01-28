import React from "react";
import {Field, reduxForm} from "redux-form";

let Form = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Field
                    component="input"
                    type="text"
                    name="notetitle"
                    placeholder="Введите название задачи"
                    className="form-control"/>
            </div>
        </form>
    )
};

export default Form = reduxForm({form: 'form'})(Form);

