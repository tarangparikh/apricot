import React from "react";
import DataTableHead from "./DataTableHead";
import {Table} from "react-bootstrap";
const DataTable = (props) => {
    if(props.data.length === 0){
        return (
            <div>
            </div>
        )
    }
    let header = []
    for(let k in props.data[0]){
        header.push(k)
    }
    return(
        <div>
            <Table responsive>
                <DataTableHead data={header} key={1}/>
            </Table>
        </div>
    )
}
export default DataTable