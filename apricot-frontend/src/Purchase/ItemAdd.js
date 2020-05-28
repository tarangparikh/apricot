import React from 'react'
import {Button, Modal} from "react-bootstrap";
const ItemAdd = (props) => {
    return(
        <Modal show={props.show} onHide={props.closeHandler} size={"lg"}>
            <Modal.Header closeButton>
                <Modal.Title>Add Products</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>

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
export default ItemAdd