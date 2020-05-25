import React,{Component} from "react";
import {Badge, Button, ButtonGroup, Card, Container, Table} from "react-bootstrap";
import axios from 'axios';
import Cookies from 'js-cookie';
import PartyViewModal from "./PartyViewModal";
import Constants from "../Constant/Constants";
import PartyAddModal from "./PartyAddModal";
import PartyUpdateModal from "./PartyUpdateModal";

class Party extends Component {

    constructor(props) {
        super(props);
        this.state = {
            api_store: Constants(),
            company: this.props.company,
            party:[],
            isLoaded: false,
            currentParty: undefined
        }
        this.formData = [
            {name: 'Party Name',access: 'partyName',pattern:"(.)*"},
            {name: 'Contact Number',access: 'phoneNumber',pattern:"(.)*"},
            {name: 'Email',access: 'email',pattern:"(.)*"},
            {name: 'Billing Address',access: 'billingAddress',pattern:"(.)*"},
            {name: 'Shipping Address',access: 'shippingAddress',pattern:"(.)*"},
            {name: 'Balance',access: 'balance',pattern:"(.)*"},
            {name: 'GST Number' ,access: 'gstInNumber',pattern:"(.)*"},
        ]
    }
    //axios call
    componentDidMount() {
        axios.get(this.state.api_store.party.viewParty+this.state.company.id)
            .then(value => {
                this.setState({
                    isLoaded: true,
                    party :  value.data
                })
            }).catch(reason => {

        })
    }

    updateHandler = (party) => {
        //alert(JSON.stringify(category))
        axios.post(this.state.api_store.party.postParty,party)
            .then(value => {
                let updated_party = value.data;
                let clone_party = [...this.state.party].map(obj => {
                    return updated_party.id === obj.id ? updated_party : obj;
                });
                this.setState({
                    party: clone_party
                })
                alert('Party Updated !!')
            }).catch(reason => {
            alert(JSON.stringify(reason))
        })

    }

    addHandler = (party) => {
        // alert(JSON.stringify(party))
        axios.post(this.state.api_store.party.postParty,party)
            .then(value => {
                let party_clone = [...this.state.party];
                party_clone.push(value.data);
                this.setState({
                    party: party_clone
                })
                alert('Party Added !!')
            }).catch(reason => {
            alert(JSON.stringify(reason))
        })
    }

    showPartyAddModal = () => {
        this.setState({
            partyAddModalShow: true
        })
    }

    showPartyUpdateModal = (event,index) => {
        let party = [...this.state.party]
            .filter(value => value.id === index)
        this.setState({
            partyUpdateModalShow: true,
            currentParty: party[0]
        })
    }

    closePartyAddModal = () => {
        this.setState({
            partyAddModalShow: false
        })
    }

    closePartyUpdateModal = () => {
        this.setState({
            partyUpdateModalShow: false
        })
    }

    makePartyList = () => {
        let partyList;
        if(this.state.isLoaded === false){
            partyList = <div>Loading....</div>
        }else{
            partyList = this.state.party.map(party => {
                return(
                    <tr key={party.id}>
                        <td>{party.partyName}</td>
                        <td>{party.phoneNumber}</td>
                        <td>{party.gstInNumber}</td>
                        <td>
                            <ButtonGroup aria-label="Actions">
                                <Button
                                    variant="secondary"
                                    onClick = {(event) => this.showPartyUpdateModal(event,party.id)}>
                                    Update
                                </Button>
                                <Button variant="danger">Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                )
            })
        }
        return partyList;
    }

    makePartyAddModal = () =>{
        return <PartyAddModal
            form_data = {this.formData}
            show = {this.state.partyAddModalShow}
            company={this.state.company}
            addHandler={this.addHandler}
            closeHandler={this.closePartyAddModal}/>
    }
    makePartyUpdateModal = () => {
        if(this.state.currentParty === undefined) {
            return <div/>
        }
        else{
            return <PartyUpdateModal
                form_data = {this.formData}
                show = {this.state.partyUpdateModalShow}
                party = {this.state.currentParty}
                updateHandler = {this.updateHandler}
                closeHandler = {this.closePartyUpdateModal}
            />
        }
    }

    render() {
        let partyList = this.makePartyList();
        // let partyViewModal = this.makePartyViewModal();
        let partyAddModal = this.makePartyAddModal()
        let partyUpdateModal = this.makePartyUpdateModal();

        return (
            <div>
                <Container style={{ marginTop: "10px",}}>
                    <Card>
                        <Card.Header>
                            <h3>
                                Party Details
                                <Button onClick={this.showPartyAddModal}
                                        style={{float : "right"}}>
                                        Add</Button>
                            </h3>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive>
                                <thead>
                                <tr>
                                    <th>Party Name</th>
                                    <th>Contact Number</th>
                                    <th>GST Number</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {partyList}
                                </tbody>
                            </Table>

                        </Card.Body>
                    </Card>
                    {partyAddModal}
                    {partyUpdateModal}
                </Container>
            </div>
        )
    }
}

export default Party ;