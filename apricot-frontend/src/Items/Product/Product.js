import React,{Component} from "react";
import axios from 'axios'
import {Button, ButtonGroup, Card, Container, Table} from "react-bootstrap";
import Constants from "../../Constant/Constants";
import CategoryUpdateModal from "../Category/CategoryUpdateModal";
import ProductViewModal from "./ProductViewModal";
import ProductUpdateModal from "./ProductUpdateModal";
import ProductAddModal from "./ProductAddModal";
class Product extends Component{
    constructor(props) {
        super(props);
        this.state={
            product: [],
            category:[],
            company : this.props.company,
            isLoaded : false,
            currentProduct: undefined,
            api_store: Constants()
        }
        this.formData = {
            details:[
                {name:"Product Name",access:["productName"],pattern:"(.)*",parse:(v) => v.toString()},
                {name:"Item Code",access:["itemCode"],pattern:"(.)*",parse:(v) => v.toString()},
                {name:"Hsn Sac Code",access:["hsnSacCode"],pattern:"(.)*",parse:(v) => v.toString()},
            ],
            category:[
                {name:"Category Name",access:["category","categoryName"],pattern:"(.)*",parse:(v) => v.toString()}
            ],
            productPrice:[
                {name:"Sale Price",access:["productPrice","salePrice"],pattern:"(.)*",parse:(v) => parseInt(v)},
                {name:"Purchase Price",access:["productPrice","purchasePrice"],pattern:"(.)*",parse:(v) => parseInt(v)},
                {name:"Additional Cess",access:["productPrice","additionalCess"],pattern:"(.)*",parse:(v) => parseInt(v)},
                {name:"Sales Tax Included",access:["productPrice","saleTaxIncluded"],pattern:"[0-1]",parse:(v) => parseInt(v)},
                {name:"Purchase Tax Included",access:["productPrice","purchaseTaxIncluded"],pattern:"[0-1]",parse:(v) => parseInt(v)},
                {name:"Gst Type",access: ["productPrice","gst","gstType"],pattern: "(.)*",parse:(v) => v.toString()},
                {name:"Gst Rate",access: ["productPrice","gst","gstRate"],pattern: "(.)*",parse:(v) => parseInt(v)},
            ],
        }
    }

    componentDidMount() {
        //alert(JSON.stringify(this.state.company))
        axios.get(this.state.api_store.product.viewProduct+this.state.company.id)
            .then(value => {
                axios.get(this.state.api_store.category.viewCategory+this.state.company.id).then(value1 => {
                    this.setState({
                        isLoaded: true,
                        product: value.data,
                        category: value1.data
                    })
                })
            }).catch(reason => {
                alert('Unable to get products : '+JSON.stringify(reason));
            })
    }
    deleteHandler = (event,index) => {
        axios.delete(this.state.api_store.product.deleteProduct+index)
            .then(r => {
                let clone_product = [...this.state.product].filter(value => value.id !== index)
                this.setState({
                    product: clone_product
                })
            }).catch(reason => {
            alert(JSON.stringify(reason))
        })
    }
    addHandler = (product) => {
        axios.post(this.state.api_store.product.postProduct,product)
            .then(value => {
                let added_product = value.data;
                let clone_product = [...this.state.product];
                clone_product.push(added_product)
                this.setState({
                    product: clone_product
                })
                alert('product added')
            }).catch(reason => {
            alert(JSON.stringify(reason))
        })
    }
    updateHandler = (product) => {
        axios.post(this.state.api_store.product.postProduct,product)
            .then(value => {
                let updated_product = value.data;
                let clone_product = [...this.state.product].map(obj => {
                    return updated_product.id === obj.id ? updated_product : obj;
                });
                this.setState({
                    product: clone_product
                })
                alert('product updated')
            }).catch(reason => {
                alert(JSON.stringify(reason))
        })
    }
    showViewModal = (event,index) => {
        let product = [...this.state.product].filter(value => value.id === index);
        this.setState({
            viewModalShow: true,
            currentProduct: product[0]
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
    showUpdateModal = (event,index) => {
        let product = [...this.state.product].filter(value => value.id === index);
        this.setState({
            updateModalShow: true,
            currentProduct: product[0]
        })
    }
    closeUpdateModal = () => {
        this.setState({
            updateModalShow: false

        })
    }
    make_product_table = () => {
        if(this.state.isLoaded === false){
            return <div>Loading...</div>
        }else{
            let product_rows = this.state.product.map(product => {
                return(
                    <tr key = {product.id}>
                        <td>{product.productName}</td>
                        <td>{product.itemCode}</td>
                        <td>{product.category.categoryName}</td>
                        <td>
                            <ButtonGroup aria-label="Actions">
                                <Button
                                    variant="secondary"
                                    onClick = {(event) => this.showViewModal(event,product.id)}
                                >View</Button>
                                <Button
                                    variant="secondary"
                                    onClick = {(event) => this.showUpdateModal(event,product.id)}
                                >Update</Button>
                                <Button
                                    variant="danger"
                                    onClick = {(event) => this.deleteHandler(event,product.id)}
                                >Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>

                )
            })
            return (
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Item Code</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {product_rows}
                    </tbody>
                </Table>
            )
        }
    }
    makeViewModal() {
        if(this.state.currentProduct === undefined) {
            return <div/>
        }
        else{
            return <ProductViewModal
                show = {this.state.viewModalShow}
                product = {this.state.currentProduct}
                formData = {this.formData}
                closeHandler = {this.closeViewModal}
            />
        }
    }
    makeUpdateModal = () => {
        if(this.state.currentProduct === undefined){
            return <div/>
        }else{
            //alert(JSON.stringify(this.state.category))
            return <ProductUpdateModal
                show = {this.state.updateModalShow}
                product = {this.state.currentProduct}
                category = {this.state.category}
                formData = {this.formData}
                updateHandler = {this.updateHandler}
                closeHandler = {this.closeUpdateModal}
            />
        }
    }
    makeAddModal = () => {
        if(this.state.isLoaded === false) return <div/>
        return <ProductAddModal
            show = {this.state.addModalShow}
            company = {this.state.company}
            category = {this.state.category}
            formData = {this.formData}
            addHandler = {this.addHandler}
            closeHandler = {this.closeAddModal}
        />
    }
    render() {
        let productTable = this.make_product_table();
        let viewModal = this.makeViewModal();
        let updateModal = this.makeUpdateModal();
        let addModal = this.makeAddModal();
        return(
            <div>
                <Container style={{ marginTop: "10px",}}>
                    <Card>
                        <Card.Header>
                            <h3>
                                Product Details
                                <Button onClick={this.showAddModal} style={{float : "right"}}>Add</Button>
                            </h3>
                        </Card.Header>
                        <Card.Body>
                            {productTable}
                        </Card.Body>
                    </Card>
                </Container>
                {viewModal}
                {updateModal}
                {addModal}
            </div>
        )
    }
}
export default Product