import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions'

import SmurfList from '../components/SmurfList';

class SmurfListView extends Component {
    

    componentDidMount() {
        this.props.getSmurfs()
    }

    getSmurf = id => {
        console.log(this.props)
        this.props.history.push(`/smurfs/${id}`)
    }
    render() {
        return(
            <SmurfList smurfs={this.props.smurfs} getSmurf={this.getSmurf} isFetchingSmurfs={this.props.isFetchingSmurfs}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs.data,
        isFetchingSmurfs: state.isFetchingSmurfs
    }
}
export default connect(mapStateToProps, {getSmurfs})(SmurfListView);