import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function average(data){
 const sum =  data.reduce((a,b) => a + b ) / data.length
 const roundedAverage = Math.round( sum )
 return roundedAverage
}
export default (props) =>{
  return(
   <div>
    <Sparklines height={ 120 } width={ 280 } data={ props.data }>
     <SparklinesLine color={ props.color }/>
     <SparklinesReferenceLine type="avg"/>
    </Sparklines>
   <div>{ average(props.data) } { props.units }</div>
   </div>
  )
}
