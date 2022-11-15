import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { HomeNavBar } from './HomeNavBar';
import CustomerServiceforlogin from './CustomerServiceforlogin';
import {
  minMaxLength,
  validEmail,
} from './validations';
import './Signup.css';
import Footer from './footer';

function CustomerLogin() {

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
        }
        break;

    }

    setFormErrors(currentFormErrors);
    setCustomers({ ...Customers, [name]: value });
  }

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
        //alert("Login Sucessful");
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
                <div className="bg-text text-white">Welcome to HERBAL-MEDICS</div>
                <div className="text-white text-center"> You're Just One Step Away From Getting Your Medicines</div>
            </div>
            <div className="col-lg-6 text-center">
                <div className="card2 card border-0 px-4 py-5">
                    <h3 className="mb-2">Login to your Herbal-Medics account</h3>
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
                    <div className="text-center" style={{ display: 'block',width: 700,padding: 30 }}>
                        
                        <div id="loginMessage"></div>
                    </div>
                    <div className="row mb-4">

                        <div className="col"> <Link ><button className="btn btn-dark"
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
  <Footer/>
  </>
 );
}


export default CustomerLogin;









// import React, { useState } from 'react';
// import {Link,useNavigate} from 'react-router-dom';
// import UserContext from '../Context/user/UserContext';
// import { useContext } from 'react';
// import CustomerServiceforlogin from './CustomerServiceforlogin';
// import {
//   minMaxLength,
//   validEmail,
// } from './validations';


// function CustomerLogin() {
  

// const context = useContext(UserContext);
// const { user, setuser } = context;
//   let [formErrors, setFormErrors] = useState({});
//   const [Customers, setCustomers] = useState({
//     emailId:"",
//     password:""
// });
// let newdata;
  

//   const navigate = useNavigate();
//   function handleChange(e) {
//     const { name, value } = e.target;
//     let currentFormErrors = { ...formErrors };

//     switch (name) {
      
//       case 'email':
//         if (!value || validEmail(value)) {
//           currentFormErrors[name] = `Email address is invalid`;
//         } 
//         break;
//       case 'password':
//         if (minMaxLength(value, 6)) {
//           currentFormErrors[name] = 'Password should have minimum 6 characters';
//         }
//          else {
//           delete currentFormErrors[name];
//           setCustomers({
//             ...Customers,
//             password: value,
//           });

//         }
//         break;

//     }

//     setFormErrors(currentFormErrors);
//     setCustomers({ ...Customers, [name]: value });
//   }

//   function submit(e) {
//     e.preventDefault();
//     addDataToServer(Customers);
//     console.log(Customers);
    
//   }

//    const onInputChange = (e) => {
//     setCustomers({ ...Customers, [e.target.name]: e.target.value });
//     };


//   const addDataToServer = (data) => {
//       CustomerServiceforlogin.login(data).then(
//       (response) => {
//         console.log(response.data);
        
//         console.log(response.data.customerId);
//         newdata=response.data;
//         //setuser({ user: response.data });
//         setuser(response.data);
//         console.log(user);

//         alert("Login Sucessfull");
//         //console.log(data)
//         navigate("/homePage");
//       },
//       (error) => {
//         console.log(error.response.data);
//         alert("Invalid emailId or password");
//       }
//     );
//   };


//   return (
//     <div className='App container col-6'>
//       <h3>Customer Login Page</h3>
//       <ul>
//         {Object.entries(formErrors || {}).map(([prop, value]) => {
//           return (
//             <ol className='error-message' key={prop}>
//               {value}
//             </ol>
//           );
//         })}
//       </ul>
//       <form onSubmit={submit} noValidate>
//         <div className='row'>
          
          
//         </div>

//         <div className='mb-3'>
//           <label htmlFor='email'>Email</label>
//           <input
//             className={
//               formErrors && formErrors.email
//                 ? 'form-control error'
//                 : 'form-control'
//             }
//             placeholder='Email'
//             type='email'
//             name='emailId'
//             noValidate
//             onBlur={handleChange}
//           />
//         </div>
//         <div className='mb-3'>
//           <label htmlFor='password'>Password</label>
//           <input   onChange={(e) => onInputChange(e)}
//             className={
//               formErrors && formErrors.password
//                 ? 'form-control error'
//                 : 'form-control'
//             }
//             placeholder='Password'
//             type='password'
//             name='password'
//             noValidate
//             onBlur={handleChange}
//           />
//         </div>
//         <div className='mb-3'>
//         <Link ><button
//             type='submit'
//             disabled={Object.entries(formErrors || {}).length > 0}
//             onClick={(e) => submit(e)}
//           >
//             Login
//           </button></Link>
//           <Link to={`/CustomerRegister`} ><button style={{marginLeft: "10px"}} className="btn btn-secondary">Register</button></Link> 
//         </div>
//       </form>
//     </div>
//   );
// }
// export default CustomerLogin;
