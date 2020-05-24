import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Login from "./Login/Login";
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Constants from "./Constant/Constants";
import DashBoard from "./Dashboard/DasbBoard";
import DefaultNav from "./View/DefaultNavbar";
import Company from "./Company/Company";



class App  extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    render() {
        const company_component = () => {
            return <Company />
        }
        const dashBoard_component = () => {
            return <DashBoard/>
        }
        return (
            <div className="App">
                <DefaultNav/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/dashboard" component={dashBoard_component} />
                        <Route path="/company" component={company_component} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
