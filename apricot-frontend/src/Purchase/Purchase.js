import React,{Component} from "react";
import {Button, ButtonGroup, Card, Container, Form, Nav, Table} from "react-bootstrap";
import axios from 'axios'
import Constants from "../Constant/Constants";
import ProductViewModal from "../Items/Product/ProductViewModal";
import PurchaseViewModal from "./PurchaseViewModal";
import ItemAdd from "./ItemAdd";
class Purchase extends Component{
    constructor(props) {
        super(props);
        this.state = {
            api_store: Constants(),
            isLoaded: false,
            company: props.company,
            party: [],
            product:[],
            addProduct:{},
            purchaseOrder:[],
            currentPurchaseOrder: undefined,
            activeBar: "order"
        }
        this.formData = {
            details:[
                {name:"Party",access:["party","partyName"]},
                {name:"Order Number",access:["purchaseOrderNumber"]},
                {name:"Purchase Date",access:["purchaseOrderDate"]},
                {name:"Payment Type",access: ["paymentType"]},
                {name:"Description",access: ["description"]},
                {name:"State of Purchase",access: ["stateOfPurchase"]},
                {name:"Recieved Amount",access: ["receivedAmount"]},
                {name:"Total Amount",access: ["totalAmount"]},
                {name:"Balance Due",access: ["balanceDue"]}
            ]
        }

    }

    componentDidMount() {
        axios.get(this.state.api_store.purchase.viewPurchaseOrder+this.state.company.id)
            .then(purchaseOrder => {
                axios.get(this.state.api_store.party.viewParty+this.state.company.id)
                    .then(party => {
                        axios.get(this.state.api_store.product.viewProduct+this.state.company.id)
                            .then(product => {
                                this.setState({
                                    isLoaded: true,
                                    party: party.data,
                                    product: product.data,
                                    purchaseOrder: purchaseOrder.data
                                })
                            })
                    })
            })
    }

    showViewModal = (event,index) => {
        let purchaseOrder = [...this.state.purchaseOrder].filter(value => value.id === index);
        this.setState({
            viewModalShow: true,
            currentPurchaseOrder: purchaseOrder[0]
        })
    }
    closeViewModal = () => {
        this.setState({
            viewModalShow: false
        })
    }
    showAddModal = () => {
        this.setState({
            addModalShow: true
        })
    }
    closeAddModal = () => {
        this.setState({
            addModalShow: false
        })
    }

