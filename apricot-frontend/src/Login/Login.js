import React, { Component } from 'react';
import {Form, Button, Card, NavLink} from 'react-bootstrap';
import axios from 'axios'
import Cookies from 'js-cookie'
import Constants from "../Constant/Constants";
import Redirect from "react-router-dom/es/Redirect";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{

            },
            redirect: false

        }
    }
    onChangeHandler(event,attribute){
        let user_clone = {...this.state.user}
        user_clone[attribute] = event.target.value
        this.setState({
            user:user_clone
        })
    }

    componentDidMount() {
        if(Cookies.get('apricot_user') !== undefined){
            this.setState({
                redirect: true
            })
        }
    }

    render() {
        let center_align = {
                margin: 0,
                position: "absolute",
                top: "50%",
                left: "50%",
                msTransform: "translate(-50%, -50%)",
                transform: "translate(-50%, -50%)"
        }

        if(this.state.redirect){
            return <Redirect to="/"/>
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
                        <Form onSubmit={(event) => {
                            const form = event.currentTarget;
                            event.preventDefault();
                            axios.post(Constants().user.authentication,this.state.user)
                                .then(value => {
                                    if(value.data['key']){
                                        let user_clone = {...this.state.user}
                                        user_clone['id'] = value.data['value'];
                                        this.setState({
                                            user: user_clone
                                        })

                                        Cookies.set('apricot_user',JSON.stringify(this.state.user));

                                        this.setState({
                                            redirect: true
                                        })
                                    }else{
                                        alert('Invalid Login');
                                    }
                                }).catch(reason => {
                                    alert(JSON.stringify(reason))
                                })
                        }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required type="email" placeholder="Enter email" onChange={(event) => this.onChangeHandler(event,'email')}/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" onChange={(event) => this.onChangeHandler(event,'passWord')} />
                            </Form.Group>
                            <NavLink href="/signUp">Sign Up</NavLink>
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
