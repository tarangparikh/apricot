import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DefaultNav from "../View/DefaultNavbar";
import Company from "../Company/Company";
import DashBoard from "../Dashboard/DasbBoard";
import Cookies from 'js-cookie'
import Redirect from "react-router-dom/es/Redirect";
import Product from "../Items/Product/Product";
import Service from "../Items/Service/Service";
import Category from "../Items/Category/Category";
import Unit from "../Items/Unit/Unit";
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
                isValidUser: true,
                user: JSON.parse(Cookies.get('apricot_user'))
            })
        }
    }
    render(){
        const company_component = () => <Company user={this.state.user}/>
        const dashBoard_component = () => <DashBoard/>
        const item_product_component = () => <Product/>
        const item_service_component = () => <Service/>
        const item_category_component = () => <Category/>
        const item_unit_component = () => <Unit/>


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
                            <Route exact path="/item" component={item_product_component} />
                            <Route exact path="/item/product" component={item_product_component}/>
                            <Route exact path="/item/service" component={item_service_component}/>
                            <Route exact path="/item/unit" component={item_unit_component}/>
                            <Route exact path="/item/category" component={item_category_component}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            )
        }
    }
}
export default Home