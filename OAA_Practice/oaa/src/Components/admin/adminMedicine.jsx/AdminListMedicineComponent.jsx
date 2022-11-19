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
        return (
            <div style={{ 
                backgroundImage: `url("https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000")` 
              }}>
                <NavBarAdmin/>
                <br></br>
                <div className = "card col-md-8 offset-md-2" >
                <h3 className = "text-center" > Medicines </h3>
                <div className="row row-cols-3" style={{ alignItems:"center",boxShadow: "2px 2px 5px black"}}>
                {
                Medicines.length > 0 ? Medicines.map((medicine)=>(
                    <div className="col" style={{ alignContent:"center"}}>
                <div className="card"style={{ margin: "2rem",boxShadow: "2px 2px 5px black" }} key={medicine.medicineId} >
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