    onPartyChangeHandler = (event) => {
        if(event.target.value === '--none') return
        let party = [...this.state.party].filter(value => value.id === parseInt(event.target.value))
        let obj = {party: party}
        this.setState({
            addProduct: {...this.state.addProduct,...obj}
        })
    }
    onAttributeChangeHandler = (event,path) => {
        let obj = {}
        obj[path] = event.target.value;
        this.setState({
            addProduct: {...this.state.addProduct,...obj}
        })
        //alert(JSON.stringify(this.state.addProduct))
    }
    onTabChange = (eventKey,event) => {
        this.setState({
            activeBar: eventKey
        })
    }
    makeAdd = () => {
        let partyOptions = [<option value = "--none" >--None--</option>]
        const temp = this.state.party.map(party => {
            return <option value = {party.id} >{party.partyName}</option>
        })
        partyOptions = [...partyOptions,...temp];
        return(
           <div>
               <Table>
                   <thead>
                   <tr>
                       <th colSpan={"2"}>Details</th>
                   </tr>
                   </thead>
                   <tbody>
                        <tr>
                            <td>
                                Party
                            </td>
                            <td>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Control requireds as="select" onChange={this.onPartyChangeHandler} custom>
                                        {partyOptions}
                                    </Form.Control>
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Purchase Date
                            </td>
                            <td>
                                <Form.Group>
                                    <Form.Control
                                        required
                                        type="text"
                                        pattern={"(.)*"}
                                        placeholder={'Enter Purchase Date'}
                                        onChange={event => this.onAttributeChangeHandler(event,"purchaseOrderDate")}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {'Please enter valid Purchase Date'}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Purchase Order Number
                            </td>
                            <td>
                                <Form.Group>
                                    <Form.Control
                                        required
                                        type="text"
                                        pattern={"(.)*"}
                                        placeholder={'Enter Purchase Order Number'}
                                        onChange={event => this.onAttributeChangeHandler(event,"purchaseOrderNumber")}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {'Please enter valid Purchase Order Date'}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Payment Type
                            </td>
                            <td>
                                <Form.Group>
                                    <Form.Control
                                        required
                                        type="text"
                                        pattern={"(.)*"}
                                        placeholder={'Enter Payment Type'}
                                        onChange={event => this.onAttributeChangeHandler(event,"paymentType")}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {'Please enter valid Payment Type'}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Description
                            </td>
                            <td>
                                <Form.Group>
                                    <Form.Control
                                        required
                                        type="text"
                                        pattern={"(.)*"}
                                        placeholder={'Enter Description'}
                                        onChange={event => this.onAttributeChangeHandler(event,"description")}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {'Please enter valid Description'}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                State of Purchase
                            </td>
                            <td>
                                <Form.Group>
                                    <Form.Control
                                        required
                                        type="text"
                                        pattern={"(.)*"}
                                        placeholder={'Enter State of Purchase'}
                                        onChange={event => this.onAttributeChangeHandler(event,"stateOfPurchase")}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {'Please enter valid State of Purchase'}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Received Amount
                            </td>
                            <td>
                                <Form.Group>
                                    <Form.Control
                                        required
                                        type="text"
                                        pattern={"(.)*"}
                                        placeholder={'Enter Received Amount'}
                                        onChange={event => this.onAttributeChangeHandler(event,"receivedAmount")}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {'Please enter valid Received Amount'}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </td>
                        </tr>

                   </tbody>
               </Table>
               <Table>
                   <thead>
                       <tr>
                           <th>
                                Add Items
                           </th>
                           <th>
                               <Button onClick={this.showAddModal} style={{float : "right"}}>Add</Button>
                           </th>
                       </tr>
                   </thead>
               </Table>
           </div>
        )
    }
    makeList = () => {
        const purchaseRows = this.state.purchaseOrder.map(purchase=>{
            return (
                <tr key = {purchase.id}>
                    <td>{purchase.purchaseOrderNumber}</td>
                    <td>{purchase.purchaseOrderDate}</td>
                    <td>{purchase.party.partyName}</td>
                    <td>
                        <ButtonGroup aria-label="Actions">
                            <Button
                                variant="secondary"
                                onClick = {(event) => this.showViewModal(event,purchase.id)}
                            >View</Button>
                            <Button
                                variant="secondary"
                                //onClick = {(event) => this.showUpdateModal(event,product.id)}
                            >Update</Button>
                            <Button
                                variant="danger"
                                //onClick = {(event) => this.deleteHandler(event,product.id)}
                            >Delete</Button>
                        </ButtonGroup>
                    </td>
                </tr>
            )
        })
        return(
            <Table responsive>
                <thead>
                <tr>
                    <th>Order Number</th>
                    <th>Date</th>
                    <th>Party Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {purchaseRows}
                </tbody>
            </Table>
        )
    }
    makeViewModal = () => {
        if(this.state.currentPurchaseOrder === undefined) {
            return <div/>
        }
        else{
            return <PurchaseViewModal
                show = {this.state.viewModalShow}
                purchaseOrder = {this.state.currentPurchaseOrder}
                formData = {this.formData}
                closeHandler = {this.closeViewModal}
            />
        }
    }
    makeAddModal = () => {
        return <ItemAdd
            show = {this.state.addModalShow}

            closeHandler = {this.closeAddModal}
    />
    }
    render() {
        const content = this.state.isLoaded === false ?
            <div>Loading</div> :
            this.state.activeBar === "add" ?
                this.makeAdd() :
                this.makeList();

            return(
            <div>
                <Container style={{ marginTop: "10px",}}>
                    <Card>
                        <Card.Header>
                            <Nav variant="tabs" defaultActiveKey={this.state.activeBar} onSelect = {this.onTabChange}>
                                <Nav.Item>
                                    <Nav.Link eventKey="order">Orders</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="add">Add</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            {content}
                        </Card.Body>
                    </Card>
                </Container>
                {this.makeViewModal()}
                {this.makeAddModal()}
            </div>
        )
    }
}
export default Purchase