 import React from "react" ; 
 import Title from "./components/Title"
 import Form from "./components/Form"
 import Weather from "./components/Weather"



 const API_KEY = "bc6e8aefa5bbc04f7571cfc25614d6f6" ;


 class App extends React.Component {

  state = { 
    temperature : "",
    city : "",
    country : "",
    humidity : "",
    description : "",
    error : ""
  }

  getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
    if(city && country ) {
      this.setState({
        temperature : data.main.temp, 
        city : data.name, 
        country : data.sys.country, 
        humidity : data.main.humidity,
        description : data.weather[0].description,
     })
    }else {
      this.setState({
        temperature : "" , 
        city : "" , 
        country :  "", 
        humidity : "",
        description : "",
        error: "please enter values ! "
     })
    }
 
  }

  render() { 
    return ( 
      <div>
        
        <div className="contain__home">  

         <Title />
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        /> 
        </div>
      </div>
    );
  }
 }
 
 export default App;