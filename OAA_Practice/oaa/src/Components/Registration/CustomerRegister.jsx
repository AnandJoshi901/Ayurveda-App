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
    <div>
      <HomeNavBar />
    <div data-testid="create-1">
  
      <div className="container" >
        <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
          <div className="jumbotron">
            <h1 className="display-4 text-center">Register Yourself as Customer</h1>
            <br></br>
            <hr></hr>
            <br></br>
            <div>
              <form onSubmit={(e) => FormHandle(e)}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Customer Id</label>
                  <input
                    type="number"
                    className="form-control"
                    name="customerId"
                    placeholder="Enter Customer Id"
                    required
                    value={customerId}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Customer Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="customerName"
                    placeholder="Enter Customer Name"
                    required
                    value={customerName}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Customer Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="emailId"
                    placeholder="Enter Customer Email"
                    required
                    value={emailId}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobileNumber"
                    placeholder="Enter mobileNumber"
                    required
                    value={mobileNumber}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Customer Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter Customer Password"
                    required
                    value={password}
                    onChange={(e) => onInputChange(e)}
                  />
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
    </div>
  );
}
export default CustomerRegister;
