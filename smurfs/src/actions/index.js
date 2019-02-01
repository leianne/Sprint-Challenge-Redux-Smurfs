import axios from 'axios';
import { basename } from 'upath';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

const baseUrl = 'http://localhost:3333';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
      axios.get(`${baseUrl}/smurfs`)
        .then(res=> dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res}))
        .catch(err => dispatch({ type: FETCH_SMURFS_FAILURE, payload: err}))
}

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START })
    axios.post(`${baseUrl}/smurfs`, smurf)
      .then(res => dispatch({ type: ADD_SMURF_SUCCESS, payload: res}))
      .catch(err => dispatch({ type: ADD_SMURF_FAILURE, payload: err}))
}
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
