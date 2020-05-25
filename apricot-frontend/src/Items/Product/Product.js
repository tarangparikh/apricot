import React,{Component} from "react";
import {Button, Card, Container, Table} from "react-bootstrap";
class Product extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Container style={{ marginTop: "10px",}}>
                    <Card>
                        <Card.Header>
                            <h3>
                                Product Details
                                <Button style={{float : "right"}}>Add</Button>
                            </h3>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive>
                                <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Contact Number</th>
                                    <th>Email</th>
                                    <th>Selected</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </Table>

                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}
export default Product