import React, { Component } from 'react';



class DashBoard extends Component{
    selectHandler = (e) => {
        alert(e)
    }

    render() {
        return(
            <div>
               DashBoard
            </div>
        )
    }
}

export default DashBoard