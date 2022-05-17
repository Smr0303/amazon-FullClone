import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState(null);
  
   const signIn=e=>{
    e.preventDefault();
   
   }
   const signUp=e=>{
    e.preventDefault(); 
   }

  return (  
    <div className="login">
      <Link to="/">
        <img
          className="loginLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
        <div className="loginContainer">
            <form>
                <h5>Email</h5>
                <input type="text" value={email} onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
                <h5>Password</h5>
                <input type="password" password={password} onChange={(e)=>{
                    setPassword(e.target.value);
                    console.log(password)
                }}/>

                <button type="submit" onSubmit={signIn} className="login_signin_button">SignIn</button>
            </form>

        <p>By signing in to account you accept the terms and conditions of sale</p> 
        <button className="login_register_button">Create Your Amazon Account</button>      
        </div>
    </div>
  );
}

export default Login;
