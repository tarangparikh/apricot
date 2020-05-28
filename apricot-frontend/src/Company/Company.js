import React,{Component} from "react";
import {Badge, Button, ButtonGroup, Card, Container, Table} from "react-bootstrap";
import axios from 'axios';
import Cookies from 'js-cookie'
import Constants from "../Constant/Constants";
import CompanyViewModal from "./CompanyViewModal";
import CompanyUpdateModal from "./CompanyUpdateModal";
import CompanyAddModal from "./CompanyAddModal";




class Company extends Component{

    //props initialize
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            api_store : Constants(),
            isLoaded: false,
            checkedCompany: undefined,
            company:[],
            currentCompany: undefined
        }
    }
    //axios call
    componentDidMount() {
        axios.get(this.state.api_store.company.viewCompany+this.state.user.id)
                .then(value => {
                    this.setState({
                        isLoaded: true,
                        company: value.data,
                    })
                    if(Cookies.get('apricot_company') === undefined){
                        if(value.data.length > 0){
                            Cookies.set('apricot_company',JSON.stringify(value.data[0]))
                            this.setState({
                                checkedCompany: value.data[0].id
                            })
                        }
                    }else{
                        const cookie_company = JSON.parse(Cookies.get('apricot_company'))
                        this.setState({
                            checkedCompany: cookie_company.id
                        })
                    }
                }).catch(reason => {

                })
    }
    selectHandler = (event,index) => {
        Cookies.remove('apricot_company');
        let company_clone = [...this.state.company].filter(value => value.id === index)[0];
        Cookies.set('apricot_company',JSON.stringify(company_clone));
        this.setState({
            checkedCompany: index
        })
    }
    deleteHandler = (event,index) => {
        axios.delete(this.state.api_store.company.deleteCompany+index)
            .then(r =>{
                Cookies.set('apricot_company','',{expires : -1})
                let company_clone = [...this.state.company].filter(value => value.id !== index)
                this.setState({
                    company: company_clone,
                    companyChecked: undefined
                })
            }).catch(reason => {
                alert(JSON.stringify(reason))
            })
    }
    updateHandler = (company) => {
        alert(JSON.stringify(company))
        axios.post(this.state.api_store.company.postCompany,company)
            .then(response => {
                let updated_company = response.data;
                let company_clone = [...this.state.company].map(obj => {
                    return updated_company.id === obj.id ? company : obj;
                });
                this.setState({
                    company: company_clone
                })
                alert('added')
            }).catch(reason => {
                alert(JSON.stringify(reason))
            })
    }
    addHandler = (company) => {
        axios.post(this.state.api_store.company.postCompany+this.state.user.id,company)
            .then(response => {
                let company_clone = [...this.state.company];
                company_clone.push(response.data);
                this.setState({
                    company: company_clone
                })
                alert('Company Added')
            }).catch(reason => {
                alert(JSON.stringify(reason))
            })
    }
    showCompanyViewModal = (index) => {
        let company = [...this.state.company].filter(value => value.id===index)
        this.setState({
            companyViewModalShow: true,
            currentCompany: company[0]
        })
    }
    showCompanyUpdateModal = (index) => {
        let company = [...this.state.company].filter(value => value.id===index)
        this.setState({
            companyUpdateModalShow: true,
            currentCompany: company[0]
        })
    }
    showCompanyAddModal = () => {
        this.setState({
            companyAddModalShow: true,
        })
    }
    closeCompanyViewModal= () => {
        this.setState({
            companyViewModalShow: false
        })
    }
    closeCompanyUpdateModal= () => {
        this.setState({
            companyUpdateModalShow: false
        })
    }
    closeCompanyAddModal = () => {
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
                        <td>{
                            this.state.checkedCompany === c.id? <input type="radio" checked name="optradio" onChange={(event)=>this.selectHandler(event,c.id)}/>
                            : <input type="radio" name="optradio" onChange={(event)=>this.selectHandler(event,c.id)}/>
                        }
                        </td>
                        <td>
                            <ButtonGroup aria-label="Actions">
                                <Button variant="secondary" onClick = {() => this.showCompanyViewModal(c.id)}>View</Button>
                                <Button variant="secondary"onClick = {() => this.showCompanyUpdateModal(c.id)}>Update</Button>
                                <Button variant="danger" onClick = {(event) => this.deleteHandler(event,c.id)}>Delete</Button>
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
            return <CompanyViewModal show={this.state.companyViewModalShow} company={this.state.currentCompany}  closeHandler={this.closeCompanyViewModal} />
        }
    }
    makeCompanyUpdateModal = () => {
        if(this.state.currentCompany === undefined){
            return <div/>
        }else{
            return <CompanyUpdateModal
                show={this.state.companyUpdateModalShow}
                company={this.state.currentCompany}
                updateHandler={this.updateHandler}
                closeHandler={this.closeCompanyUpdateModal} />
        }
    }
    makeCompanyAddModal = () => {
            return <CompanyAddModal
                user={this.state.user}
                show = {this.state.companyAddModalShow}
                addHandler={this.addHandler}
                closeHandler={this.closeCompanyAddModal}/>
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
                                        <Button onClick={this.showCompanyAddModal} style={{float : "right"}}>Add</Button>
                                    </h3>
                                </Card.Header>
                                <Card.Body>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>Business Name</th>
                                            <th>Contact Number</th>
                                            <th>Email</th>
                                            <th>Selected</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {companyList}
                                        </tbody>
                                    </Table>
                                    <Button href="/dashboard">Proceed to Dashboard</Button>
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