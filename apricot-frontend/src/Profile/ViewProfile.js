import React, {Component} from "react";
import axios from "axios";
import Constants from "../Constant/Constants";
import UserViewModal from "./UserViewModal";
import {Badge, Button, ButtonGroup, Card, Container, Modal, Table} from "react-bootstrap";

class ViewProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            api_store: Constants(),
            user: this.props.user
            // user : [],
            // currentUser: undefined,
            // isLoaded : false
        }
        // this.formData = [
        //     {name: 'First Name',access: 'firstName',pattern:"(.)*"},
        //     {name: 'Last Name',access: 'lastName',pattern:"(.)*"},
        //     {name: 'Contact Number',access: 'contactNumber',pattern:"(.)*"},
        //     {name: 'Address',access: 'homeAddress',pattern:"(.)*"},
        //     {name: 'Email',access: 'email',pattern:"(.)*"},
        //     {name: 'Password' , access: 'passWord',pattern: "(.)*"}
        // ]
    }

    // componentDidMount() {
    //     axios.get(this.state.api_store.user.viewUser+this.state.activeUser.id)
    //         .then(value => {
    //             this.setState({
    //                 isLoaded: true,
    //                 user :  value.data
    //             })
    //             alert(JSON.stringify(value.data))
    //         }).catch(reason => {
    //             alert(JSON.stringify(reason))
    //     })
    // }
    //
    // closeUserViewModal= () => {
    //     this.setState({
    //         userViewModalShow: false
    //     })
    // }
    //
    // makeUserViewModal = () => {
    //     if(this.state.currentUser === undefined){
    //         return <div/>
    //     }else{
    //         return <UserViewModal
    //             show={this.state.userViewModalShow}
    //             user={this.state.currentUser}
    //             closeHandler={this.closeUserViewModal}/>
    //     }
    // }
    //
    // showUserViewModal = (event,index) => {
    //     let user = [...this.state.user].filter(value => value.id===index)
    //     this.setState({
    //         userViewModalShow: true,
    //         currentUser: user[0]
    //     })
    // }
    //
    // makeUserList = () => {
    //     let userList;
    //     if(this.state.isLoaded === false){
    //         userList = <div>Loading....</div>
    //     }else{
    //         userList = this.state.user.map(user => {
    //             return(
    //                 <tr key={user.id}>
    //                     <td>{user.firstName}</td>
    //                     <td>
    //                         <ButtonGroup aria-label="Actions">
    //                             <Button
    //                                 variant="primary"
    //                                 onClick = {(event) => this.showUserViewModal(event,user.id)}>
    //                                 View Details
    //                             </Button>
    //                         </ButtonGroup>
    //                     </td>
    //                 </tr>
    //             )
    //         })
    //     }
    //     return userList;
    // }
    //
    //

    render() {

        // let userList = this.makeUserList();
        // let userViewModal = this.makeUserViewModal();
            alert(JSON.stringify(this.state.user))
        return (
            <div>
                <Container style={{ marginTop: "10px",}}>
                    <Card>
                        <Card.Header >
                            <Card.Title>User Profile Details</Card.Title>
                        </Card.Header>
                        <Card.Body>
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
                                        <td>{this.state.user.firstName}</td>
                                    </tr>
                                    <tr>
                                        <td>User's Last Name</td>
                                        <td>{this.state.user.lastName}</td>
                                    </tr>
                                    <tr>
                                        <td>Contact Number</td>
                                        <td>{this.state.user.contactNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>{this.state.user.homeAddress}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{this.state.user.email}</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }

}

export default ViewProfile;
