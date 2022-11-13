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
    <div>
      <HomeNavBar />
    <div className='App container col-6'>
      
      <h3>Customer Login Page</h3>
      <ul>
        {Object.entries(formErrors || {}).map(([prop, value]) => {
          return (
            <ol className='error-message' key={prop}>
              {value}
            </ol>
          );
        })}
      </ul>
      <form onSubmit={submit} noValidate>
        <div className='row'>
          
          
        </div>

        <div className='mb-3'>
          <label htmlFor='email'>Email</label>
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
        </div>
        <div className='mb-3'>
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
        {/* <div className='mb-3'>
          <label htmlFor='confirmpassword'>Confirm Password</label>
          <input
            className={
              formErrors && formErrors.confirmpassword
                ? 'form-control error'
                : 'form-control'
            }
            placeholder='Password'
            type='password'
            name='confirmpassword'
            noValidate
            onBlur={handleChange}
          />
        </div> */}
        <div className='mb-3'>
        <Link ><button
            type='submit'
            disabled={Object.entries(formErrors || {}).length > 0}
            onClick={(e) => submit(e)}
          >
            Login
          </button></Link>
          <Link to={`/CustomerRegister`} ><button style={{marginLeft: "10px"}} className="btn btn-secondary">Register</button></Link> 
        </div>
      </form>
    </div>
    </div>
  );
}
export default CustomerLogin;