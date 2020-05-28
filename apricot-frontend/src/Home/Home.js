import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DefaultNav from "../View/DefaultNavbar";
import Company from "../Company/Company";
import DashBoard from "../Dashboard/DasbBoard";
import Cookies from 'js-cookie';
import Redirect from "react-router-dom/es/Redirect";
import Product from "../Items/Product/Product";
import Service from "../Items/Service/Service";
import Category from "../Items/Category/Category";
import Unit from "../Items/Unit/Unit";
import Party from "../party/Party";
import ViewProfile from "../Profile/ViewProfile";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticating: true,
            isValidUser: false,
            isValidCompany: false
        }
    }
    componentDidMount() {
        if(Cookies.get('apricot_user')===undefined){
            this.setState({
                isAuthenticating: false,
                isValidUser: false
            })
        }
        else{
            if(Cookies.get('apricot_company')===undefined){
                this.setState({
                    isAuthenticating: false,
                    isValidUser: true,
                    isValidCompany: false,
                    user: JSON.parse(Cookies.get('apricot_user'))
                })
            }else{
                this.setState({
                    isAuthenticating: false,
                    isValidUser: true,
                    isValidCompany: true,
                    user: JSON.parse(Cookies.get('apricot_user')),
                    company: JSON.parse(Cookies.get('apricot_company'))
                })
            }
        }
    }
    render()
    {
        const company_component = () => <Company user={this.state.user}/>
        const dashBoard_component = () => <DashBoard/>
        const item_product_component = () => <Product company={this.state.company}/>
        const item_service_component = () => <Service/>
        const item_category_component = () => <Category company={this.state.company}/>
        const item_unit_component = () => <Unit/>
        const party_component = () => <Party company={this.state.company}/>
        const profile_viewProfile_component = () => <ViewProfile user={this.state.user}/>


        if(this.state.isAuthenticating){
            return <div>Loading...</div>
        }else if(!this.state.isValidUser){
            return <Redirect to='/login'/>
        }else if(!this.state.isValidCompany){
            return (
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route path = "/" component={company_component}/>
                            <Route exact path="/company" component={company_component} />
                        </Switch>
                    </BrowserRouter>
                </div>
            )
        }
        else {
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
                            <Route exact path="/party" component={party_component}/>
                            <Route exact path="/profile/viewProfile" component={profile_viewProfile_component}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            )
        }
    }
}
export default Home;