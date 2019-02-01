import React from 'react';

const SmurfForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type='text' value={this.props.name} placeholder='Name' onChange={props.handleChanges} />
            <input type='number' value={this.props.age} placeholder='Age' onChange={props.handleChanges} />
            <input type='text' value={this.props.height} placeholder='Height' onChange={props.handleChanges} />
            <button>Add Smurf</button>
        </form>
    )
}

export default SmurfForm;