import React, { useState } from 'react';
import { HomeNavBar } from './HomeNavBar';
import {Link,useNavigate} from 'react-router-dom';
import Footer from './footer';

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
      alert("Invalid credentials!")
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


  
  // return (
  //   <div  className="main-Login">
  //     <HomeNavBar />
  //     <div className="login-contain">
  //       <div className="left">
  //         {/* <div className='img'>
  //           <img src={logo} alt="" style={{height:"100px", width:"100px"}}/>
  //         </div> */}
  //         <form>
  //           <label for="uname">Username</label>
  //           <input placeholder="Enter your username" type="username" value={unameval} onChange={(e)=>{setunameval(e.target.value)}} id="uname"/>
  //           <label for="pwd">Password</label>
  //           <input placeholder="Enter Password" type="password" value={passval} onChange={(e)=>{setpassval(e.target.value)}} id="pwd" />
  //           <button onClick={login} type="submit" id="sub_btn">Login</button><br/>
  //           <div className='footer1'></div>
  //         </form>
          
  //       </div>
        
  //     </div>
  //     </div>     
  // )
  return (
    <>
    <HomeNavBar />
  <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div className="card card0 border-0">
        <div className="row d-flex">
            <div className="col-lg-6 bg-image">
                <div className="bg-text text-white">Welcome to HERBAL-MEDICS</div>
                <div className="text-white text-center"> You're Just One Step Away From Getting Your Medicines</div>
            </div>
            <div className="col-lg-6 text-center">
                <div className="card2 card border-0 px-4 py-5">
                    <h3 className="mb-2">Login to your Herbal-Medics account</h3>
                
                    <div className="row mt-3"> 
                        <div className="col"><label htmlFor='email'>Username</label>
         
                            <div className="invalid-feedback"> Username is not valid</div>
                        </div>
                        <input placeholder="Enter your username" type="username" value={unameval} onChange={(e)=>{setunameval(e.target.value)}} id="uname"/>
                        
                    </div>
                    <div className="row mt-1">
                        <div className="col">
                        <label htmlFor='password'>Password</label>
                        <input placeholder="Enter Password" type="password" value={passval} onChange={(e)=>{setpassval(e.target.value)}} id="pwd" />
          
                        </div>
                    </div>
                    <div className="text-center" style={{ display: 'block', 
                                    width: 700, 
                                    padding: 30 }}>
                        
                        <div id="loginMessage"></div>
                    </div>

                    <div className="row mb-4">
                    <div className="col">

                        {/* <div className="col"> <Link ><button
            type='submit'
            disabled={Object.entries(formErrors || {}).length > 0}
            onClick={(e) => submit(e)}
          >
            Login
          </button>
          </Link></div> */}
          <button onClick={login} className="btn btn-dark" type="submit" id="sub_btn">Login</button><br/>
                    
                    </div></div>
                
                </div>
            </div>
        </div>
    </div>
  </div>
  <Footer/>
  </>
 );
 
}

export default Login;













// import React, { useState } from 'react';
// import { HomeNavBar } from './HomeNavBar';
// import {Link,useNavigate} from 'react-router-dom';

// function Login() {
//   const [unameval, setunameval] = useState("");
//   const [passval, setpassval] = useState("");
//   const navigate = useNavigate();
//   const [defaultuser, setUser] = useState("Admin");
//   const [defaultpwd, setPwd] = useState("Admin@123");

//   function login() {
//     let isLogged = checkIfUserIsValid();
//     if (isLogged) {
//       console.log("Login Successful");
//       navigate("/adminHomePage");
//       console.log("working");
//     } else {
//       //navigate("/Failure");
//       console.log("Something went wrong");
//     }
//   }
//   function checkIfUserIsValid() {
//     const requestBody = {
//       username: unameval,
//       password: passval,
//     };

//     if (unameval === defaultuser && passval === defaultpwd) return true;
//     else return false;
//   }

//   return (
//     <>
//     <HomeNavBar />
//   <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
//     <div className="card card0 border-0">
//         <div className="row d-flex">
//             <div className="col-lg-6 bg-image">
//                 <div className="bg-text text-white">Welcome to HERBAL-MEDICS</div>
//                 <div className="text-white text-center"> You're Just One Step Away From Getting Your Medicines</div>
//             </div>
//             <div className="col-lg-6 text-center">
//                 <div className="card2 card border-0 px-4 py-5">
//                     <h3 className="mb-2">Login to your Herbal-Medics account</h3>
//                     <br></br>
//                     <br></br>
                
//                     <div className="row mt-3"> 
//                         <div className="col"><label htmlFor='email'>Username</label>
         
//                             <div className="invalid-feedback"> Username is not valid</div>
//                         </div>
//                         <input placeholder="Enter your username" type="username" value={unameval} onChange={(e)=>{setunameval(e.target.value)}} id="uname"/>
                        
//                     </div>
//                     <div className="row mt-1">
//                         <div className="col">
//                         <label htmlFor='password'>Password</label>
//                         <input placeholder="Enter Password" type="password" value={passval} onChange={(e)=>{setpassval(e.target.value)}} id="pwd" />
          
//                         </div>
//                     </div>
//                     <div className="text-center" style={{ display: 'block', 
//                                     width: 700, 
//                                     padding: 30 }}>
                        
//                         <div id="loginMessage"></div>
//                     </div>
                    
//                     <div className="row">

//                         <div className="col"> <Link ><button className="btn btn-dark" onClick={login} type="submit" id="sub_btn">Login</button>
//           </Link></div>
//           <br/>
                    
//                     </div>
                
//                 </div>
//             </div>
//         </div>
//     </div>
//   </div>
//   </>
//  );
// }

// export default Login;