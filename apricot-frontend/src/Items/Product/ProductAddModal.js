import React, {useState} from 'react'
import {Button, Form, Modal, Table} from "react-bootstrap";
const ProductAddModal  = (props) => {
    const [validated, setValidated] = useState(false);
    const [product,setProduct] = useState({
        productPrice: {gst:{}},
        category:{},
        company:props.company,
        stock:{}
    })
    const [category,setCategory] = useState([
        ...props.category
    ])
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }else{
            //alert(JSON.stringify(product))
            //alert('submitting')
            props.addHandler(product)
        }
        setValidated(true);
    };
    const changeCategory = (event,index) => {
        if(event.target.value === '--none') return
        let changed_category = [...category].filter(value => value.id === index)[0];
        let category_obj = {category: changed_category}
        //alert(JSON.stringify(category_obj))
        setProduct({
            ...product,...category_obj
        })
    }
    const handleChange = (event,value) => {
        let obj = {...product}
        let ref = obj;
        let path = value['access']
        for (let i = 0; i < path.length - 1; i++) {
            ref = ref[path[i]]
        }
        ref[path[path.length-1]] = value['parse'](event.target.value);
        setProduct(prevState => {
            return {...prevState, ...obj}
        })
    }
    const get_reference = (path) => {
        let ref = product
        for(let i = 0;i<path.length;i++){
            ref = ref[path[i]]
        }
        return ref;
    }
    const resolve_input = (value) => {
        if(value['access'][0] === 'category'){
            let temp = [<option value = "--none" >--None--</option>]
            let category_options = category.map(category => {
                return <option value = {category.id} >{category.categoryName}</option>
            })
            category_options =[...temp,...category_options]
            return (
                <div>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Control requireds as="select" onChange={(event) => {changeCategory(event,parseInt(event.target.value))}} custom>
                            {category_options}
                        </Form.Control>
                    </Form.Group>
                </div>
            )
        }else{
            return <Form.Group>
                <Form.Control
                    required
                    type="text"
                    pattern={value["pattern"]}
                    placeholder={'Enter '+value["name"]}
                    onChange={event => handleChange(event,value)}
                />
                <Form.Control.Feedback type="invalid">
                    {'Please enter valid '+value["name"]}
                </Form.Control.Feedback>
            </Form.Group>
        }
    }
    const make_sub_Table = (name,schema) => {
        const temp_table = schema.map(value => {
            return(
                <tr>
                    <td>
                        {value["name"]}
                    </td>
                    <td>
                        {resolve_input(value)}
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
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ProductAddModal