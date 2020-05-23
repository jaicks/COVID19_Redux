import React, { Component } from 'react';
import { covidlist } from '../actions/covidAction';
import { connect } from 'react-redux';
import Statelist from './Statelist'
class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props.list)
        this.props.covidlist();

    }
    render() {
        console.log(this.props.list.statewise)
        const { list } = this.props;

        return (
            <div className="bg-white text-dark">
                <div class="row border " >

                    <div className="col-sm-2 alert alert-primary " >Index</div>
                    <div className="col-sm-2 alert alert-secondary">state</div>
                    <div className="col-sm-2 alert alert-dark">Confirmed</div>
                    <div className="col-sm-2 alert alert-warning">Active</div>
                    <div className="col-sm-2 alert alert-success">Recovered</div>
                    <div className="col-sm-2  alert alert-danger">Death</div>
                </div>
                <div>
                    {
                        list && list.statewise && list.statewise.length > 0 && 
                        list.statewise.map((data,index) => {
                            console.log(data)
                            return(
                                
                                <Statelist

                                Index={index +1 }
                                state={data.state}
                                Confirmed={data.confirmed}
                                Active={data.active}
                                Recovered={data.recovered}
                                Death={data.deaths}
                            />

                            )
                        })
                         
                    }
                  
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.list
});

export default connect(mapStateToProps, { covidlist })(Landing);
