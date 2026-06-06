import React, { useContext } from 'react'
import { themedatacontext } from '../Context/ThemeContext'

const Navbar2 = () => {
  
  let [theme, settheme] = useContext(themedatacontext);

  
  return (
    <div className={theme}>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Courses</h4>
        <h4>Products</h4>
        <h4>{theme}</h4>
    </div>
  )
}

export default Navbar2
