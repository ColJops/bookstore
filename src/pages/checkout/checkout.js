import React, {Component} from "react";
class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <h1>Witamy przy kasie!</h1>
                <h2>Podaj dane do wysyłki:</h2>
                <p>Imię:</p>
                <input type="text" name="firstname" />
                <p>Nazwisko:</p>
                <input type="text" name="lastname" />
            </form>
        );
    }
}

export default Checkout;