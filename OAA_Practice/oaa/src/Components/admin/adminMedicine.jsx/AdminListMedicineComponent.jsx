import React, { Component } from 'react'
import MedicineService from './MedicineService';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import NavBarAdmin from '../NavBarAdmin';

import 'bootstrap/dist//css/bootstrap.min.css';



function AdminListMedicineComponent() {

    const [Medicines, setMedicine] = useState({
        medicineId:""
    });


    const getMedicines = async (e) => {
        const medicineInfo = await MedicineService.showAllMedicine();
        setMedicine(medicineInfo.data);
    };
    useEffect(() => {
        getMedicines();
      }, []);
    const removeMedicine = (id) => {
        MedicineService.removeMedicine(id).then(
            (response) => {
              alert("Record Deleted Successfully");
              this.setState({
                Medicines: this.state.Medicines.filter(
                  (medicine) => medicine.medicineId !== id
                ),
              });
            },
          (error) => {
            alert("Unable to delete");
          }
        );
     };

// class AdminListMedicineComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//                 Medicines: []
//         }
//         this.addMedicine = this.addMedicine.bind(this);
//         this.editMedicine = this.editMedicine.bind(this);
//         this.deleteMedicine = this.deleteMedicine.bind(this);
//     }

//     deleteMedicine(id){
//         MedicineServices.deleteMedicine(id).then( res => {
//             this.setState({Medicines: this.state.Medicines.filter(Medicine => Medicine.id !== id)});
//         });
//     }

//     const deleteMobile = (id) => {
//         MobileService.deleteMobile(id).then(
//           (response) => {
//             alert("Record Deleted Successfully");
//             this.setState({
//               mobiles: this.state.mobiles.filter(
//                 (mobile) => mobile.mobileId !== id
//               ),
//             });
//           },
//           (error) => {
//             alert("Operation Failed Here");
//           }
//         );
//      };

//     viewMedicine(id){
//         this.props.history.push(`/view-Medicine/${id}`);
//     }
//     editMedicine(id){
//         this.props.history.push(`/add-Medicine/${id}`);
//     }

//     componentDidMount(){
//         MedicineServices.showAllMedicine().then((res) => {
//             this.setState({ Medicines: res.data});
//             console.log(res.data)
//         });
//     }

//     addMedicine(){
//         this.props.history.push('/add-Medicine/_add');
//     }

//     render() {
        return (
            <div>
                <NavBarAdmin/>
                <br></br>
                <div className = "card col-md-8 offset-md-2" >
                <h3 className = "text-center" > Medicines </h3>
                <div className="row row-cols-3" style={{ alignItems:"center"}}>
                {
                Medicines.length > 0 ? Medicines.map((medicine)=>(
                    <div className="col" style={{ alignContent:"center"}}>
                <div className="card"style={{ margin: "2rem" }} key={medicine.medicineId} >
                <img className="center" src={"/images/"+medicine.medicineName+".jpg"}  alt="Not found" style={{height:200,width:130,alignContent:"center",marginLeft: "50px"}}></img>
                <div className="card-body" style={{ color: "black" }}>
                    <div className = "row" >
                        <label> <b>Medicine Id: </b>{ medicine.medicineId} </label>
                    </div>
                    <div className = "row" >
                        <label> <b>Medicine Name: </b>{ medicine.medicineName}</label>
                    </div>
                    <div className = "row" >
                        <label><b> Cost: </b>{ medicine.medicineCost}</label>
                    </div>
                    <div className = "row" >
                        <label> <b>Manufacturing Date: </b>{ medicine.mfd }</label>
                    </div>
                    <div className = "row" >
                        <label><b> Expiry Date:</b> { medicine.expiryDate }</label>
                    </div>
                    <div className = "row" >
                        <label><b> Manufactured by: </b>{ medicine.company }</label>
                    </div>
                    <br></br>
                    <div>
                            <Link to={`/updateMedicine`}><button style={{marginLeft: "40px"}} className='btn btn-warning' >Update</button></Link>
                        
                            <Link to={`/AdminListMedicines`}><button style={{marginLeft: "10px"}} className='btn btn-danger' onClick={e => window.confirm('Are you sure, you want to delete the medicine?') ? removeMedicine(medicine.medicineId) : e.preventDefault()} >Delete</button></Link>
                        
        
                        </div>
                    
                    </div>
                    
                </div>
                <br></br>
                <br></br>
                <br></br>
                    
                </div>
                )):"No Medicines Available"}
                </div>
            </div>
        </div>
            
        )
    }


export default AdminListMedicineComponent







////////////////////////////////////

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import MedicineService from "./MedicineService";
// import NavBarAdmin from "../NavBarAdmin";


// class MedicineComponent extends Component {
//     // Step 1:
//     constructor(props) {
//       super(props);
//       this.state = {
//         Medicines: [],
//       };
//     }
//     //Step 2:
//     componentDidMount() {
//         MedicineService.showAllMedicine().then((Response) => {
//         this.setState({ Medicines: Response.data });
//         console.log(this.state.Medicines);
//       });
//     }
//     // deleteOrder = (bookingId) => {
//     //   axios
//     //     .delete(`http://localhost:8089/api/v1/order/${id}`)
//     //     .then(
//     //       (response) => {
//     //         alert("Record Deleted Successfully");
//     //         this.setState({
//     //           Orders: this.state.Orders.filter(
//     //             (Orders) => Orders.bookingOrderId !== bookingId
//     //           ),
//     //         });
//     //       },
//     //       (error) => {
//     //         alert("Operation Failed Here");
//     //       }
//     //     );
//     // };
//     render() {
//       return (
//         <div>
//           <NavBarAdmin/>
//           <div className="container">
//             {this.state.Medicines.length === 0
//               ? "No Record "
//               : this.state.Medicines.map((Medicines, index) => (
//                   <div
//                     className="card"
//                     style={{ margin: "2rem" }}
//                     key={Medicines.id}
//                   >
//                     <div className="jumbotron">
//                       <div className="card-body" style={{ color: "black" }}>
//                         <h5 className="card-title">{index + 1}</h5>
//                         <h5 className="card-title">
//                         Medicine Id:&nbsp;{Medicines.medicineId}
//                         </h5>
//                         <h5 className="card-text">
//                         Medicine Name:&nbsp;{Medicines.medicineName}
//                         </h5>
//                         <h5 className="card-text">
//                         Medicine Cost:&nbsp;{Medicines.medicineCost}
//                         </h5>
//                         <h5 className="card-text">
//                           Mfd:&nbsp;{Medicines.Mfd}
//                         </h5>
//                         <h5 className="card-text">
//                           Expiry Date:&nbsp;{Medicines.expiryDate}
//                         </h5>
//                         <h5 className="card-text">
//                           Company:&nbsp;{Medicines.company}
//                         </h5>
//                         {/* <h5 className="card-text">
//                           Quantity:&nbsp;{Orders.quantity}
//                         </h5> */}
//                         <h5 className="card-text">
//                         Category Id:&nbsp;{Medicines.category.categoryId}
//                         </h5>
//                         <h5 className="card-text">
//                         Category Name:&nbsp;{Medicines.category.categoryName}
//                         </h5>
                

                        
//                         {/* <div className="d-grid gap-2">
//                           <button
//                             id="addbtn"
//                             className="btn"
//                             onClick={() => {
//                               this.deleteOrder(Orders.bookingOrderId);
//                             }}
//                           >
//                             Delete
//                           </button>
//                         </div> */}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//           </div>
//         </div>
//       );
//     }
//   }
  
//   export default MedicineComponent;