import React, { Component } from 'react';
import {Form, Button, Card} from 'react-bootstrap';
class Login extends Component {
    render() {
        let center_align = {
                margin: 0,
                position: "absolute",
                top: "50%",
                left: "50%",
                msTransform: "translate(-50%, -50%)",
                transform: "translate(-50%, -50%)"
        }
        return (
            <div style={{
                textAlign: "center",
            }}>
                <Card
                    style = {center_align}
                >
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
                        <Form onSubmit={() => {
                            alert('i')
                        }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Login;
