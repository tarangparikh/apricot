import React from "react";
import {Button, Modal, Table} from "react-bootstrap";

const CompanyViewModal = (props) => {
    return(
        <Modal show={props.show} onHide={props.closeHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Company Detailed View</Modal.Title>
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
                            <td>Business Name</td>
                            <td>{props.company.businessName}</td>
                        </tr>
                        <tr>
                            <td>Contact Number</td>
                            <td>{props.company.contactNumber}</td>
                        </tr>
                        <tr>
                            <td>GST-In Number</td>
                            <td>{props.company.gstInNumber}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{props.company.email}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{props.company.address}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{props.company.state}</td>
                        </tr>
                        <tr>
                            <td>Bank Name</td>
                            <td>{props.company.bankName}</td>
                        </tr>
                        <tr>
                            <td>Account</td>
                            <td>{props.company.accountNumber}</td>
                        </tr>
                        <tr>
                            <td>IFSC Code</td>
                            <td>{props.company.ifscCode}</td>
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
export default CompanyViewModal