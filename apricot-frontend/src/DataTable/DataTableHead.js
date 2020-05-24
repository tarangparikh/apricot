import React from "react";
const DataTableHead = (props) => {
    const headers = props.data.map(v => {
        return(
            <th>
                {v}
            </th>
        )
    })
    return(
        <thead>
            <tr>
                {headers}
            </tr>
        </thead>
    )
}
export default DataTableHead