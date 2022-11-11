import React, { Component } from "react";
import { Link } from "react-router-dom";
import OrderServices from "./OrderServices";
import NavBarAdmin from "../NavBarAdmin";
import ViewCustomerComponent from "../../admin/adminCustomer.jsx/ViewCustomerComponent";


class OrderComponent extends Component {
    // Step 1:
    constructor(props) {
      super(props);
      this.state = {
        Orders: [],
      };
    }
    //Step 2:
    componentDidMount() {
        OrderServices.showAll().then((Response) => {
        this.setState({ Orders: Response.data });
        console.log(this.state.Orders);
      });
    }
    // deleteOrder = (bookingId) => {
    //   axios
    //     .delete(`http://localhost:8089/api/v1/order/${id}`)
    //     .then(
    //       (response) => {
    //         alert("Record Deleted Successfully");
    //         this.setState({
    //           Orders: this.state.Orders.filter(
    //             (Orders) => Orders.bookingOrderId !== bookingId
    //           ),
    //         });
    //       },
    //       (error) => {
    //         alert("Operation Failed Here");
    //       }
    //     );
    // };
    render() {
      return (
        <div>
          <NavBarAdmin/>
          <div className="container">
            {this.state.Orders.length === 0
              ? "No Record "
              : this.state.Orders.map((Orders, index) => (
                  <div
                    className="card"
                    style={{ margin: "2rem" }}
                    key={Orders.id}
                  >
                    <div className="jumbotron">
                      <div className="card-body" style={{ color: "black" }}>
                        <h5 className="card-title">{index + 1}</h5>
                        <h5 className="card-title">
                          Order Id:&nbsp;{Orders.orderId}
                        </h5>
                        <h5 className="card-text">
                          Order Date:&nbsp;{Orders.orderDate}
                        </h5>
                        <h5 className="card-text">
                          Dispatch Date:&nbsp;{Orders.dispatchDate}
                        </h5>
                        {/* <h5 className="card-text">
                          Transaction Mode:&nbsp;{Orders.transactionMode}
                        </h5> */}
                        <h5 className="card-text">
                          Cost:&nbsp;{Orders.cost}
                        </h5>
                        <h5 className="card-text">
                          Order status:&nbsp;{Orders.status}
                        </h5>
                        {/* <h5 className="card-text">
                          Quantity:&nbsp;{Orders.quantity}
                        </h5> */}
                        <h5 className="card-text">
                          Customer Details:&nbsp;{Orders.customer.customerName}
                        </h5>
                        <h5 className="card-text">
                          Medicine Details:&nbsp;{Orders.medicine.medicineId}
                        </h5>
                        <h5 className="card-text">
                          Category Details:&nbsp;{Orders.medicine.category.categoryName}
                        </h5>

                        
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
        </div>
      );
    }
  }
  
  export default OrderComponent;