import React from "react";
import { Formik, Field, Form } from "formik";

const FormikC = ({ props }) => {
    return (
        <div>
            <h3>(nowa wersja - biblioteka Formik)</h3>
            <h1>Witamy przy kasie!</h1>
            <h2>Podaj dane do wysyłki:</h2>
            <Formik
                initialValues = {{
                    firstname: "",
                    lastname: "",
                    street: ""
                }}
                on submit={values => {
                    console.log(values)
                }}
            >
                <Form>
                    <label htmlFor="firstname">Imię</label>
                    <Field name="firstname" id="firstname" />
                    <label htmlFor="lastname">Nazwisko</label>
                    <Field name="lastname" id="lastname" />
                    <label htmlFor="street">Ulica</label>
                    <Field name="street" id="street" />
                    <button type="submit">Wyślij</button>
                </Form>
            </Formik>
        </div>
    );
};
export default FormikC;