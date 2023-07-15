import React, { Component} from "react";
import { Row, Col, Container } from "react-bootstrap";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          users: []  
        };
    }

    componentDidMount() {
        fetch("http://reqres.in/api/users/")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        users: result.data
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    }); 
                }
            );
        }
    render() {
        if (this.state.error) {
            return <div>Błąd {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Ładowanie...</div>;
        } else {
            return this.state.users.map(user => (
                <div key={user.id}>
                    <p>
                        <strong>{user.first_name}</strong> {user.last_name}
                    </p>
                    <p>{user.email}</p>
                    <img key={user.avatar} scr={user.avatar} />
                </div>
            ));
        }
    }
}
export default Users;