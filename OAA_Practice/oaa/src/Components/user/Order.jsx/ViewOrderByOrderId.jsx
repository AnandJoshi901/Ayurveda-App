import React, { Component } from "react";
import 'bootstrap/dist//css/bootstrap.min.css';
import axios from "axios";
import NavBarCustomer from "../NavBarCustomer";
import userOrderService from "./userOrderService";
let customerId = 1;
class ViewOrderByCustomerId extends Component{
    constructor(props){
        super(props);
        this.state={
            Orders:[
            ],
            
        };
    }
    componentDidMount(){
        userOrderService.viewOrder(customerId).then((Response)=> {
            this.setState({Orders:Response.data});
        });
    }
    cancelOrder = (id) =>{
        if (window.confirm("Are you sure, you want to cancel the order?") === true){
            axios.delete(`http://localhost:8089/api/v1/order/${id}`).then(
            (response) => {
                alert("Order cancelled Successfully");
                userOrderService.viewOrder(customerId).then((Response)=> {
                    this.setState({Orders:Response.data});
                });
            },
            (error) => {
                alert("Unable to cancel the order");
            }
        );
        } else {
            alert("You have cancelled the request");
          }
        
    };
    
    render(){
        return(
          <div>
          <NavBarCustomer/><br></br>
                 <br></br>
                 <div className = "card col-md-8 offset-md-2" >
                <h3 className = "text-center" >Your Orders </h3>
                
                
                </div>
                <br></br>
                <div className="card col-md-10 offset-md-1" style={{ backgroundColor: "#eee" }}>
                    <br></br>
                    <div className="row row-cols-5" style={{ alignItems:"center"}}>
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
                        Total Cost:&nbsp;{Orders.totalCost}
                      </h5>
                      <h5 className="card-text">
                        Status:&nbsp;{Orders.status}
                      </h5>
                      <h5 className="card-text">
                        Medicine :&nbsp;{Orders.medicine.medicineName}
                      </h5>
                      {/* <div className="d-grid gap-2"> */}
                        <button
                          style={{marginLeft: "20px"}} className='btn btn-dark'
                          onClick={() => {
                            this.cancelOrder(Orders.orderId);
                          }}
                        >
                          Cancel Order
                        </button>
                      {/* </div> */}
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
        )
    }
}
export default ViewOrderByCustomerId;





























// import React from "react";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import NavBarCustomer from "../NavBarCustomer";

// function ViewOrderByCustomerIdComponent() {
//     const { id=1 } = useParams();
//     const URL = `http://localhost:8089/api/v1/orderbycustomer/1`;
  
//     useEffect(() => {
//         viewOrder();
//     }, []);
//     const [Orders, setOrder] = useState({
// //         Orders:{
// //             orderId:"",
// //             orderDate:"",
// //             dispatchDate:"",
// //             cost:"",
// //             totalCost:"",
// //             status:"",
// //             customer:{
// //                 customerId: "",
// //                 customerName: "",
// //                 mobileNumber:"",
// //                 emailId: "",
// //                 password: "",
// //             },
// //             Medicines:{
// //                 medicineId: "",
// //             medicineName: "",
// //             medicineCost: "",
// //             mfd: "",
// //             expiryDate: "",
// //             company: "",
// //             category: {
// //               categoryId:"1",
// //               categoryName:"Pain Relief"}}
            
// // }});
// Orders:[]
//     });
  
//     const viewOrder = async (e) => {
//       const res = await axios.get(URL)
//        console.log(res.data);
//        setOrder(res.data);
//     };

//   return (


//     <div>
//                 <br></br>
//                 <div className = "card col-md-6 offset-md-3">
//                     <h3 className = "text-center"> Customer Details</h3>
//                     <div className = "card-body">

//                     {Orders.length === 0
//               ? "No Record "
//               : Orders.map((Orders) => (
//                 <div
//                     className="card"
//                     style={{ margin: "2rem" }}
//                     key={Orders.id}
//                   >
//                     <div className="jumbotron">
//                       <div className="card-body" style={{ color: "black" }}>

//                     <h5 className="card-title">
//                           Order Id:&nbsp;{Orders.orderId}
//                           </h5>

                        
//                         <h5 className="card-text">
//                           Order Date:&nbsp;{Orders.orderDate}
//                         </h5>
//                         <h5 className="card-text">
//                           Dispatch Date:&nbsp;{Orders.dispatchDate}
//                         </h5>
//                         <h5 className="card-text">
//                           Cost:&nbsp;{Orders.cost}
//                         </h5>
//                         <h5 className="card-text">
//                           Order status:&nbsp;{Orders.status}
//                         </h5>
//                         {/* <h5 className="card-text">
//                           Customer Name:&nbsp;{Orders.customer.customerName}
//                         </h5> */}
              

//                         </div>
//                     </div>
//                   </div>
//                 ))}

//                         {/* <div className = "row" >
//                             <label> Customer's Id: { customer.customerId } </label>
//                         </div>
//                         <div className = "row">
//                             <label> Customer's Name: { customer.customerName }</label>
//                         </div>
//                         <div className = "row">
//                             <label> Mobile Number: { customer.mobileNumber }</label>
//                         </div>
//                         <div className = "row">
//                             <label> Customer Email ID: { customer.emailId }</label>
//                         </div> */}
//                     </div>
// </div>
//                 </div>








//     // <div>
//     //             <br></br>
//     //             <div className = "card col-md-6 offset-md-3">
//     //                 <h3 className = "text-center"> Customer Details</h3>
//     //                 <div className = "card-body">




//     //                 <h5 className="card-text">
//     //                       Order Date:&nbsp;{Orders.orderDate}
//     //                     </h5>
//     //                     <h5 className="card-text">
//     //                       Dispatch Date:&nbsp;{Orders.dispatchDate}
//     //                     </h5>
//     //                     <h5 className="card-text">
//     //                       Cost:&nbsp;{Orders.cost}
//     //                     </h5>
//     //                     <h5 className="card-text">
//     //                       Order status:&nbsp;{Orders.status}
//     //                     </h5>
//     //                     <h5 className="card-text">
//     //                       Customer Name:&nbsp;{Orders.customer.customerName}
//     //                     </h5>




//     //                     {/* <div className = "row" >
//     //                         <label> Order Id: { Orders.orderId } </label>
//     //                     </div>
//     //                     <div className = "row">
//     //                         <label> Customer's Name: { Orders. }</label>
//     //                     </div>
//     //                     <div className = "row">
//     //                         <label> Mobile Number: { Orders.mobileNumber }</label>
//     //                     </div>
//     //                     <div className = "row">
//     //                         <label> Customer Email ID: { Orders.emailId }</label>
//     //                     </div> */}
//     //                 </div>

//     //             </div>
//     //         </div>
//   );
// }

// export default ViewOrderByCustomerIdComponent;
