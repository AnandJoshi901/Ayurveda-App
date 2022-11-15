import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import NavBarCustomer from "../NavBarCustomer";


function UpdateCustomer_user(){
  const { id } = useParams();
  const URL = `http://localhost:8089/api/v1/customer/id/${id}`;
  const navigate = useNavigate();

  useEffect(() => {
    getCustomerById();
  });
  const [customer, setCustomer] = useState({
    customerId:"",
    customerName: "",
    emailId: "",
    mobileNumber: "",
    password:""
  });

  const { customerId, customerName, emailId, mobileNumber, password} =
    customer;

  const onInputChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const FormHandle = (e) => {
        e.preventDefault();
        updateDataToServer(customer);
      };
    
      const updateDataToServer = (data) => {
        axios.put(URL, data).then(
          (response) => {
            alert("Your Details Updated Successfully");
            navigate("/profilePage");
          },
          (error) => {
            alert("Operation failed");
          }
        );
      };

      const getCustomerById = async (e) => {
        const customerInfo = await axios.get(URL);
        setCustomer(customerInfo.data);
      };

      return(
        <div className="mystyle">
      <NavBarCustomer/>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
          <div className="jumbotron">
            <h3 className="text-center">Update Your Details</h3>
            <br></br>
            <hr></hr>
            <br></br>
            <div>
              <form onSubmit={(e) => FormHandle(e)}>

              <div className="form-group">
                  <label>Customer Id</label>
                  <input
                    type="text"
                    className="form-control"
                    name="customerId"
                    placeholder="Enter Customer Id"
                    required
                    value={customerId}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Customer Name</label>
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
                  <label>Email Id </label>
                  <input
                    type="email"
                    className="form-control"
                    name="emailId"
                    placeholder="Enter Email Id"
                    required
                    value={emailId}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Mobile Number </label>
                  <input
                    type="number"
                    className="form-control"
                    name="mobileNumber"
                    placeholder="Enter Mobile Number"
                    required
                    value={mobileNumber}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    placeholder="Enter password"
                    required
                    value={password}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="container text-center">
                <button
                      id="addbtn"
                      type="submit"
                      className="btn btn-secondary">
                      Update Customer
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default UpdateCustomer_user;