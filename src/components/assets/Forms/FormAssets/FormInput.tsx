import React from 'react';
import s from './FormInput.module.css'
import {ErrorMessage, Field} from "formik";

type PrivateProps = {
    inputName: string,
    placeHolder: string,
    type: string,
    name: string
}


const FormInput = ({inputName, placeHolder, type, name}:PrivateProps) => {
    return (
        <div className={s.input}>
            <label className={s.title} htmlFor={inputName}>{inputName}</label>
            <Field name={name} type={type} placeholder={placeHolder}/>
            <div>
                <ErrorMessage name={inputName}/>
            </div>
        </div>
    );
};

export default FormInput;