import React from 'react';

export class WeatherCard extends React.Component{
  render(){
    const {city,temperature,temperatureMin,temperatureMax,weather,icon,country,countryImage} = this.props;
    return(
      <div className="weather-card">
        <h3><img className="flag" src={countryImage} alt={country}/>{city} - {country}</h3>
        <p>Temp:{temperature}<sup>&deg;c</sup> Min:{temperatureMin}<sup>&deg;c</sup> Max:{temperatureMax}<sup>&deg;c</sup></p>
        <p className="weather-info"><img className="weather-icon" src={icon} alt={weather}/>{weather}</p>
      </div>
    )
  }
}