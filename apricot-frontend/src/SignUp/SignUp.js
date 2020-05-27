import React, {Component} from "react";
import {Button, Card, Form, NavLink, Table} from "react-bootstrap";
import axios from "axios";
import Constants from "../Constant/Constants";
import Cookies from "js-cookie";
import PartyAddModal from "../party/PartyAddModal";
import UserAddModal from "./UserAddModal";

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passwords : '',
            // confirmPasswords : '',
            api_store: Constants(),
            user: [],
            currentUser:undefined
        }
        this.formData = [
            {name: 'First Name',access: 'firstName',pattern:"(.)*"},
            {name: 'Last Name',access: 'lastName',pattern:"(.)*"},
            {name: 'Contact Number',access: 'contactNumber',pattern:"(.)*"},
            {name: 'Address',access: 'homeAddress',pattern:"(.)*"},
            {name: 'Email',access: 'email',pattern:"(.)*"},
            {name: 'Password' , access: 'passWord',pattern: "(.)*"}
        ]
    }

    addHandler = (user) => {
        axios.post(this.state.api_store.user.postUser,user)
            .then(value => {
                let user_clone = [...this.state.user];
                user_clone.push(value.data);
                this.setState({
                    user: user_clone
                })
                alert('Congratulations !! Registration done.')

            }).catch(reason => {
            alert(JSON.stringify(reason))
        })
    }

    // onSubmitHandler(event){
    //     const { passwords, confirmPasswords } = this.state;
    //     event.preventDefault();
    //     if (passwords !== confirmPasswords) {
    //         alert("Passwords don't match");
    //         event.stopPropagation();
    //     }
    //     else {
    //         axios.post(this.state.api_store.user.postUser,part)
    //             .then(value => {
    //                 let party_clone = [...this.state.party];
    //                 party_clone.push(value.data);
    //                 this.setState({
    //                     party: party_clone
    //                 })
    //                 alert('Party Added !!')
    //             }).catch(reason => {
    //             alert(JSON.stringify(reason))
    //         })
    //     }
    // }

    makeUserAddModal = () =>{
        return <UserAddModal
            form_data = {this.formData}
            addHandler={this.addHandler}/>
    }

   render() {

       let userAddModal = this.makeUserAddModal()

        return (
            <div style={{ textAlign: "center",}}>
                    {userAddModal}
            </div>
        );
    }

}

export default SignUp;
