import React from "react";

const Smurf = props => {
   if(props.smurfs) {
       const smurf = props.smurfs.find(smurf => `${smurf.id}` === props.match.params.id)
       return(
            <div>
                <h2>Name : {smurf.name}</h2>
                <p>Age : {smurf.age}</p>
                <p>Height: {smurf.height}</p>
                <button onClick={e => props.deleteSmurf(e, smurf.id)}>Delete</button>
            </div>
       ) 
   } else {
       return ( <h1> Loading </h1>)
   }
};

export default Smurf;