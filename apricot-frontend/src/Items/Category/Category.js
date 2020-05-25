import React,{Component} from "react";
import {Button, ButtonGroup, Card, Container, Table} from "react-bootstrap";
import axios from 'axios'
import Constants from "../../Constant/Constants";
import CompanyAddModal from "../../Company/CompanyAddModal";
import CategoryAddModal from "./CategoryAddModal";
import CategoryUpdateModal from "./CategoryUpdateModal";
class Category extends Component{
    constructor(props) {
        super(props);
        this.state = {
            api_store: Constants(),
            company: this.props.company,
            category:[],
            isLoaded: false,
            currentCategory: undefined
        }
        this.formData = [
            {name: 'Category Name',access: 'categoryName',pattern:"(.)*"}
        ]
    }

    componentDidMount() {
        axios.get(this.state.api_store.category.viewCategory+this.state.company.id)
            .then(value => {
                this.setState({
                    isLoaded: true,
                    category: value.data
                })
            }).catch(reason => {

        })
    }
    updateHandler = (category) => {
        //alert(JSON.stringify(category))
        axios.post(this.state.api_store.category.postCategory,category)
            .then(value => {
                let updated_category = value.data;
                let clone_category = [...this.state.category].map(obj => {
                    return updated_category.id === obj.id ? updated_category : obj;
                });
                this.setState({
                    category: clone_category
                })
                alert('Category Updated')
            }).catch(reason => {
                alert(JSON.stringify(reason))
        })

    }
    addHandler = (category) => {
        //alert(JSON.stringify(category))
        axios.post(this.state.api_store.category.postCategory,category)
            .then(value => {
                let category_clone = [...this.state.category];
                category_clone.push(value.data);
                this.setState({
                    category: category_clone
                })
                alert('Category Added.')
            }).catch(reason => {
                alert(JSON.stringify(reason))
        })
    }
    showCategoryAddModal = () => {
        this.setState({
            categoryAddModalShow: true
        })
    }

    showCategoryUpdateModal = (event,index) => {
        let category = [...this.state.category]
            .filter(value => value.id === index)
        this.setState({
            categoryUpdateModalShow: true,
            currentCategory: category[0]
        })
    }
    closeCategoryAddModal = () => {
        this.setState({
            categoryAddModalShow: false
        })
    }

    closeCategoryUpdateModal = () => {
        this.setState({
            categoryUpdateModalShow: false
        })
    }
    makeCategoryList = () => {
        let categoryList;
        if(this.state.isLoaded === false){
            categoryList = <div>Loading....</div>
        }else{
            categoryList = this.state.category.map(category => {
                return(
                    <tr key={category.id}>
                        <td>{category.categoryName}</td>
                        <td>
                            <ButtonGroup aria-label="Actions">
                                <Button
                                    variant="secondary"
                                    onClick = {(event) => this.showCategoryUpdateModal(event,category.id)}>
                                    Update
                                </Button>
                                <Button variant="danger">Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                )
            })
        }
        return categoryList;
    }
    makeCategoryAddModal = () =>{
        return <CategoryAddModal
            form_data = {this.formData}
            show = {this.state.categoryAddModalShow}
            company={this.state.company}
            addHandler={this.addHandler}
            closeHandler={this.closeCategoryAddModal}/>
    }
    makeCategoryUpdateModal = () => {
       if(this.state.currentCategory === undefined) {
           return <div/>
       }
       else{
           return <CategoryUpdateModal
               form_data = {this.formData}
               show = {this.state.categoryUpdateModalShow}
               category = {this.state.currentCategory}
               updateHandler = {this.updateHandler}
               closeHandler = {this.closeCategoryUpdateModal}
           />
       }
    }
    render() {
        let categoryList = this.makeCategoryList();
        let categoryAddModal = this.makeCategoryAddModal()
        let categoryUpdateModal = this.makeCategoryUpdateModal();
        return(
            <div>
                <Container style={{ marginTop: "10px",}}>
                    <Card>
                        <Card.Header>
                            <h3>
                                Category Details
                                <Button onClick = {this.showCategoryAddModal} style={{float : "right"}}>Add</Button>
                            </h3>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive>
                                <thead>
                                <tr>
                                    <th>Category Name</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {categoryList}
                                </tbody>
                            </Table>

                        </Card.Body>
                    </Card>
                </Container>
                {categoryAddModal}
                {categoryUpdateModal}
            </div>
        )
    }
}
export default Category