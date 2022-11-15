
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewOrderByOrderId_admin() {
    const { id } = useParams();
    const URL = `http://localhost:8089/api/v1/order/${id}`;
  
    useEffect(() => {
      viewOrder();
    }, []);
    const [Orders, setOrders] = useState({
                    orderId:"",
                    orderDate:"",
                    dispatchDate:"",
                    cost:"",
                    totalCost:"",
                    status:"",
                    customer:{},
                    medicine:{}
    })
  
    const viewOrder = async (e) => {
      const res = await axios.get(URL)
       console.log(res.data);
       setOrders(res.data);
    };

  return (
    <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3" style={{ backgroundColor: "#eee" }}>
                    <h3 className = "text-center"> Order Details</h3>
                    <div className = "card-body">

                    {/* {Orders.length === 0
              ? "No Record "
              : Orders.map((Orders) => ( */}
                <div
                    className="card"
                    style={{ margin: "2rem" }}
                    key={Orders.orderId}
                  >
                    <div className="jumbotron">
                      <div className="card-body" style={{ color: "black" }}>

                    <div className="card-title">
                          Order Id:&nbsp;{Orders.orderId}
                          </div>

                        
                        <div className="card-text">
                          Order Date:&nbsp;{Orders.orderDate}
                        </div>
                        <div className="card-text">
                          Dispatch Date:&nbsp;{Orders.dispatchDate}
                        </div>
                        <div className="card-text">
                          Cost:&nbsp;{Orders.cost}
                        </div>
                        <div className="card-text">
                          Order status:&nbsp;{Orders.status}
                        </div>

                        <br></br>
                        <h5></h5>
                        Customer Details:<hr></hr>
                        <div className="card-text">
                        Customer Id:&nbsp;{Orders.customer.customerId}
                        </div>
                        <div className="card-text">
                        Customer Name:&nbsp;{Orders.customer.customerName}
                        </div>
                        <div className="card-text">
                        Mobile Number:&nbsp;{Orders.customer.mobileNumber}
                        </div>
                        <div className="card-text">
                        EmailId:&nbsp;{Orders.customer.emailId}
                        </div>

                        <br></br>
                        <h5></h5>
                        Medicine Details:<hr></hr>
                        <div className="card-text">
                        Medicine Id:           &nbsp;{Orders.medicine.medicineId}
                        </div>
                        <div className="card-text">
                        Medicine Name:         &nbsp;{Orders.medicine.medicineName}
                        </div>
                        <div className="card-text">
                        Manufacturing Date:    &nbsp;{Orders.medicine.mfd}
                        </div>
                        <div className="card-text">
                        Expiry Date:           &nbsp;{Orders.medicine.expiryDate}
                        </div>
                        <div className="card-text">
                        Company:               &nbsp;{Orders.medicine.company}
                        </div>
                      
                        </div>
                    </div>
                  </div>
                

                        {/* <div className = "row" >
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
                        </div> */}
                    </div>
</div>
                </div>
                
            
  );
}

export default ViewOrderByOrderId_admin;