import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteSmurf, getSmurfs } from '../actions';
import Smurf from '../components/Smurf';

class SmurfView extends Component {
    componentDidMount() {
        if (!this.props.smurfs) {
            this.props.getSmurfs();
        }
    }

    deleteSmurf = (e, id) => {
        e.preventDefault();
        this.props.deleteSmurf(id)
        this.props.history.push('/')
    }
    render() {
        return (
            <Smurf {...this.props} deleteSmurf={this.deleteSmurf} smurfs={this.props.smurfs}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs.data,
    }
}
export default connect(mapStateToProps, { deleteSmurf, getSmurfs })(SmurfView);