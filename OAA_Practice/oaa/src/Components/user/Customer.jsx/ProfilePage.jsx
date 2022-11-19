import React, { Component } from "react";
import CustomerService from "../../../services/CustomerService";
import { Link } from "react-router-dom";
import 'bootstrap/dist//css/bootstrap.min.css'
import NavBarCustomer from "../NavBarCustomer";

let customerId=21;

class ProfilePage extends Component {
  
  // Step 1:
  constructor(props) {
    super(props);
    this.state = {
      customer: {},
    };
  }
  //Step 2:
  componentDidMount() {
    CustomerService.viewCustomerBycustomerId(customerId).then((Response) => {
      this.setState({ customer: Response.data });
    });
  }

  render() {
    return (
      <div style={{ 
        backgroundImage: `url("https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000")` 
      }}>
        <NavBarCustomer />
        <div className="container" >
          <br></br>
          
        <h3 className = "text-center"> Your Details</h3>
          <br />
          <div className="card " style={{ boxShadow: "2px 2px 5px black" }}>
            <br />
            <div className="card-body" style={{ color: "black" }}>
            <h5 className="card-text">
                Customer Id &nbsp; : &nbsp;{this.state.customer.customerId}
              </h5>
              <h5 className="card-title">
                Customer Name &nbsp; :&nbsp; {this.state.customer.customerName}
              </h5>
              <h5 className="card-text">
                Email ID &nbsp; : &nbsp; {this.state.customer.emailId}
              </h5>
              <h5 className="card-text">
                Mobile Number &nbsp; : &nbsp;{this.state.customer.mobileNumber}
              </h5>
              
              {/* <div className="d-grid gap-2"> */}
                <button id="addbtn" className="btn btn-secondary" type="button">
                  <Link
                    id="addbtn"
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/customer/updatecustomer/${this.state.customer.customerId}`}
                  >
                    <strong>Update</strong>
                  </Link>{" "}
                </button>
              {/* </div> */}
            </div>
          </div>
        </div><br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}
export default ProfilePage;