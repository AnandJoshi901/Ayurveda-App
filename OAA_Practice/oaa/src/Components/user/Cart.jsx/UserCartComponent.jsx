import CartService from './CartService';
import React, { Component } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
// import "../CSSStyles/cart.css";
import NavBarCustomer from '../NavBarCustomer';

export default class UserCartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Medicines: [],
      Carts:{}
    };
  }
  componentDidMount() {
    CartService.viewMedicine().then((response) => {
      this.setState({ Medicines: response.data })
      console.log(response.data)
    });
    CartService.viewCartInfo().then((response) => {
      this.setState({ Carts: response.data })
      console.log(response.data)
    });
    
  }
  deleteAll = (cartId=16) => {
    axios.delete(`http://localhost:8089/api/v1/medicines/${cartId}`).then((response) => {
      // alert("Cart has been emptied successfully");
      CartService.viewCartInfo().then((response) => {
        this.setState({ Carts: response.data })
      });
      this.setState({
        Medicines: []
      });
    },
      (error) => {
        alert("Unable to delete all medicines");
      }
    );
  }
  deleteMedicine = (cartId=16, medicineId) => {
    axios.delete(`http://localhost:8089/api/v1/cart/${cartId}/${medicineId}`).then((response) => {
      CartService.viewCartInfo().then((response) => {
        this.setState({ Carts: response.data })
      });
      this.setState({
        Medicines: this.state.Medicines.filter(
          (medicine) => medicine.medicineId !== medicineId
        ),
      });
    },
      (error) => {
        alert("Unable to delete medicine");
      }
    );
  }
  placeOrder = (cartId=16, medicineId) => {
    if (window.confirm("Click OK to confirm the order !") === true) {
      axios.post(`http://localhost:8089/api/v1/order/${cartId}/${medicineId}`).then((response) => {
        alert("Order has been placed successfully");
        CartService.viewCartInfo().then((response) => {
          this.setState({ Carts: response.data })
        });
        this.setState({
          Medicines: this.state.Medicines.filter(
            (medicine) => medicine.medicineId !== medicineId
          ),
        });
      },
        (error) => {
          alert("Unable to place the order");
        }
      );
    }
    else {
      alert("Request was cancelled !");
    }
  };
  render() {
    return (
      <div style={{ 
        backgroundImage: `url("https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000")` 
      }}>
        <NavBarCustomer/>
        <br></br>
        <h3 className="text-center">Shopping Cart</h3>
        <br></br>
        <div className="container">
          <div style={{ backgroundColor: "#eee",boxShadow: "2px 2px 5px black" }}>
            <div >
              
              <div className="justify-content-center align-items-center">

                <div>
                  <div>
                    <div className="p-4">
                      <div>
                        <div lg="12">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <div>
                              <h5 className="mb-0">You have {this.state.Carts.quantity} items in your cart</h5>
                            </div>
                          </div>
                          <div>
                            Medicines:
                            <br></br>
                            <hr></hr>
                            <br></br>
                          {
                            this.state.Medicines.length > 0 ? this.state.Medicines.map((medicine) =>
                              <div className="mb-3">
                                <div>
                                  <div key={medicine.medicineId} className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                      <div>
                                      <img  src={"/images/"+medicine.medicineName+".jpg"}
                                          fluid className="rounded-3" style={{ width: "65px" }}
                                          alt="Image not available" />
                                      </div>
                                      <div className="ms-3 alignLeft">
                                        <div tag="h5">
                                          {medicine.medicineName}
                                        </div>
                                        <button variant="success" className='btn btn-success' onClick={() => {
                                          this.placeOrder(this.state.Carts.cartId, medicine.medicineId);
                                        }}>
                                          Place the order
                                        </button>
                                      </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center">
                                      <div style={{ width: "80px" }}>
                                        <div tag="h5" className="mb-0">
                                          ₹{medicine.medicineCost}
                                        </div>
                                      </div>
                                      <button variant="warning" className='btn btn-dark' onClick={() => {
                                        this.deleteMedicine(this.state.Carts.cartId, medicine.medicineId);
                                      }}>Delete
                                        <div />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                
                              </div>): "Cart is empty!"
                          }

</div>

                          <div className="mb-3">
                          <br></br>
                                <hr></hr>
                                <br></br>
                            <div>
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                  <div className="ms-3">
                                    <div tag="h5">
                                      Total Cost
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                  <div style={{ width: "80px" }}>
                                    <div tag="h5" className="mb-0">
                                      ₹{this.state.Carts.cost}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <button variant="danger" className='btn btn-danger' onClick={() => {
                            this.deleteAll(this.state.Carts.cartId);
                          }}>
                            Delete All
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



