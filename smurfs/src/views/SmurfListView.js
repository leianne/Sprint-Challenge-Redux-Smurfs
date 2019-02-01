import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions'

class SmurfListView extends Component {
    state = {
        smurfs: []
    }

    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        return(
            <h1>Connected</h1>
        )
    }
}


export default connect(null, {getSmurfs})(SmurfListView);