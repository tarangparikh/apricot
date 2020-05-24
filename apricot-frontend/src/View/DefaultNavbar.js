import React, { Component } from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";


class DefaultNav extends Component{
    selectHandler = (e) => {
        alert(e)
    }

    render() {
        return(
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">Apricot</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item>
                                <Nav.Link eventKey="1" href="/dashboard">
                                    Dashboard
                                </Nav.Link>
                            </Nav.Item>

                            <NavDropdown title="Sale" id="nav-sale">
                                <NavDropdown.Item eventKey="view.sale.invoice">Sale Invoice</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="view.payment.in">Payment In</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="view.sale.return">Sale Return</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="view.sale.order">Sale Order</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>

                            <NavDropdown title="Purchase" id="nav-purchase">
                                <NavDropdown.Item eventKey="view.purchase.invoice">Purchase Invoice</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="view.payment.out">Payment Out</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="view.purchase.return">Purchase Return</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="view.purchase.order">Purchase Order</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>

                            <Nav.Item>
                                <Nav.Link eventKey="add.expence" href="#/home">
                                    Expense
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="view.party" href="#/home">
                                    Party
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="view.transaction" href="#/home">
                                    Transaction
                                </Nav.Link>
                            </Nav.Item>

                            <NavDropdown title="Item" id="nav-item">
                                <NavDropdown.Item eventKey="view.product">Product</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="view.services">Services</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="view.Units">Units</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="view.Category">Category</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>

                            <NavDropdown title="Company" id="nav-company">
                                <NavDropdown.Item eventKey="change.company" href="/company">Change Company</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Profile" id="nav-company">
                                <NavDropdown.Item eventKey="view.profile">View Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="view.settings">Settings</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default DefaultNav