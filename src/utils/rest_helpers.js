const API_KEY = "8d4694cc34575bea3b459fa3b8575be0"
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${ API_KEY }`

export const Helpers = {
 getWeatherData: (city) =>{
  const url = `${ ROOT_URL }&q=${ city },us`
  return fetch(url).then(response => response.json()).then(data => data).catch(error => console.log(error))
 }
}
export default Helpers
