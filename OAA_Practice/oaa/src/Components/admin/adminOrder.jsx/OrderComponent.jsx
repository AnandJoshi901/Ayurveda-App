import React, { Component } from "react";
import { Link } from "react-router-dom";
import OrderServices from "./OrderServices";
import NavBarAdmin from "../NavBarAdmin";
import axios from "axios";


class OrderComponent extends Component {
    // Step 1:
    constructor(props) {
      super(props);
      this.state = {
        Orders: [],
      };
      this.cancelOrder = this.cancelOrder.bind(this);
    }
    //Step 2:
    componentDidMount() {
        OrderServices.showAll().then((Response) => {
        this.setState({ Orders: Response.data });
        console.log(this.state.Orders);
      });
    }
    cancelOrder = (orderId) => {
      axios
        .delete(`http://localhost:8089/api/v1/order/${orderId}`)
        .then(
          (response) => {
            alert("Order has been Cancelled");
            this.setState({
              Orders: this.state.Orders.filter(
                (Orders) => Orders.orderId !== orderId
              ),
            });
          },
          (error) => {
            alert("Unable to cancel the order");
          }
        );
    };
    render() {
      return (
        
        <div>
          <NavBarAdmin/><br></br>
                 <br></br>
                 <div className = "card col-md-8 offset-md-2" style={{ backgroundColor: "#eee" ,alignItems:"center",boxShadow: "2px 2px 5px black"}} >
                <h3 className = "text-center" > Orders </h3>
                
                
                </div>
                <br></br>
                <div className="card col-md-8 offset-md-2" style={{ backgroundColor: "#eee" ,alignItems:"center",boxShadow: "2px 2px 5px black"}}>
                    <br></br>
                    <div className="row row-cols-4" style={{ alignItems:"center"}}>
                    {/* <div className="row row-cols-3" style={{ alignItems:"center"}}> */}
            {this.state.Orders.length === 0
              ? "No Record "
              : this.state.Orders.map((Orders, index) => (
                  <div
                    className="card"
                    style={{ margin: "2rem",boxShadow: "2px 2px 5px black" }}
                    key={Orders.id}
                  >
                    <div className="jumbotron">
                      <div className="card-body" style={{ color: "black" }}>
                        <h5 className="card-title">{index + 1}</h5>
                        
                        <hr></hr>
                        <h5 className="card-title">
                          Order Id:&nbsp;{Orders.orderId}
                          </h5>
                        
                        <h5 className="card-text">
                          Order Date:&nbsp;{Orders.orderDate}
                        </h5>
                        <h5 className="card-text">
                          Dispatch Date:&nbsp;{Orders.dispatchDate}
                        </h5>
                        <h5 className="card-text">
                          Cost:&nbsp;{Orders.cost}
                        </h5>
                        <h5 className="card-text">
                          Order status:&nbsp;{Orders.status}
                        </h5>
                        <h5 className="card-text">
                          Customer Name:&nbsp;{Orders.customer.customerName}
                        </h5>

                        <div>
                                        {/* <Link to={`/update-order/${Orders.orderId}`}><button style={{marginLeft: "10px", marginTop:"10px"}} className='btn btn-warning'>Update Status</button></Link>  */}
                                        <button style={{marginLeft: "10px",marginTop:"10px"}} className="btn btn-danger" onClick={e => window.confirm('Are you sure, you want to cancel this order?') ? this.cancelOrder(Orders.orderId) : e.preventDefault()} >Cancel Order</button>
                                        <Link to={`/view-order/${Orders.orderId}`}><button style={{marginLeft: "10px",marginTop:"10px"}} className='btn btn-secondary' >View Order Details </button></Link>
                                    </div>
                        {/* <h5 className="card-text">
                          Medicine Name:&nbsp;{Orders.medicine.medicineId}
                        </h5>
                        <h5 className="card-text">
                          Category Details:&nbsp;{Orders.medicine.category.categoryName}
                        </h5> */}

                        
                        {/* <div className="d-grid gap-2">
                          <button
                            id="addbtn"
                            className="btn"
                            onClick={() => {
                              this.deleteOrder(Orders.bookingOrderId);
                            }}
                          >
                            Delete
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                ))}
                
          </div>
                        <br></br>
                <br></br>
                <br></br><br></br>
                </div>
        </div>
      );
    }
  }
  
  export default OrderComponent;