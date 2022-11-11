import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {
  minMaxLength,
  validEmail,
  passwordStrength,
  userExists,
} from './validations';


function CustomerLogin() {
  let [user, setUser] = useState({});
  let [formErrors, setFormErrors] = useState({});

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
        } else if (passwordStrength(value)) {
          currentFormErrors[name] =
            'Password is not strong enough. Include an upper case letter, a number or a special character to make it strong';
        } else {
          delete currentFormErrors[name];
          setUser({
            ...user,
            password: value,
          });
          if (user.confirmpassword) {
            validateConfirmPassword(
              value,
              user.confirmpassword,
              currentFormErrors
            );
          }
        }
        break;
      case 'confirmpassword':
        let valid = validateConfirmPassword(
          user.password,
          value,
          currentFormErrors
        );
        if (valid) {
          setUser({ ...user, confirmpassword: value });
        }
        break;
      default:
        break;
    }

    setFormErrors(currentFormErrors);
    setUser({ ...user, [name]: value });
  }
  function validateConfirmPassword(
    password,
    confirmpassword,
    formErrors
  ) {
    formErrors = formErrors || {};
    if (password !== confirmpassword) {
      formErrors.confirmpassword =
        'Confirmed password is not matching with password';
      return false;
    } else {
      delete formErrors.confirmpassword;
      return true;
    }
  }

  function submit(e) {
    e.preventDefault();
    console.log(user);
  }


  return (
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
            name='email'
            noValidate
            onBlur={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password'>Password</label>
          <input
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
        <div className='mb-3'>
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
        </div>
        <div className='mb-3'>
        <Link to={`/HomePage/`} ><button
            type='submit'
            disabled={Object.entries(formErrors || {}).length > 0}
          >
            Login
          </button></Link>
          <Link to={`/CustomerRegister`} ><button style={{marginLeft: "10px"}} className="btn btn-secondary">Register</button></Link> 
        </div>
      </form>
    </div>
  );
}
export default CustomerLogin;



{/* <Link to={`/HomePage/`} ><button style={{marginLeft: "10px"}} className="btn btn-secondary">Login</button></Link>
<Link to={`/CustomerRegister`} ><button style={{marginLeft: "10px"}} className="btn btn-secondary">Register</button></Link> */}
