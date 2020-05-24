import React, {useState} from "react";
import {Button, Form, Modal, Table} from "react-bootstrap";
const CompanyAddModal = (props) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }else{
            setValidated(true);
            alert('submiting')

        }

    };

    const form_data = [
        {name:'Business Name',access:'businessName'},
        {name:'Contact Number',access:'contactNumber'},
        {name:'GST-In Number',access:'gstInNumber'},
        {name:'Email',access:'email'},
        {name:'Address',access:'address'},
        {name:'State',access:'state'},
        {name:'Bank Name',access:'bankName'},
        {name:'Account Number',access:'accountNumber'},
        {name:'IFSC Code',access:'ifscCode'}
    ]

    const make_from_data = () => {
        const sub_data = form_data.map(value => {
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
                            //defaultValue={props.company[value["access"]]}
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
    return(
        <Modal show={props.show} onHide={props.closeHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Company Detailed View</Modal.Title>
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
                        Submit
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default CompanyAddModal