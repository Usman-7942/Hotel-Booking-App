import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import { themedatacontext } from '../Context/ThemeContext';


const Navbar = (props) => {

  let [theme] = useContext(themedatacontext);

  return (
    <div className={theme}>
      <h2>Website</h2>
      <Navbar2 them={props.theme}/>
    </div>
  )
}

export default Navbar
