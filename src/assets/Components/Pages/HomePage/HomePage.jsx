import React from 'react'
import styles from "./HomePage.module.css"
import Navbar from '../../Navbar/Navbar'
import HeroSection from '../../HeroSection/HeroSection'
import FeatureSection from '../../FeatureSection/FeatureSection'
import DetailsSection from '../../DetailsSection/DetailsSection'
import Destination from '../../Destination/destination'
import Footer from "../../Footer/Footer"
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
