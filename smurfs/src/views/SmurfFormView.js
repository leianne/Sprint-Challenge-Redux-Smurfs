import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions'
import SmurfForm from '../components/SmurfForm';

const clearedSmurf = {
    name: '',
    age: '',
    height: ''
}
class SmurfFormView extends Component {
    state = {
        smurf: clearedSmurf
    }

    handleChanges = e => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value
            }
        })
    }
    
    addSmurf = e => {
        e.preventDefault()
        this.props.addSmurf(this.state.smurf)
        this.setState({
            smurf: clearedSmurf
        })
    }

    render() {
        console.log(this.state)
        return (
            <SmurfForm handleChanges={this.handleChanges} addSmurf={this.addSmurf} smurf={this.state.smurf} />
        )
    }
}

export default connect(null, { addSmurf })(SmurfFormView);