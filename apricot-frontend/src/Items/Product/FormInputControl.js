import {Form} from "react-bootstrap";
import React from "react";

const FormInputControl = (props) => {
    return(
        <Form.Group>
            <Form.Control
                required
                type="text"
                pattern={props.value["pattern"]}
                placeholder={'Enter '+props.value["name"]}
                defaultValue={
                    props.value['reveal'] === undefined ?
                        props.getReference(props.value["access"]) :
                        props.value['reveal'](props.getReference(props.value["access"]))
                }
                //onChange={event => handleChange(event,value["access"])}
            />
            <Form.Control.Feedback type="invalid">
                {'Please enter valid '+props.value["name"]}
            </Form.Control.Feedback>
        </Form.Group>
    )
}
export default FormInputControl