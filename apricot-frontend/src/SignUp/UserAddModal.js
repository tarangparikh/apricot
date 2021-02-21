import React,{useState} from "react";
import {Button, Form, Card, NavLink, Table, Modal} from "react-bootstrap";

const UserAddModal = (props) => {
    const[user,setUser] = useState({ })

const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
        event.stopPropagation();
    }else{
        props.addHandler(user)
    }
};

const handleChange = (event,attribute) => {
    let obj = {}
    obj[attribute] = event.target.value;
    setUser((prevState => {
        return {...prevState,...obj}
    }))
}

const make_form_data = () => {
    const sub_data = props.form_data.map(value => {
        return(
            <tr>
                <td>
                    {value["name"]}
                </td>
                <td>
                    <Form.Control
                        required
                        type="text"
                        placeholder={'Enter '+value["name"]}
                        pattern={value["pattern"]}
                        onChange={(event) => handleChange(event,value["access"])}
                    />
                    <Form.Control.Feedback type="invalid">
                        {'Please enter valid '+value["name"]}
                    </Form.Control.Feedback>
                </td>
            </tr>
        )
    })
    return(
        <tbody>
        {sub_data}
        </tbody>
    )
}

    const center_align = {
        margin: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        msTransform: "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)"
    }

return(
    <Card style = {center_align} >
        <Card.Header closeButton>
            <Card.Title>Sign Up</Card.Title>
        </Card.Header>
        <Form  onSubmit={handleSubmit} >
            <Card.Body>
                <div>
                    <Table>
                        <thead>
                        <tr>
                            <th colSpan="2">Details</th>
                            <th></th>
                        </tr>
                        </thead>
                        {make_form_data()}
                    </Table>
                </div>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Already Registered? <NavLink href="/login">Sign In</NavLink> </p>
            </Card.Footer>
        </Form>
    </Card>
    )
}

export default UserAddModal;