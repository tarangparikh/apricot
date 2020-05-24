import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DefaultNav from "../View/DefaultNavbar";
import Company from "../Company/Company";
import DashBoard from "../Dashboard/DasbBoard";
import Cookies from 'js-cookie'
import Redirect from "react-router-dom/es/Redirect";
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticating: true,
            isValidUser: false
        }
    }
    componentDidMount() {
        if(Cookies.get('apricot_user')===undefined){
            this.setState({
                isAuthenticating: false,
                isValidUser: false
            })
        }else{
            this.setState({
                isAuthenticating: false,
                isValidUser: true
            })
        }
    }
    render(){
        const company_component = () => {
            return <Company />
        }
        const dashBoard_component = () => {
            return <DashBoard/>
        }
        if(this.state.isAuthenticating){
            return <div>Loading...</div>
        }else if(!this.state.isValidUser){
            return <Redirect to='/login'/>
        }else{
            return (
                <div>
                    <DefaultNav/>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path = "/" component={dashBoard_component}/>
                            <Route exact path="/dashboard" component={dashBoard_component} />
                            <Route exact path="/company" component={company_component} />
                        </Switch>
                    </BrowserRouter>
                </div>
            )
        }
    }
}
export default Home