import React,{ useState } from 'react'
import styles from "./SignupPage.module.css"
import { useNavigate } from 'react-router-dom'
const SignupPage = () => {

  const navigate = useNavigate();


  let handlesubmit = () => {

    const userslist = JSON.parse(localStorage.getItem("Users")) || [];

    let emailtest = data.email.trim();
    let passwordtest = data.password.trim();

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
    const passwordRegex = /^(?=(?:.*[a-z].*){2,})(?=(?:.*[A-Z].*){2,})(?=(?:.*\d.*){2,})(?=(?:.*[!@#$%^&*()_\-+=\[\]{};:'",.<>?/\\|`~].*){2,}).{8,}$/;

    const email = emailRegex.test(emailtest);
    const password = passwordRegex.test(passwordtest);


    seterror({
      email: !email,
      password: !password
    });


    if (!email || !password) return;
    

    const obj = { email: emailtest, password : passwordtest ,bookedhotelslist: [] };
    userslist.push(obj);
    localStorage.setItem("Users", JSON.stringify(userslist))
   

  }

  
  const [data, setdata] = useState({email: "", password: ""});
  const [error, seterror] = useState({email: null, password: null});
  
  return (
    <div>
       <div className={styles.signup_container}>
              <p className={styles.signup_heading}>SignUp</p>
      
              
              <input className={styles.emailbox} type="text" 
              value={data.email}
              name= "email"
              placeholder="Email" 
              onChange={(dets) => setdata((prev)=>({...prev, email: dets.target.value}))}
              />
             <div className={styles.errormsg_div}>
               {
                  error.email && 
                  " Enter valid Email "
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
                      " Enter Valid Password, Enter Atleast 2 capital letters 2 small letters, 2 Numbers and 2 special characters"
                  
              }
      
      
              </div>
      
      
      
      
               <div className={styles.signup_msg}
               style={{ color: error.email === false && error.password === false ? "green" : "red",
                 background: error.email === false && error.password === false ?
                  "rgba(255,255,255,0.15)" : ""
               }}
               >
                  {
                  (error.email === false && error.password === false) && 
                  " Sign Up Successfully ✔ "
                      
              }
              {
                  (error.email === true || error.password === true) && 
                  " Sign Up Unsuccessfull ❌ "
              }
               </div>
              
      
              <button className={styles.signupbtn}
              onClick={handlesubmit}
              > Sign Up </button>
      
              
             
      
              <div className={styles.info_div}>
                  <button className={styles.loginbtn}
                  onClick={() => navigate("/loginpage")}
                  >Login</button>
              </div>
            </div>
    </div>
  )
}

export default SignupPage
