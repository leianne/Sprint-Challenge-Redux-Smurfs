import React from 'react';

const SmurfForm = props => {
    return (
        <form onSubmit={e => props.addSmurf(e)}>
            <input type='text' name='name' value={props.smurf.name} placeholder='Name' onChange={props.handleChanges} />
            <input type='number' name='age' value={props.smurf.age} placeholder='Age' onChange={props.handleChanges} />
            <input type='text' name='height' value={props.smurf.height} placeholder='Height' onChange={props.handleChanges} />
            <button>Add Smurf</button>
        </form>
    )
}

export default SmurfForm;