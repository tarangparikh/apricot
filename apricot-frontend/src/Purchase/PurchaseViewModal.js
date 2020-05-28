import {Button, Modal, Table} from "react-bootstrap";
import React, {useState} from "react";
import printValue from "yup/lib/util/printValue";

const PurchaseViewModal = (props) => {
    const [purchaseOrder,setPurchaseOrder] = useState(props.purchaseOrder)
    const get_reference = (path) => {
        let ref = purchaseOrder
        for(let i = 0;i<path.length;i++){
            //if(ref === undefined || ref === null) return 'not set'
            ref = ref[path[i]]
        }
        return ref;
    }
    const get_ref = (data,path) => {
        let ref = data
        for(let i = 0;i<path.length;i++){
            if(ref === undefined || ref === null) return 'not set'
            ref = ref[path[i]]
        }
        return ref;
    }
    const cart_item_data = {
        details: [
            {name: "Product Name",access:["item","productName"]},
            {name: "Item Code",access:["item","itemCode"]},
            {name: "Category",access:["item","category","categoryName"]},
            {name: "Quantity",access:["quantity"]},
            {name: "Free Quantity",access:["freeQuantity"]},
            {name: "Rate",access:["rate"]},
            {name: "Additional Cess",access: ["additionalCess"]},
            {name: "Sub Total",access: ["subTotal"]},
            {name: "Discount Rate",access: ["discountRate"]},
            {name: "Discount Amount",access: ["discountAmount"]},
            {name: "Total Amount",access: ["totalAmount"]}
            ]
    }
    const make_sub_Table = (name,schema) => {
        const temp_table = schema.map(value => {
            let type = typeof get_reference(value["access"]);
            let color = "black"
            if(type === 'number'){
                if(get_reference(value["access"]) >= 0) color = "green"
                else color = "red"
            }
            return(
                <tr>
                    <td>
                        {value["name"]}
                    </td>
                    <td style={{color:color}}>{get_reference(value["access"])

                        }
                    </td>
                </tr>
            )
        })
        return(
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th colSpan = "2" >{name}</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {temp_table}
                    </tbody>
                </Table>
            </div>
        )
    }
    const make_item = (cartItem) => {
        const makeData = cart_item_data['details'].map(value => {
            return(
                <tr>
                    <td>{value['name']}</td>
                    <td>{get_ref(cartItem,value['access'])}</td>
                </tr>

            )

        })
        return(
            <Table>
                <thead>
                    <thead>
                        <tr>
                            <th colSpan={"2"}>
                                {cartItem.item.productName}
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                </thead>
                <tbody>
                        {makeData}
                </tbody>
            </Table>
        )
    }
    const make_cart_items = () => {
        let cartItems = props.purchaseOrder.cartItems;
        let cartItems_Row = cartItems.map(cartItem => {
            return(
               make_item(cartItem)
            )
        })
        return(
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th colSpan = "2" >Cart Items</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {cartItems_Row}
                    </tbody>
                </Table>
            </div>
        )
    }
    const make_Table = () => {
        let tables = Object.keys(props.formData).map(value => {
            return make_sub_Table(value.toUpperCase(),props.formData[value]);
        })
        tables.push(make_cart_items())
        return tables
    }
    return(
        <Modal show={props.show} onHide={props.closeHandler} size={"lg"}>
            <Modal.Header closeButton>
                <Modal.Title>Purchase Detailed View</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {make_Table()}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeHandler}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default PurchaseViewModal