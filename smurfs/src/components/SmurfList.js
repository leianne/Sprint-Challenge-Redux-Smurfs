import React from 'react';

const SmurfList = props => {
    console.log(props.smurfs)
    return(
        <div >
           {props.smurfs && props.smurfs.map(e => (
                <div onClick={() => props.getSmurf(e.id)} key={e.name} >
                    <h2>{e.name}</h2>
                    <p>{e.age}</p>
                    <p>{e.height}</p>
                </div>))}
        </div>
    )
}

export default SmurfList;