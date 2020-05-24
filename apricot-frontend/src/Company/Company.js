import React,{Component} from "react";
import {Badge, Button, ButtonGroup, Card, Container, Dropdown, Jumbotron, Row, Table} from "react-bootstrap";
import axios from 'axios';
import Constants from "../Constant/Constants";
import CompanyViewModal from "./CompanyViewModal";
import CompanyUpdateModal from "./CompanyUpdateModal";
import CompanyAddModal from "./CompanyAddModal";

class Company extends Component{

    //props initialize
    constructor(props) {
        super(props);
        this.state = {
            userId: 1,
            api_store : Constants(),
            isLoaded: false,
            company:[],
            currentCompany: undefined
        }
    }
    //axios call
    componentDidMount() {
        //console.log('Constructor'+' Component did mount')
        axios.get(this.state.api_store.company.viewCompany+this.state.userId)
            .then(value => {
                this.setState({
                    isLoaded: true,
                    company: value.data,
                })
            }).catch(reason => {

        })
    }
    //
    changeHandler = (event,index) => {
        let company = [...this.state.company].filter(value => value.id !== index)
        this.setState({
            company: company
        })
    }
    showCompanyViewModalShow = (index) => {
        let company = [...this.state.company].filter(value => value.id===index)
        this.setState({
            companyViewModalShow: true,
            currentCompany: company[0]
        })
    }
    showCompanyUpdateModalShow = (index) => {
        let company = [...this.state.company].filter(value => value.id===index)
        this.setState({
            companyUpdateModalShow: true,
            currentCompany: company[0]
        })
    }
    showCompanyAddModalShow = () => {
        this.setState({
            companyAddModalShow: true,
        })
    }
    closeCompanyViewModalShow = () => {
        this.setState({
            companyViewModalShow: false
        })
    }
    closeCompanyUpdateModalShow = () => {
        this.setState({
            companyUpdateModalShow: false
        })
    }
    closeCompanyAddModalShow = () => {
        this.setState({
            companyAddModalShow: false
        })
    }

    makeCompanyList = () => {
        let companyList;
        if (this.state.isLoaded === false) {
            companyList = <div>Loading.....</div>;
        } else {
            companyList = this.state.company.map(c => {
                return(
                    <tr key={c.id}>
                        <td>{c.businessName}</td>
                        <td>{c.contactNumber}</td>
                        <td>{c.email}</td>
                        <td>
                            <ButtonGroup aria-label="Actions">
                                <Button variant="secondary" onClick = {() => this.showCompanyViewModalShow(c.id)}>View</Button>
                                <Button variant="secondary"onClick = {() => this.showCompanyUpdateModalShow(c.id)}>Update</Button>
                                <Button variant="danger">Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                )
            })
        }
        return companyList;
    }
    makeCompanyViewModal = () => {
        if(this.state.currentCompany === undefined){
            return <div/>
        }else{
            return <CompanyViewModal show={this.state.companyViewModalShow} company={this.state.currentCompany}  closeHandler={this.closeCompanyViewModalShow} />
        }
    }
    makeCompanyUpdateModal = () => {
        if(this.state.currentCompany === undefined){
            return <div/>
        }else{
            return <CompanyUpdateModal show={this.state.companyUpdateModalShow} company={this.state.currentCompany}  closeHandler={this.closeCompanyUpdateModalShow} />
        }
    }
    makeCompanyAddModal = () => {
            return <CompanyAddModal show = {this.state.companyAddModalShow} closeHandler={this.closeCompanyAddModalShow}/>
    }


    render() {
        let companyList = this.makeCompanyList();
        let companyViewModal = this.makeCompanyViewModal();
        let companyUpdateModal = this.makeCompanyUpdateModal();
        let companyAddModal = this.makeCompanyAddModal();
        return(
            <div>
                <Container style={{ marginTop: "10px",}}>
                            <Card>
                                <Card.Header>
                                    <h3>
                                        Company Details
                                        <Button onClick={this.showCompanyAddModalShow} style={{float : "right"}}>Add</Button>
                                    </h3>
                                </Card.Header>
                                <Card.Body>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>Business Name</th>
                                            <th>Contact Number</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {companyList}
                                        </tbody>
                                    </Table>

                                </Card.Body>
                            </Card>
                    {companyViewModal}
                    {companyUpdateModal}
                    {companyAddModal}
                </Container>
            </div>
        )
    }


}
export default Company