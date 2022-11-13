import React, { useState } from 'react';
import { HomeNavBar } from './HomeNavBar';
import {Link,useNavigate} from 'react-router-dom';

function Login() {
  const [unameval, setunameval] = useState("");
  const [passval, setpassval] = useState("");
  const navigate = useNavigate();
  const [defaultuser, setUser] = useState("Admin");
  const [defaultpwd, setPwd] = useState("Admin@123");

  function login() {
    let isLogged = checkIfUserIsValid();
    if (isLogged) {
      console.log("Login Successful");
      navigate("/adminHomepage");
    } else {
      //navigate("/Failure");
      console.log("Something went wrong");
    }
  }
  function checkIfUserIsValid() {
    const requestBody = {
      username: unameval,
      password: passval,
    };

    if (unameval === defaultuser && passval === defaultpwd) return true;
    else return false;
  }
  return (
    <div  className="main-Login">
      <HomeNavBar />
      <div className="login-contain">
        <div className="left">
          {/* <div className='img'>
            <img src={logo} alt="" style={{height:"100px", width:"100px"}}/>
          </div> */}
          <form>
            <label for="uname">Username</label>
            <input placeholder="Enter your username" type="username" value={unameval} onChange={(e)=>{setunameval(e.target.value)}} id="uname"/>
            <label for="pwd">Password</label>
            <input placeholder="Enter Password" type="password" value={passval} onChange={(e)=>{setpassval(e.target.value)}} id="pwd" />
            <button onClick={login} type="submit" id="sub_btn">Login</button><br/>
            <div className='footer1'></div>
          </form>
          
        </div>
        
      </div>
      </div>     
  )
}

export default Login;