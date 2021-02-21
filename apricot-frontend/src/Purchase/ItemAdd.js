import React, {useState} from 'react'
import {Button, Form, Modal, Table} from "react-bootstrap";
import printValue from "yup/lib/util/printValue";
import triggerBrowserReflow from "react-bootstrap/cjs/triggerBrowserReflow";
const ItemAdd = (props) => {
    const [cartItem,setCartItem] = useState({
        item:{},
        quantity: 0,
        freeQuantity: 0,
        rate: 0,
        taxIncluded: 0,
        discountRate: 0,
        additionalCess: 0,
        gst: {
            gstType: 'GST',
            gstRate: 0
        }

    });

    let productOptions = [<option value = "--none" >--None--</option>]
    const temp = props.products.map(product => {
        return <option value = {product.id} >{product.productName}</option>
    })
    productOptions = [...productOptions,...temp];

    let onProductChangeHandler = (event) => {
        let product = props.products.filter(value => value.id === parseInt(event.target.value))[0]
        let obj = {item:{}}
        obj["item"] = product
        setCartItem(prevState => {
            return  {...prevState,...obj}
        })
    }
    let addHandler = () => {
        let transient  = {
            subTotal:cartItem.quantity*cartItem.rate,
            discountAmount:cartItem.quantity*cartItem.rate*cartItem.discountRate / 100,
            taxAmount:cartItem.taxIncluded === 0 ? cartItem.quantity * cartItem.rate * cartItem.gst.gstRate / 100  : 0,
            totalAmount: (cartItem.quantity * cartItem.rate) - (cartItem.quantity * cartItem.rate * cartItem.discountRate / 100) + (cartItem.taxIncluded === 0 ? cartItem.quantity * cartItem.rate * cartItem.gst.gstRate / 100  : 0) + (cartItem.additionalCess),
        }
        props.addHandler({...cartItem,...transient})
    }
    let onStringChangeHandler = (event,path) => {
        let obj = {}
        obj[path] = event.target.value;
        setCartItem(prevState => {
            return {...prevState,...obj}
        })
    }
    let onIntegerChange = (event,path) => {
        let value
        if(event.target.value === undefined || event.target.value === '') value = '0'
        else value = event.target.value;
        let obj = {}
        obj[path] = parseInt(value);
        setCartItem(prevState => {
            return {...prevState,...obj}
        })
    }

    let onGstTypeChange = (event) => {
        let obj  = {...cartItem.gst}
        obj['gst']['gstType'] = event.target.value;
        setCartItem(prevState => {
            return {...prevState,...obj}
        })
    }
    let onGstTaxCahnge = (event) => {
        let obj = {gst:{...cartItem.gst}}
        alert(JSON.stringify(obj))
        obj['gst']['gstRate'] = parseInt(event.target.value);
        setCartItem(prevState => {
            return {...prevState,...obj}
        })
    }

    return(
        <Modal show={props.show} onHide={props.closeHandler} size={"lg"}>
            <Modal.Header closeButton>
                <Modal.Title>Add Products</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <Table>
                        <thead>
                            <th colSpan={"2"}>
                                Add Item
                            </th>
                            <th></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Product
                                </td>
                                <td>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Control requireds as="select" onChange={onProductChangeHandler} custom>
                                            {productOptions}
                                        </Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Quantity
                                </td>
                                <td>
                                    <Form.Group>
                                        <Form.Control
                                            required
                                            type="text"
                                            pattern={"[0-9]*"}
                                            defaultValue={cartItem.quantity}
                                            placeholder={'Enter Quantity'}
                                            onChange={event => onIntegerChange(event,"quantity")}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {'Please enter valid Quantity Date'}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Free quantity
                                </td>
                                <td>
                                    <Form.Group>
                                        <Form.Control
                                            required
                                            type="text"
                                            pattern={"[0-9]*"}
                                            defaultValue={cartItem.freeQuantity}
                                            placeholder={'Enter Free Quantity'}
                                            onChange={event => onIntegerChange(event,"freeQuantity")}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {'Please enter valid Free Quantity'}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Rate
                                </td>
                                <td>
                                    <Form.Group>
                                        <Form.Control
                                            required
                                            type="text"
                                            pattern={"(.)*"}
                                            defaultValue={cartItem.rate}
                                            placeholder={'Enter Rate'}
                                            onChange={event => onIntegerChange(event,"rate")}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {'Please enter valid Rate'}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Tax Included
                                </td>
                                <td>
                                    <Form.Group>
                                        <Form.Control
                                            required
                                            type="text"
                                            pattern={"[0-1]"}
                                            placeholder={'Enter Tax Included'}
                                            defaultValue={cartItem.taxIncluded}
                                            onChange={event => onIntegerChange(event,"taxIncluded")}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {'Please enter valid Tax Included'}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Discount Rate
                                </td>
                                <td>
                                    <Form.Group>
                                        <Form.Control
                                            required
                                            type="text"
                                            pattern={"[0-9]*"}
                                            placeholder={'Enter Discount Rate'}
                                            defaultValue={cartItem.discountRate}
                                            onChange={event => onIntegerChange(event,"discountRate")}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {'Please enter valid Discount Rate'}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Additional Cess
                                </td>
                                <td>
                                    <Form.Group>
                                        <Form.Control
                                            required
                                            type="text"
                                            pattern={"[0-9]*"}
                                            placeholder={'Enter Additional Cess'}
                                            defaultValue={cartItem.additionalCess}
                                            onChange={event => onIntegerChange(event,"additionalCess")}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {'Please enter valid Additional Cess'}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    GST Type
                                </td>
                                <td>
                                    <Form.Group>
                                        <Form.Control
                                            required
                                            type="text"
                                            pattern={"(.)*"}
                                            placeholder={'Enter Gst Type'}
                                            defaultValue={'GST'}
                                            onChange={event => onGstTypeChange(event)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {'Please enter valid Gst Type'}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    GST Tax
                                </td>
                                <td>
                                    <Form.Group>
                                        <Form.Control
                                            required
                                            type="text"
                                            pattern={"[0-9]*"}
                                            placeholder={'Enter Gst Tax'}
                                            defaultValue={cartItem.gst.gstRate}
                                            onChange={event => onGstTaxCahnge(event)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {'Please enter valid Gst Tax'}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Sub Total
                                </td>
                                <td>
                                    {cartItem.quantity * cartItem.rate}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Discount Amount
                                </td>
                                <td>
                                    {cartItem.quantity * cartItem.rate * cartItem.discountRate / 100}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Tax
                                </td>
                                <td>
                                    {cartItem.taxIncluded === 0 ? cartItem.quantity * cartItem.rate * cartItem.gst.gstRate / 100  : 0 }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Total Amount
                                </td>
                                <td>
                                    {(cartItem.quantity * cartItem.rate) - (cartItem.quantity * cartItem.rate * cartItem.discountRate / 100) + (cartItem.taxIncluded === 0 ? cartItem.quantity * cartItem.rate * cartItem.gst.gstRate / 100  : 0) + (cartItem.additionalCess)}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={addHandler}>
                    Add
                </Button>
                <Button variant="secondary" onClick={props.closeHandler}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ItemAdd