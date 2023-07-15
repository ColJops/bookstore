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
            return (
                <Container>
                    <Row>
                        {this.state.users.map(user => (
                            <Col md={4} key={user.id}>
                                <div className="card md-2">
                                    <img
                                        className="card-img-top"
                                        src={user.avatar}
                                        alt="Card image cap"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{user.first_name}</h5>
                                        <p className="card-text">{user.email}</p>
                                    </div>
                                </div>
                            </Col>
                        ))} 
                    </Row>
                </Container>
            );
        }
    }
}
export default Users;