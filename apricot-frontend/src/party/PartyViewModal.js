import React from "react";
import {Button, Modal, Table} from "react-bootstrap";

const PartyViewModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.closeHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Party Detailed View</Modal.Title>
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
                            <td>Party Name</td>
                            <td>{props.party.partyName}</td>
                        </tr>
                        <tr>
                            <td>Contact Number</td>
                            <td>{props.party.phoneNumber}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{props.party.email}</td>
                        </tr>
                        <tr>
                            <td>Billing Address</td>
                            <td>{props.party.billingAddress}</td>
                        </tr>
                        <tr>
                            <td>Shipping Address</td>
                            <td>{props.party.shippingAddress}</td>
                        </tr>
                        <tr>
                            <td>Balance</td>
                            <td style={{color: Math.sign(props.party.balance) === -1 ? "red" : "green"}}>
                                {props.party.balance}</td>
                        </tr>
                        <tr>
                            <td>GST Number</td>
                            <td>{props.party.gstInNumber}</td>
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

export default PartyViewModal;