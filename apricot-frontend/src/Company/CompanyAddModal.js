import React, {useState} from "react";
import {Button, Form, Modal, Table} from "react-bootstrap";
const CompanyAddModal = (props) => {
    const [validated, setValidated] = useState(false);
    const [company,setCompany] = useState({
        user: props.user,
        isSelected: 0
    });
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }else{
            //alert('submiting')
            props.addHandler(company)
        }
        setValidated(true)

    };
    const handleChange = (event,attribute) => {
        let obj = {}
        obj[attribute] = event.target.value;
        setCompany((prevState => {
            return {...prevState,...obj}
        }))
    }
    const form_data = [
        {name:'Business Name',access:'businessName',pattern:'(.)*'},
        {name:'Contact Number',access:'contactNumber',pattern:'^((\\+){0,1}91(\\s){0,1}(\\-){0,1}(\\s){0,1}){0,1}98(\\s){0,1}(\\-){0,1}(\\s){0,1}[1-9]{1}[0-9]{7}$'},
        {name:'GST-In Number',access:'gstInNumber',pattern:'(.)*'},
        {name:'Email',access:'email',pattern:'^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$'},
        {name:'Address',access:'address',pattern:'(.)*'},
        {name:'State',access:'state',pattern:'(.)*'},
        {name:'Bank Name',access:'bankName',pattern:'(.)*'},
        {name:'Account Number',access:'accountNumber',pattern:'(.)*'},
        {name:'IFSC Code',access:'ifscCode',pattern:'(.)*'}
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
                            pattern={value["pattern"]}
                            //defaultValue={props.company[value["access"]]}
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