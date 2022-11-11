import React, { Component } from "react";
import { Link } from "react-router-dom";
import MedicineService from "./MedicineService";
import NavBarAdmin from "../NavBarAdmin";


class MedicineComponent extends Component {
    // Step 1:
    constructor(props) {
      super(props);
      this.state = {
        Medicines: [],
      };
    }
    //Step 2:
    componentDidMount() {
        MedicineService.showAllMedicine().then((Response) => {
        this.setState({ Medicines: Response.data });
        console.log(this.state.Medicines);
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
            {this.state.Medicines.length === 0
              ? "No Record "
              : this.state.Medicines.map((Medicines, index) => (
                  <div
                    className="card"
                    style={{ margin: "2rem" }}
                    key={Medicines.id}
                  >
                    <div className="jumbotron">
                      <div className="card-body" style={{ color: "black" }}>
                        <h5 className="card-title">{index + 1}</h5>
                        <h5 className="card-title">
                        Medicine Id:&nbsp;{Medicines.medicineId}
                        </h5>
                        <h5 className="card-text">
                        Medicine Name:&nbsp;{Medicines.medicineName}
                        </h5>
                        <h5 className="card-text">
                        Medicine Cost:&nbsp;{Medicines.medicineCost}
                        </h5>
                        <h5 className="card-text">
                          Mfd:&nbsp;{Medicines.Mfd}
                        </h5>
                        <h5 className="card-text">
                          Expiry Date:&nbsp;{Medicines.expiryDate}
                        </h5>
                        <h5 className="card-text">
                          Company:&nbsp;{Medicines.company}
                        </h5>
                        {/* <h5 className="card-text">
                          Quantity:&nbsp;{Orders.quantity}
                        </h5> */}
                        <h5 className="card-text">
                        Category Id:&nbsp;{Medicines.category.categoryId}
                        </h5>
                        <h5 className="card-text">
                        Category Name:&nbsp;{Medicines.category.categoryName}
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
  
  export default MedicineComponent;