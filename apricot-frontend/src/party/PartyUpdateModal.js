import React,{useState} from "react";
import {Button, Form, Modal, Table} from "react-bootstrap";

const PartyUpdateModal = (props) => {
    const [validated, setValidated] = useState(false);
    const [party,setParty] = useState({
        ...props.party
    })

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }else{
            props.updateHandler(party)
        }
        setValidated(true);
    };

    const handleChange = (event,attribute) => {
        let obj = {}
        obj[attribute] = event.target.value;
        setParty((prevState => {
            return {...prevState,...obj}
        }))
    }

    const make_from_data = () => {
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
                            pattern={value["pattern"]}
                            placeholder={'Enter '+value["name"]}
                            defaultValue={props.party[value["access"]]}
                            onChange={event => handleChange(event,value["access"])}
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
    //alert(JSON.stringify(props.category))
    return(

        <Modal show={props.show} onHide={props.closeHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Update Party Details</Modal.Title>
            </Modal.Header>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Modal.Body>
                    <div>
                        <Table>
                            <thead>
                            <tr>
                                <th colSpan="2">Details</th>
                                <th></th>
                            </tr>
                            </thead>
                            {make_from_data()}
                        </Table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeHandler}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default PartyUpdateModal