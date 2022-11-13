import React, { useState } from "react";
import axios from "axios";
import { HomeNavBar } from './HomeNavBar';
import {useNavigate } from "react-router-dom";

function CustomerRegister() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    customerId: "",
    customerName: "",
    mobileNumber:"",
    emailId: "",
    password: "",
  });
  const onInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };
  const {  customerId, customerName, mobileNumber, emailId, password  } =
    customer;

  const FormHandle = (e) => {
    e.preventDefault();
    addDataToServer(customer);
  };
  const addDataToServer = (data) => {
    axios.post("http://localhost:8089/api/v1/customer", data).then(
      (response) => {
        console.log(response);
        alert("Customer Added Successfully");
        navigate("/Customer-Login");
      },
      (error) => {
        console.log(error);
        alert("Operation failed");
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
                <div className="col-lg-6">
                    <div className="card2 card border-0 px-4 py-5">
                        <h3 className="mb-1">Create your Rent-O-Car account</h3>
                        <p className="mb-4 text-sm">Already have an account? <a className="text-primary login" href="/Customer-Login">Log In</a></p>
                        
                        <form onSubmit={(e) => FormHandle(e)}>
                        <div className="row mt-3">
                            <div className="col-md-6"> 
                            <label className="mb-0">
                                    <h6 className="mb-0 text-sm">customerId</h6>
                                </label> <input className="form-control" type="text" name="customerId" onChange={(e) => onInputChange(e)}
                                value={customerId}  />
                                
                                <div className="invalid-feedback"> First Name must be 3 to 20 characters long</div>
                                </div>
                            <div className="col-md-6"> <label className="mb-0">
                                    <h6 className="mb-0 text-sm">Customer Name</h6>
                                </label> <input className="form-control" type="text" name="customerName" onChange={(e) => onInputChange(e)}
                                value={customerName}  />
                                <div className="invalid-feedback"> Last Name must be 3 to 20 characters long</div>
                                </div>
                        </div>
                        <div className="row mt-3"> 
                            <div className="col-md-6"><label className="mb-0">
                                <h6 className="mb-0 text-sm">Email</h6>
                            </label> <input type="email" className="form-control" name="emailId" onChange={(e) => onInputChange(e)} pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" 
                                value={emailId} required /> 
                                <div className="invalid-feedback"> Email Id not valid</div>
                            </div>
                            <div className="col-md-6"> <label className="mb-0">
                                <h6 className="mb-0 text-sm">Mobile Number</h6>
                            </label> <input type="text" className="form-control" name="mobileNumber" onChange={(e) => onInputChange(e)}
                                value={mobileNumber} pattern="^(?=.*\d)[\d]{10,10}$" required/>
                                <div className="invalid-feedback"> Mobile number should be of 10 digits</div>
                            </div>
                            
                        </div>
                        <div className="row mt-3">
                           
                            <div className="col-md-6"> <label className="mb-0">
                                <h6 className="mb-0 text-sm">Password</h6>
                            </label> <input type="password" className="form-control" name="password" onChange={(e) => onInputChange(e)}
                                value={password} minLength="8" maxLength="16" required />
                                <div className="invalid-feedback"> Password should be between 8 to 16 characters</div>
                            </div>
                        </div>
                        <div className="container text-center">
                  <button
                    id="addbtn"
                    type="submit"
                    className="btn btn-secondary"
                  >
                    Add Customer
                  </button>
                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
  }

export default CustomerRegister;