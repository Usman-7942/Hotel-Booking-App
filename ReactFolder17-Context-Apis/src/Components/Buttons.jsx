import React, { useContext } from 'react'
import { themedatacontext } from '../Context/ThemeContext';

const Buttons = () => {

    let [theme, settheme] = useContext(themedatacontext);

    function btnclicked(){
        settheme("dark");
    }

  return (
    <div>
      <button onClick={btnclicked}>Change Theme</button>
    </div>
  )
}

export default Buttons
