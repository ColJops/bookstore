import React, {Component} from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyInput from "../../components/forms/MyInput";
import MySelect from "../../components/forms/MySelect";
import MyTextArea from "../../components/forms/MyTextArea";
class Checkout extends Component {
    paymentOptions = [
        { id: "-", name: "----" },
        { id: "pp", name: "PayPal" },
        { id: "stripe", name: "Stripe"},
        { id: "cc", name: "Karta kredytowa"}
    ];
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            street: "",
            zip: "",
            city: "",
            paymentType: "",
            comment: ""
        };
    }
    changeHandler = event => {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        this.setState({ [inputName]: inputValue});
    };

    render() {
        return (
            <Container>
                <form>
                    <div className="form-group">
                        <Row>
                            <Col xs={12}>
                                <h1>Witamy przy kasie!</h1>
                                <h2>Podaj dane do wysyłki:</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={4}>
                                <MyInput
                                    type="text"
                                    name="firstname"
                                    label="Imię"
                                    className="form-control"
                                    value={this.state.firstname}
                                    onChange={this.changeHandler}
                                /> 
                            </Col>
                            <Col xs={12} md={4}>
                                <MyInput 
                                    type="text"
                                    name="lastname"
                                    label="Nazwisko"
                                    className="form-control"
                                    value={this.state.lastname}
                                    onChange={this.changeHandler}
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <MyInput 
                                    type="text"
                                    name="street"
                                    label="Ulica i nr domu"
                                    className="form-control"
                                    value={this.state.street}
                                    onChange={this.changeHandler}
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <MyInput 
                                    type="text"
                                    name="zip"
                                    label="Kod pocztowy"
                                    className="form-control"
                                    value={this.state.zip}
                                    onChange={this.changeHandler}
                                />
                            </Col>
                            <Col>
                                <MyInput 
                                    type="text"
                                    name="city"
                                    label="Miasto"
                                    className="form-control"
                                    value={this.state.city}
                                    onChange={this.changeHandler}
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <MySelect
                                    name="paymentType"
                                    label="Rodzaj płatności"
                                    className="form-control"
                                    value={this.state.paymentType}
                                    onChange={this.changeHandler}
                                    options={this.paymentOptions}
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <MyTextArea 
                                    type="text"
                                    name="comment"
                                    label="Komentarz"
                                    className="form-control"
                                    value={this.state.comment}
                                    onChange={this.changeHandler}
                                />
                            </Col>
                        </Row>
                    </div>
                </form>
                <Row>
                    <Col>
                        <h2>Podane dane:</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                Imię:&nbsp;
                                {this.state.firstname === "" ? "N/A" : this.state.firstname}
                            </li>
                            <li className="list-group-item">
                                Nazwisko:&nbsp;
                                {this.state.lastname === "" ? "N/A" : this.state.lastname}
                            </li>
                            <li className="list-group-item">
                                Ulica i nr domu:&nbsp;
                                {this.state.street === "" ? "N/A" : this.state.street}
                            </li>
                            <li className="list-group-item">
                                Kod pocztowy:&nbsp;
                                {this.state.zip === "" ? "N/A" : this.state.zip}
                            </li>
                            <li className="list-group-item">
                                Miasto:&nbsp;
                                {this.state.city === "" ? "N/A" : this.state.city}
                            </li>
                            <li className="list-group-item">
                                Rodzaj płatności:&nbsp;
                                {this.state.paymentType === "" ? "N/A" : this.state.paymentType}
                            </li>
                            <li className="list-group-item">
                                Dodatkowy komenterz:&nbsp;
                                {this.state.comment === "" ? "N/A" : this.state.comment}
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Checkout;