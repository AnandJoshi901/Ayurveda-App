import React, { useState, useRef } from 'react'
import NavBarCustomer from '../../components/NavBarCustomer';
import {useNavigate} from "react-router-dom";
import Footer from "../../components/Footer";
import "../../index.css";

function ProfilePage() {
    
    const [customerDetails, setCustomerDetails] = useState(CurrentUser);
    const [disabled, setDisabled] = useState(true);
    const formEL = useRef();

    let navigate = useNavigate();
  
    const handlecustomerName = (e)=>{
      setCustomerDetails({...customerDetails,customerName:e.target.value})
    }
  
    const handleEmail = (e)=>{
      setCustomerDetails({...customerDetails,emailId:e.target.value})
    }
  
    const handleMobileNumber = (e)=>{
      setCustomerDetails({...customerDetails,mobileNumber:e.target.value})
    }
  
    const handlePassword = (e)=>{
      setCustomerDetails({...customerDetails,password:e.target.value})
    }
  
    // const clickHandler = (event) => {
    //   if(formEL.current.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     formEL.current.classList.add("was-validated");
    //   }else{
    //     event.preventDefault();
    //     setDisabled(true);
    //     dispatch(UpdateCustomer(customerDetails)) 
    //   }
    // }

    const clickHandler = (e) => {
        e.preventDefault();
        updateDataToServer(customerDetails);
      };
      const updateDataToServer = (data) => {
        axios.put(URL, data).then(
          (response) => {
            alert("Customer Updated Successfully");
            navigate("/CustomerComponent");
          },
          (error) => {
            alert("Operation failed");
          }
        );
      };
  
    return (
      <>
      <div>   
        <NavBarCustomer/>
        <div className="card" style={{margin:"20px"}}>
          <div className="card-body">
            <div className='p-5 text-center bg-light'>
              <h3 className='mb-3'>Your Details</h3>
            </div>
          <form className="needs-validation" onSubmit={clickHandler} ref={formEL} noValidate >
          <div className="row justify-content-md-center">
              <div className="col-md-5">
                <label className="custom-format" htmlFor="customerName"> Name</label>
                <input className="custom-format form-control input" type = "text" id="customerName" disabled = {disabled} 
                    value = {customerDetails.customerName} onChange = {handlecustomerName} minLength="3" maxLength="20" required />
                <div className="invalid-feedback">  Name must be 3 to 20 characters long</div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5">
                <label className="custom-format" htmlFor="emailId">Email id</label>
                <input className="custom-format form-control input" type = "text" id="emialId" disabled = {true} value = {customerDetails.emailId} onChange = {handleEmail}/>
                <label className="custom-format" htmlFor="mobileNumber">Mobile Number</label>
                <input className="custom-format form-control input" type = "text" id="mobileNumber" disabled = {disabled} 
                    value = {customerDetails.mobileNumber} onChange = {handleMobileNumber} pattern="^(?=.*\d)[\d]{10,10}$" required/>
                <div className="invalid-feedback"> Mobile number should be of 10 digits</div>
                <label className="custom-format" htmlFor="password">Password</label>
                <input className="custom-format form-control input" type = "text" id="password"disabled = {disabled} 
                  value = {customerDetails.password} onChange = {handlePassword} />
                {/* <div className="invalid-feedback"> Password should be of 6 or more characters</div> */}
              </div>
            </div>
            <div className="row container-fluid justify-content-md-center">
            <div className="col-md-4">
              <button className="btn btn-profile-primary" type="button" onClick={() => setDisabled(false)} >Edit</button>
              <button className="btn btn-profile" onClick={clickHandler}>Save</button>
            </div>
          </div>
          </form>
          </div>       
        </div>
      </div>
      <Footer />
      </>
    )
  }
  
  export default ProfilePage