import React, { Component } from 'react';


class Statelist extends Component {
    render() {
        return (
            <div class="row border" >

                <div className="col-sm-2 alert alert-primary">{this.props.Index}</div>
                <div className="col-sm-2 alert alert-secondary">{this.props.state}</div>
                <div className="col-sm-2 alert alert-dark">{this.props.Confirmed}</div>
                <div className="col-sm-2 alert alert-warning">{this.props.Active}</div>
                <div className="col-sm-2 alert alert-success">{this.props.Recovered}</div>
                <div className="col-sm-2 alert alert-danger">{this.props.Death}</div>
            </div>
        )
    }
}


export default Statelist;

