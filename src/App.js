import React, { Component } from 'react';
import './App.css';
import { WeatherCardContainer } from './container/WeatherCardContainer';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <WeatherCardContainer/>
          <Footer/>
      </div>
    );
  }
}

export default App;
