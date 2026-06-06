import React from 'react'
import styles from "./HomePage.module.css"
import Navbar from '../../Components/Navbar/Navbar'
import HeroSection from '../../Components/HeroSection/HeroSection'
import FeatureSection from '../../Components/FeatureSection/FeatureSection'
import DetailsSection from '../../Components/DetailsSection/DetailsSection'
import Destination from '../../Components/Destination/destination'
import Footer from "../../Components/Footer/Footer"
const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <Destination/>
      <DetailsSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
