import { combineReducers } from 'redux'
import weatherReducer from './reducer_weather'

const rootReducers = combineReducers({
 weather: weatherReducer
})
export default rootReducers
