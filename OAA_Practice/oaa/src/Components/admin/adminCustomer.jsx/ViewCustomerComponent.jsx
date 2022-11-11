
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewCustomerComponent() {
    const { id } = useParams();
    const URL = `http://localhost:8089/api/v1/customer/${id}`;
  
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
  
    const viewCustomerBycustomerId = async (e) => {
      const res = await axios.get(URL)
       console.log(res.data);
       setCustomer(res.data);
    };

  return (
    <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Customer Details</h3>
                    <div className = "card-body">
                        <div className = "row" >
                            <label> Customer's Id: { customer.customerId } </label>
                        </div>
                        <div className = "row">
                            <label> Customer's Name: { customer.customerName }</label>
                        </div>
                        <div className = "row">
                            <label> Mobile Number: { customer.mobileNumber }</label>
                        </div>
                        <div className = "row">
                            <label> Customer Email ID: { customer.emailId }</label>
                        </div>
                    </div>

                </div>
            </div>
  );
}

export default ViewCustomerComponent;