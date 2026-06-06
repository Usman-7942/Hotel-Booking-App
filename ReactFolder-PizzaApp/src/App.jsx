import {Routes, Route} from "react-router-dom"
import Navbar from "./assets/Components/Navbar/Navbar"
import HeroSection from "./assets/Components/HeroSection/HeroSection"
import PizzasCards from './assets/Components/PizzasCards/PizzasCards'
import Banner from './assets/Components/Banner/Banner'
import ChosingSection from './assets/Components/ChosingSection/ChosingSection'
import CategoriesFilter from './assets/Components/CategoriesFilter/CategoriesFilter'
import MostPopular from './assets/Components/MostPopular/MostPopular'
import BuildPizza from './assets/Components/BuildPizza/BuildPizza'
import CustomerSays from './assets/Components/CustomerSays/CustomerSays'
import OrderSection from './assets/Components/OrderSection/OrderSection'
import Footer from './assets/Components/Footer/Footer'
import Menu from "./assets/Pages/Menu/Menu"
import Deals from "./assets/Pages/Deals/Deals"
import Orders from "./assets/Pages/Orders/Orders"
import About from "./assets/Pages/About/About"
import Contact from "./assets/Pages/Contact/Contact"
import Search from "./assets/Pages/Search/Search"
import Cart from "./assets/Pages/Cart/Cart"
import Login from "./assets/Pages/Login/Login"
import Signup from "./assets/Pages/SignUp/SignUp"
import ProtectedRoute from "./assets/Pages/ProtectedRoute/ProtectedRoute";
import './App.css'


function HomePage(){
  return(
        <div>
          <Navbar/>
          <HeroSection/>
          <PizzasCards/>
          <Banner/>
          <ChosingSection/>
          <CategoriesFilter/>
          <MostPopular/>
          <BuildPizza/>
          <CustomerSays/>
          <OrderSection/>
          <Footer/>
        </div>
  );
}





function App() {

  return (
      <Routes>

  {/* PUBLIC */}
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>

  {/* PROTECTED */}
  <Route path="/" element={
    <ProtectedRoute><HomePage/></ProtectedRoute>
  }/>

  <Route path="/menu" element={
    <ProtectedRoute><Menu/></ProtectedRoute>
  }/>

  <Route path="/deals" element={
    <ProtectedRoute><Deals/></ProtectedRoute>
  }/>

  <Route path="/orders" element={
    <ProtectedRoute><Orders/></ProtectedRoute>
  }/>

  <Route path="/about" element={
    <ProtectedRoute><About/></ProtectedRoute>
  }/>

  <Route path="/contact" element={
    <ProtectedRoute><Contact/></ProtectedRoute>
  }/>

  <Route path="/search" element={
    <ProtectedRoute><Search/></ProtectedRoute>
  }/>

  <Route path="/cart" element={
    <ProtectedRoute><Cart/></ProtectedRoute>
  }/>

      </Routes>
  )
}

export default App
