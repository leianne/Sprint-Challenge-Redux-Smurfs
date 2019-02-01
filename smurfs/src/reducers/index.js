/*
  Be sure to import in all of the action types from `../actions`
*/
import { 
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE 
}
  from '../actions'
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  isFetchingSmurfs: false,
  error: ''
}

const rootReducer = (state=initialState, action) => {
  switch(action.type){
    case FETCH_SMURFS_START: 
      return {
        ...state,
        isFetchingSmurfs: true,
        error: ''
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingSmurfs: false,
        error: ''
      }
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        isFetchingSmurfs:false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
