import React, { Component } from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";


class DashBoard extends Component{
    selectHandler = (e) => {
        alert(e)
    }

    render() {
        return(
            <div>
               DashBoard
            </div>
        )
    }
}

export default DashBoard