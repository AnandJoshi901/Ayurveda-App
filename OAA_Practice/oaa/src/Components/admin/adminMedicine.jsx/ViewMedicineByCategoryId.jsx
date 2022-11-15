

import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBarAdmin from "../NavBarAdmin";
import { Link } from "react-router-dom";
import MedicineService from "./MedicineService";

function ViewMedicineByCategoryId() {
    const { id } = useParams();
    const URL = `http://localhost:8089/api/v1/Category/${id}`;
  
    useEffect(() => {
      viewMedicineByCategoryId();
    }, []);
    const [Medicines, setMedicine] = useState({
        
        medicineId: "",
      medicineName: "",
      medicineCost:"",
      mfd: "",
      expiryDate: "",
      expiryDate:"",
      company: "",
      quantity:""

    });
  
    const viewMedicineByCategoryId = async (e) => {
      const res = await axios.get(URL)
       console.log(res.data);
       setMedicine(res.data);
    };

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
                <img className="center" src={"/images/"+medicine.medicineName+".jpg"}  alt="Not found" style={{height:200,width:100,alignContent:"center",marginLeft: "80px"}}></img>
                <div className="card-body" style={{ color: "black" }}>
                    <div className = "row" >
                        <label> Medicine Id: { medicine.medicineId} </label>
                    </div>
                    <div className = "row" >
                        <label> Medicine Name: { medicine.medicineName}</label>
                    </div>
                    <div className = "row" >
                        <label> Cost: { medicine.medicineCost}</label>
                    </div>
                    <div className = "row" >
                        <label> Manufacturing Date: { medicine.mfd }</label>
                    </div>
                    <div className = "row" >
                        <label> Expiry Date: { medicine.expiryDate }</label>
                    </div>
                    <div className = "row" >
                        <label> Manufactured by: { medicine.company }</label>
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
  );
}

export default ViewMedicineByCategoryId;