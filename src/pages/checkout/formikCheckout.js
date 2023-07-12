import React from "react";
import { Formik, Field, Form } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import * as Yup from "yup";
import MySelectF from "../../components/formik/MySelectF";
import MyCheckbox from "../../components/formik/MyCheckBox";
import MyInputF from "../../components/formik/MyInputFormik";
import MyTextAreaF from "../../components/formik/MyTextAreaFormik";

const FormikCheckout = ({ props }) => {
    const paymentOptions = [
    { id: "-", name: "----"},
    { id: "pp", name: "PayPal"},
    { id: "stripe", name: "Stripe"},
    { id: "cc", name: "Karta Kredytowa"}
    ];
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <h3>(nowa wersja - biblioteka Formik)</h3>
                    <h1>Witamy przy kasie!</h1>
                    <h2>Podaj dane do wysyłki:</h2>
                </Col>
            </Row>
            <Formik
                    initialValues = {{
                        firstname: "",
                        lastname: "",
                        street: "",
                        zip: "",
                        city: "",
                        paymentType: "",
                        comment: "",
                        gift: false
                    }}
                    validationSchema={Yup.object({
                        firstname: Yup.string()
                            .min(2, "Imię musi posiadać minimum 2 znaki")
                            .max(15, "Imię musi posiadać maksymalnie 15 znaków")
                            .required("Pole wymagane"),
                        lastname: Yup.string()
                            .min(2, "Nazwisko musi posiadać minimum 2 znaki")
                            .max(15, "Imię musi posiadać maksymalnie 15 znaków")
                            .required("Pole wymagane"),
                        street: Yup.string()
                            .min(2, "Ulica musi posiadać minimum 2 znaki")
                            .max(20, "Ulica musi posiadać maksymalnie 20 znaków")
                            .required("Pole wymagane"),
                        zip: Yup.string()
                            .min(2, "Kod musi posiadać minimum 2 znaki")
                            .max(6, "Kod musi posiadać maksymalnie 6 znaków")
                            .required("Pole wymagane"),
                        city: Yup.string()
                            .min(2, "Miasto musi posiadać minimum 2 znaki")
                            .max(15, "Miasto musi posiadać maksymalnie 15 znaków")
                            .required("Pole wymagane"),
                        gift: Yup.boolean().required("Pole wymagane"),
                        paymentType: Yup.string()
                            .oneOf(
                                ["Stripe", "PayPal", "Karta kredytowa"],
                                "Niepoprawny typ płatności"
                                )
                                .required("Pole wymagane")
                    })}
                    onSubmit={values => {
                        console.log(values)
                    }}
            >
                <Form>
                    <Row>
                        <Col xs={12} md={4}>
                            <MyInputF 
                                label="Imię"
                                name="firstname"
                                type="text"
                                className="form-control"
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <MyInputF 
                                label="Nazwisko"
                                name="lastname"
                                type="text"
                                className="form-control"
                            />                      
                        </Col>
                        <Col xs={12} md={4}>
                            <MyInputF 
                                label="Ulica i nr domu"
                                name="street"
                                type="text"
                                className="form-control"
                            />                       
                        </Col>
                        <Col xs={12} md={4}>
                            <MyInputF 
                                label="Kod pocztowy"
                                name="zip"
                                type="text"
                                className="form-control"
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <MyInputF 
                                label="Miasto"
                                name="city"
                                type="text"
                                className="form-control"
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <MySelectF 
                                label="Rodzaj płatności"
                                name="paymentType"
                                className="form-control"
                                options={paymentOptions}
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <MyTextAreaF 
                                label="Komentarz"
                                name="comment"
                                className="form-control"
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <MyCheckbox 
                                name="gift"
                                className="form-control"
                                label="Zapakować na prezent"
                            />
                        </Col>
                        <Col xs={12} md={4}>
                           <button 
                                type="submit"
                                className="btn btn-primary btn-lg btn-block"
                            >
                                Wyślij</button> 
                        </Col>
                    </Row>     
                </Form>
            </Formik>
        </Container>
    );
};
export default FormikCheckout;