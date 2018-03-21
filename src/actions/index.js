import Helpers from '../utils/rest_helpers'

export const FETCH_WEATHER = `FETCH_WEATHER`

// We use export const so that we can use this variable with our reducers, this way we do not have to rewrite our variables or strings in multiple files.

export function fetchWeather(city){
 const request = Helpers.getWeatherData(city)
 return{
  type: FETCH_WEATHER,
  payload: request
 }
}



/*

       ----------Middleware Redux ------------
Redux middleware is triggered by an action, depending on the type payload etc the middleware chooses what to do with the action. Start stop log modify, before it reaches our reducers to update our state.

  Our Action creators is a function that always returns an object with a type and payload

*/
