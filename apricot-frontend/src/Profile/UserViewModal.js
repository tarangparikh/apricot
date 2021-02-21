import React from "react";
import {Button, Card, Modal, Table} from "react-bootstrap";

const UserViewModal = (props) => {

    // const center_align = {
    //     margin: 0,
    //     position: "absolute",
    //     top: "50%",
    //     left: "50%",
    //     msTransform: "translate(-50%, -50%)",
    //     transform: "translate(-50%, -50%)"
    // }

    return (
        <Modal show={props.show} onHide={props.closeHandler} >
            <Modal.Header >
                <Modal.Title>User Profile Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <Table>
                        <thead>
                        <tr>
                            <th colSpan = "2" >Details</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>User's First Name</td>
                            <td>{props.user.firstName}</td>
                        </tr>
                        <tr>
                            <td>User's Last Name</td>
                            <td>{props.user.lastName}</td>
                        </tr>
                        <tr>
                            <td>Contact Number</td>
                            <td>{props.user.contactNumber}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{props.user.homeAddress}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{props.user.email}</td>
                        </tr>
                        </tbody>
                    </Table>
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

export default UserViewModal;