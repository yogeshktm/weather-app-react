import React from 'react';
import axios from 'axios';
import { WeatherCard } from '../../components/WeatherCard';
import { SearchBox } from '../../components/SearchBox';


export class WeatherCardContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      weatherCity : "",
      temperature: "",
      temperatureMin:"",
      temperatureMax : "",
      weather : "",
      searchKey : "",
      notFound : false,
      icon:"",
      country : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    // const cityId = 1264527;
    const cityName = "Chennai";
    const apiKey = "199f16089a6c8e553e0ba2ef4dbd67d3";
    //let url = "http://api.openweathermap.org/data/2.5/forecast?id=";
    //let url = "http://api.openweathermap.org/data/2.5/weather?id=";
    let url = "http://api.openweathermap.org/data/2.5/weather?q="
    let units = "metric";
    const endPoint = url + cityName + '&APPID=' + apiKey + '&units=' + units;
    axios.get(endPoint)
    .then((response) => {
      console.log(response)
      const iconUrl = "http://openweathermap.org/img/w/" + response.data.weather[0].icon + '.png';
      const countryImgUrl = "https://www.countryflags.io/" + response.data.sys.country + "/flat/24.png";
      this.setState({
        notFound : false,
        weatherCity : response.data.name,
        temperature : response.data.main.temp,
        temperatureMin : response.data.main.temp_min,
        temperatureMax : response.data.main.temp_max,
        weather : response.data.weather[0].main,
        country: response.data.sys.country,
        icon : iconUrl,
        countryImage : countryImgUrl
      })
    })
   .catch((error)=>{
      console.log(error);
   });
  }
  componentDidUpdate(){
    
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    const cityName = this.state.searchKey;
    const apiKey = "199f16089a6c8e553e0ba2ef4dbd67d3";
    //let url = "http://api.openweathermap.org/data/2.5/forecast?id=";
    //let url = "http://api.openweathermap.org/data/2.5/weather?id=";
    let url = "http://api.openweathermap.org/data/2.5/weather?q="
    let units = "metric";
    const endPoint = url + cityName + '&APPID=' + apiKey + '&units=' + units;
    console.log(endPoint);
    axios.get(endPoint)
    .then((response) => {
        const iconUrl = "http://openweathermap.org/img/w/" + response.data.weather[0].icon + '.png';
        const countryImgUrl = "https://www.countryflags.io/" + response.data.sys.country + "/flat/24.png";
        this.setState({
          notFound : false,
          weatherCity : response.data.name,
          temperature : response.data.main.temp,
          temperatureMin : response.data.main.temp_min,
          temperatureMax : response.data.main.temp_max,
          weather : response.data.weather[0].main,
          country: response.data.sys.country,
          countryImage : countryImgUrl,
          icon : iconUrl,
        })
    })
   .catch((error)=>{
      this.setState({
        notFound : true
      })
   });
  }
  handleChange(e){
    this.setState({searchKey:e.target.value})
  }
  render(){
    return(
      <>
        <SearchBox handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        {!this.state.notFound ?  
          <WeatherCard 
            city={this.state.weatherCity} 
            temperature={this.state.temperature} 
            temperatureMin = {this.state.temperatureMin} 
            temperatureMax={this.state.temperatureMax} 
            weather={this.state.weather}
            icon={this.state.icon}
            country={this.state.country}
            countryImage={this.state.countryImage}/>
            : <p className={!this.state.notfound ? "not-found-msg shake" : "not-found-msg"}>City not found</p>
          }
      </>
    )
  }
}