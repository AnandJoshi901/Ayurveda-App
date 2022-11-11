import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
//import "../CssStyle/Styles.css";
import NavBarCustomer from "../../user/NavBarCustomer";

function UpdateCustomer() {
    const { id } = useParams();
    const URL = `http://localhost:8089/api/v1/customer/id/${id}`;
    const navigate = useNavigate();
  
    useEffect(() => {
      viewCustomerBycustomerId();
    }, []);
    const [customer, setCustomer] = useState({
      customerId: "",
      customerName: "",
      mobileNumber:"",
      emailId: "",
      password: "",
    });
  
    const { customerId, customerName, mobileNumber, emailId, password } =
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
          alert("Customer Updated Successfully");
          navigate("/CustomerComponent");
        },
        (error) => {
          alert("Operation failed");
        }
      );
    };
  
    const viewCustomerBycustomerId = async (e) => {
      const customerInfo = await axios.get(URL);
      setCustomer(customerInfo.data);
    };
  
    return (
      <div>
        <NavBarCustomer/>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
            <div className="jumbotron">
              <h1 className="display-4 text-center">Update Customer</h1>
              <br></br>
              <hr></hr>
              <br></br>
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
                    <label>Customer mobile number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="mobileNumber"
                      placeholder="Enter Customer mobile number"
                      required
                      value={mobileNumber}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Customer Email</label>
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
                    <label>Password </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter Password"
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
  export default UpdateCustomer;