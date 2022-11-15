// import CartService from './CartService';
// import React, { Component } from 'react';
// import axios from "axios";
// import Navbarcust from "../Navbar/navbarcustomer";
// import Button from 'react-bootstrap/Button';
// // import { BsFillTrashFill } from 'react-icons/bs'; //npm install react-icons --save
// // import {
// //   MDBCard,
// //   MDBCardBody,
// //   MDBCardImage,
// //   MDBCol,
// //   MDBContainer,
// //   MDBRow,
// //   MDBTypography,
// // } from "mdb-react-ui-kit"; //npm i mdb-react-ui-kit :Material Design for bootstrap 
// import "../CSSStyles/cart.css";

// export default class UserCartComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mobiles: [],
//       cartInfo: []
//     };
//   }
//   componentDidMount() {
//     CartService.getMobiles().then((response) => {
//       this.setState({ mobiles: response.data })
//     });
//     CartService.getViewCartInfo().then((response) => {
//       this.setState({ cartInfo: response.data })
//     });
//   }
//   deleteAll = (cartId) => {
//     axios.delete(`http://localhost:8289/cart/removeAll/${cartId}`).then((response) => {
//       // alert("Cart has been emptied successfully");
//       CartService.getViewCartInfo().then((response) => {
//         this.setState({ cartInfo: response.data })
//       });
//       this.setState({
//         mobiles: []
//       });
//     },
//       (error) => {
//         alert("Could not empty the cart");
//       }
//     );
//   }
//   deleteMobile = (cartId, mobileId) => {
//     axios.delete(`http://localhost:8289/cart/remove/${cartId}/${mobileId}`).then((response) => {
//       // alert("Mobile has been deleted successfully");
//       CartService.getViewCartInfo().then((response) => {
//         this.setState({ cartInfo: response.data })
//       });
//       this.setState({
//         mobiles: this.state.mobiles.filter(
//           (mobile) => mobile.mobileId !== mobileId
//         ),
//       });
//     },
//       (error) => {
//         alert("Could not delete the mobile");
//       }
//     );
//   }
//   placeOrder = (cartId, mobileId) => {
//     if (window.confirm("Click OK to confirm the order !") === true) {
//       axios.post(`http://localhost:8289/cart/placeOrder/${cartId}/${mobileId}`).then((response) => {
//         alert("Order has been placed successfully");
//         CartService.getViewCartInfo().then((response) => {
//           this.setState({ cartInfo: response.data })
//         });
//         this.setState({
//           mobiles: this.state.mobiles.filter(
//             (mobile) => mobile.mobileId !== mobileId
//           ),
//         });
//       },
//         (error) => {
//           alert("Could not place the order");
//         }
//       );
//     }
//     else {
//       alert("You cancelled the request !");
//     }
//   };
//   render() {
//     return (
//       <>
//         <Navbarcust></Navbarcust>
//         <h3 className="text-center">Shopping Cart</h3>
//         <div className="container-fluid">
//           <section style={{ backgroundColor: "#eee" }}>
//             <MDBContainer >
//               <MDBRow className="justify-content-center align-items-center">

//                 <MDBCol>
//                   <MDBCard>
//                     <MDBCardBody className="p-4">
//                       <MDBRow>
//                         <MDBCol lg="12">
//                           <div className="d-flex justify-content-between align-items-center mb-4">
//                             <div>
//                               <h5 className="mb-0">You have {this.state.cartInfo.quantity} items in your cart</h5>
//                             </div>
//                           </div>

//                           {
//                             this.state.mobiles.map((mobile) =>
//                               <MDBCard className="mb-3">
//                                 <MDBCardBody>
//                                   <div key={mobile.mobileName} className="d-flex justify-content-between">
//                                     <div className="d-flex flex-row align-items-center">
//                                       <div>
//                                         <MDBCardImage
//                                           src={"/images/" + mobile.mobileName + ".jpg"}
//                                           fluid className="rounded-3" style={{ width: "65px" }}
//                                           alt="Image not available" />
//                                       </div>
//                                       <div className="ms-3 alignLeft">
//                                         <MDBTypography tag="h5">
//                                           {mobile.mobileName}
//                                         </MDBTypography>
//                                         <Button variant="success" onClick={() => {
//                                           this.placeOrder(this.state.cartInfo.cartId, mobile.mobileId);
//                                         }}>
//                                           Proceed to Buy
//                                         </Button>
//                                       </div>
//                                     </div>

//                                     <div className="d-flex flex-row align-items-center">
//                                       <div style={{ width: "80px" }}>
//                                         <MDBTypography tag="h5" className="mb-0">
//                                           ₹{mobile.mobileCost}
//                                         </MDBTypography>
//                                       </div>
//                                       <Button variant="warning" onClick={() => {
//                                         this.deleteMobile(this.state.cartInfo.cartId, mobile.mobileId);
//                                       }}>
//                                         <BsFillTrashFill />
//                                       </Button>
//                                     </div>
//                                   </div>
//                                 </MDBCardBody>
//                               </MDBCard>)
//                           }



//                           <MDBCard className="mb-3">
//                             <MDBCardBody>
//                               <div className="d-flex justify-content-between">
//                                 <div className="d-flex flex-row align-items-center">
//                                   <div className="ms-3">
//                                     <MDBTypography tag="h5">
//                                       Total Cost
//                                     </MDBTypography>
//                                   </div>
//                                 </div>
//                                 <div className="d-flex flex-row align-items-center">
//                                   <div style={{ width: "80px" }}>
//                                     <MDBTypography tag="h5" className="mb-0">
//                                       ₹{this.state.cartInfo.cost}
//                                     </MDBTypography>
//                                   </div>
//                                 </div>
//                               </div>
//                             </MDBCardBody>
//                           </MDBCard>

//                           <Button variant="danger" onClick={() => {
//                             this.deleteAll(this.state.cartInfo.cartId);
//                           }}>
//                             Delete All
//                           </Button>
//                         </MDBCol>
//                       </MDBRow>
//                     </MDBCardBody>
//                   </MDBCard>
//                 </MDBCol>
//               </MDBRow>
//             </MDBContainer>
//           </section>
//         </div>
//       </>
//     )
//   }
// }



