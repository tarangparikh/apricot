import {Button, Form, Modal, Table} from "react-bootstrap";
import React, {useState} from "react";

const ProductUpdateModal = (props) => {
    const [validated, setValidated] = useState(false);
    const [product,setProduct] = useState({
        ...props.product
    })
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }else{
            alert('submitting')
            //props.updateHandler(category)
        }
        setValidated(true);
    };
    const get_reference = (path) => {
        let ref = product
        for(let i = 0;i<path.length;i++){
            ref = ref[path[i]]
        }
        return ref;
    }
    const make_sub_Table = (name,schema) => {
        const temp_table = schema.map(value => {
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
                            defaultValue={
                                    value['reveal'] === undefined ?
                                    get_reference(value["access"]) :
                                    value['reveal'](get_reference(value["access"]))
                            }
                            //onChange={event => handleChange(event,value["access"])}
                        />
                        <Form.Control.Feedback type="invalid">
                            {'Please enter valid '+value["name"]}
                        </Form.Control.Feedback>
                    </td>
                </tr>
            )
        })
        return(
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th colSpan = "2" >{name}</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {temp_table}
                    </tbody>
                </Table>
            </div>
        )
    }
    const make_Table = () => {
        return Object.keys(props.formData).map(value => {
            return make_sub_Table(value.toUpperCase(),props.formData[value]);
        })
    }
    return(
        <Modal show={props.show} onHide={props.closeHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Product Update</Modal.Title>
            </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Modal.Body>
                <div>
                    {make_Table()}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeHandler}>
                    Close
                </Button>
            </Modal.Footer>
        </Form>
        </Modal>
    )
}
export default ProductUpdateModal;