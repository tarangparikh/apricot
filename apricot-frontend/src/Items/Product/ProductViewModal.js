import {Button, Form, Modal, Table} from "react-bootstrap";
import React, {useState} from "react";
import printValue from "yup/lib/util/printValue";

const ProductViewModal = (props) => {
    const [product,setProduct] = useState(props.product)
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
                        {
                            value['reveal'] === undefined ?
                            get_reference(value["access"]) :
                            value['reveal'](get_reference(value["access"]))
                        }
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
                <Modal.Title>Product Detailed View</Modal.Title>
            </Modal.Header>
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
        </Modal>
    )
}
export default ProductViewModal;