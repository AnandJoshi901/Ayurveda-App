import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { HomeNavBar } from './HomeNavBar';
import CustomerServiceforlogin from './CustomerServiceforlogin';
import {
  minMaxLength,
  validEmail,
} from './validations';
//import CustomerService from '../../services/CustomerService';


function CustomerLogin() {
  //let [user, setUser] = useState({});
  let [formErrors, setFormErrors] = useState({});
  const [Customers, setCustomers] = useState({
    emailId:"",
    password:""
});

  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    let currentFormErrors = { ...formErrors };

    switch (name) {
      
      case 'email':
        if (!value || validEmail(value)) {
          currentFormErrors[name] = `Email address is invalid`;
        } 
        break;
      case 'password':
        if (minMaxLength(value, 6)) {
          currentFormErrors[name] = 'Password should have minimum 6 characters';
        }
         else {
          delete currentFormErrors[name];
          setCustomers({
            ...Customers,
            password: value,
          });
        //   if (user.confirmpassword) {
        //     validateConfirmPassword(
        //       value,
        //       user.confirmpassword,
        //       currentFormErrors
        //     );
        //   }
        }
        break;
    //   case 'confirmpassword':
    //     let valid = validateConfirmPassword(
    //       user.password,
    //       value,
    //       currentFormErrors
    //     );
    //     if (valid) {
    //       setUser({ ...user, confirmpassword: value });
    //     }
    //     break;
    //   default:
    //     break;
    }

    setFormErrors(currentFormErrors);
    setCustomers({ ...Customers, [name]: value });
  }
//   function validateConfirmPassword(
//     password,
//     confirmpassword,
//     formErrors
//   ) {
//     formErrors = formErrors || {};
//     if (password !== confirmpassword) {
//       formErrors.confirmpassword =
//         'Confirmed password is not matching with password';
//       return false;
//     } else {
//       delete formErrors.confirmpassword;
//       return true;
//     }
//   }

  function submit(e) {
    e.preventDefault();
    addDataToServer(Customers);
    console.log(Customers);
  }

   const onInputChange = (e) => {
    setCustomers({ ...Customers, [e.target.name]: e.target.value });
    };


  const addDataToServer = (data) => {
      CustomerServiceforlogin.login(data).then(
      (response) => {
        console.log(response);
        alert("Login Sucessfull");
        console.log(data)
        navigate("/homePage");
      },
      (error) => {
        console.log(error.response.data);
        alert("Invalid emailId or password");
      }
    );
  };
return (
    <>
    <HomeNavBar />
  <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div className="card card0 border-0">
        <div className="row d-flex">
            <div className="col-lg-6 bg-image">
                <div className="bg-text text-white">Welcome to RENT-O-CAR</div>
                <div className="text-white text-center"> You're Just One Step Away From Renting Your Favourite Car</div>
            </div>
            <div className="col-lg-6 text-center">
                <div className="card2 card border-0 px-4 py-5">
                    <h3 className="mb-2">Login to your RENT-O-CAR account</h3>
                    <p className="mb-4 text-sm">First Time User? <a className="text-primary login" href="/CustomerRegister">SignUp</a></p>
                    
                
                    <div className="row mt-3"> 
                        <div className="col"><label htmlFor='email'>Email</label>
          <input
            className={
              formErrors && formErrors.email
                ? 'form-control error'
                : 'form-control'
            }
            placeholder='Email'
            type='email'
            name='emailId'
            noValidate
            onBlur={handleChange}
          />
                            <div className="invalid-feedback"> Email Id not valid</div>
                        </div>
                        
                    </div>
                    <div className="row mt-1">
                        <div className="col">
                        <label htmlFor='password'>Password</label>
          <input   onChange={(e) => onInputChange(e)}
            className={
              formErrors && formErrors.password
                ? 'form-control error'
                : 'form-control'
            }
            placeholder='Password'
            type='password'
            name='password'
            noValidate
            onBlur={handleChange}
          />
                        </div>
                    </div>
                    <div className="text-center" style={{ display: 'block', 
                                    width: 700, 
                                    padding: 30 }}>
                        
                        <div id="loginMessage"></div>
                    </div>
                    <div className="row mb-4">

                        <div className="col"> <Link ><button
            type='submit'
            disabled={Object.entries(formErrors || {}).length > 0}
            onClick={(e) => submit(e)}
          >
            Login
          </button>
          </Link></div>
                    
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  </div>
  </>
 );
}


export default CustomerLogin;