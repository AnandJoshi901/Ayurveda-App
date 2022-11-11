import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';

function HomeComponent() {
  const [unameval, setunameval] = useState("");
  const [passval, setpassval] = useState("");
  const navigate = useNavigate();
  const [defaultuser, setUser] = useState("Admin");
  const [defaultpwd, setPwd] = useState("Admin@123");


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
      
      <div className="login-contain">
        <div className="left">
          
          <form>
            
            <Link to={`/Admin-Login`}><button style={{marginLeft: "10px"}} className='btn btn-warning'>Admin Login</button></Link> 
            <Link to={`/Customer-Login`}><button style={{marginLeft: "10px"}} className='btn btn-secondary' >Customer Login </button></Link>
            <div className='footer1'></div>
          </form>
          
        </div>
        <div className="right">
          <div className='welcomenote'>
            <h3 >Welcome!</h3>
          </div>
          
        </div>
      </div>
    
      </div>
        
  )

}

export default HomeComponent;