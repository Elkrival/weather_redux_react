import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){
 switch (action.type) {
  case FETCH_WEATHER:
   return [ action.payload, ...state ]
  default:
   return state
 }
}
/*
   Don't modify the state direction in our reducer we never want to mutate the state, when we are in a reducer we want to return a new instance of state. Therefore we will use the concat method because it does not mutate the current array instead it returns a new version of the array a new instance of state.

  We will be using the rest operator to make the new version of the array.

*/
