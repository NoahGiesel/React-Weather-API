import React from "react"; 

const Weather = (props) => (
    <div className="result__container" >       
{ props.city &&  props.country && <p className="resultText"> Location :  { props.city}, { props.country} </p>}
        { props.temperature &&<p className="resultText"> Temperature : { props.temperature}</p> }
        { props.humidity &&<p className="resultText"> Humidity : { props.humidity}</p> }
        { props.description &&<p className="resultText"> Descriptions : { props.description}</p> }
        { props.error &&<p className="resultText"> { props.error}</p> }
    </div>
)


export default Weather ;