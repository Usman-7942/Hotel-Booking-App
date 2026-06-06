import { useState } from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import HeroSection from './assets/Components/HeroSection/HeroSection'
import WeatherDetails from './assets/Components/WeatherDetails/WeatherDetails'
import Forecast from './assets/Components/ForecastSection/ForecastSection'
import PopularCities from './assets/Components/PopularCities/PopularCities'
import WeatherSection from './assets/Components/WeatherSection/WeatherSection'
import FavouriteSection from './assets/Components/FavouriteSection/FavouriteSection'
import Footer from './assets/Components/Footer/Footer'
import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <WeatherDetails/>
      <Forecast/>
      <PopularCities/>
      <WeatherSection/>
      <FavouriteSection/>
      <Footer/>
    </div>
  )
}

export default App
