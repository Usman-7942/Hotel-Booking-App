import React,{ useState } from 'react'
import { useNavigate } from "react-router-dom"
import styles from "./LoginPage.module.css"
const LoginPage = () => {

    const navigate = useNavigate();

    const [data, setdata] = useState({email: "", password: ""});
    const [error, seterror] = useState({email: null, password: null});



    let handlesubmit = (dets) => {

        const Users = JSON.parse(localStorage.getItem("Users")) || [];

        seterror({email: false, password: false});

        const user = Users.find((user) => user.email === data.email )
        if(!user)
        {
            seterror(({email: true, password: true}))
            return
        }

         if(user.password !== data.password)
        {
            seterror((prev) => ({...prev, password: true}))
            return
        }

       


       
            const current_user = {
                email: data.email,
                password: data.password,
                bookedhotelslist: []
            }
        

        localStorage.setItem("current_user",JSON.stringify(current_user));

        setTimeout(() => {
            navigate("/")
        }, 4000);
    }


  return (
    <div>

      <div className={styles.login_container}>
        <p className={styles.login_heading}>Login</p>

        
        <input className={styles.emailbox} type="text" 
        value={data.email}
        name= "email"
        placeholder="Email" 
        onChange={(dets) => setdata((prev)=>({...prev, email: dets.target.value}))}
        />
       <div className={styles.errormsg_div}>
         {
            error.email && 
            " Enter Correct Email "
        }
       </div>

       
        <input className={styles.passwordbox} type="password" 
        value={data.password}
        name="password"
        placeholder="Enter your Password" 
        onChange={(dets) => setdata((prev)=>({...prev, password: dets.target.value}))}
        />

        <div className={styles.errormsg_div}>
            {
            error.password && 
                " Enter Correct Password "
            
        }


        </div>




         <div className={styles.login_msg}
         style={{ color: error.email === false && error.password === false ? "green" : "red",
            background: error.email === false && error.password === false ?
              "rgba(255,255,255,0.15)": "transparent"
         }}
         >
            {
            (error.email === false && error.password === false) && 
            " Login Successfully ✔ "
            
        }
        {
            (error.email === true || error.password === true) && 
            " Login Unsuccessfull ❌ "
        }
         </div>
        

        <button className={styles.loginbtn}
        onClick={handlesubmit}
        > Login </button>

        
       

        <div className={styles.info_div}>Do not have an account?
            <button className={styles.signupbtn}
            onClick={() => navigate("/signuppage")}
            >SignUp</button>
        </div>
      </div>

    </div>
  )
}

export default LoginPage
