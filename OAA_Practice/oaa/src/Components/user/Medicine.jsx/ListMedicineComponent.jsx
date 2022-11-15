import React, { Component } from 'react'
import MedicineServices from '../../../services/MedicineServices';
import NavBarCustomer from '../NavBarCustomer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

let CartId = 1;
  function ListMedicineComponent() {
    const navigate= useNavigate();
    const [Medicines,setMedicines]= useState([]);

    const getMedicines = async (e) => {
        const medicineInfo = await MedicineServices.showAllMedicine();
        setMedicines(medicineInfo.data);
    };
    useEffect(() => {
        getMedicines();
      }, []);

    const add= (id) => {
        if (window.confirm("Click OK to confirm adding to cart !") === true){
          MedicineServices.addToCart(CartId,id).then((response)=>
          {
            console.log(response);
            alert("Medicine Added to Your Cart Successfully");
           // navigate("/customerCart");
          },
          (error) => {
            console.log(error.response.data);
            alert(error.response.data.exceptionMessage);
          }
        );
        } else {
          alert("You have cancelled the request");
        }
        
      };



        return (
            <div>
                <NavBarCustomer/>
                <br></br>
                <div className = "card col-md-8 offset-md-2" >
                <h2 className = "text-center" > Medicines </h2>
                <div className='text-home-page'>
                <button onClick={()=>navigate("/medicineCategories")} style={{marginTop:'100px'}}> View By Category!</button>
                </div>
                        
                <div className="row row-cols-3" style={{ alignItems:"center",}}>
                {
                Medicines.length > 0 ? Medicines.map((medicine)=>(
                    <div className="col" style={{ alignContent:"center"}}>
                <div className="card"style={{ margin: "2rem" }} key={medicine.medicineId} >
                <img className="center" src={"/images/"+medicine.medicineName+".jpg"}  alt="Not found" style={{height:200,width:120,alignContent:"center",marginLeft: "80px"}}></img>
                <div className="card-body" style={{ color: "black" }}>
                    {/* <div className = "row" >
                        <label> Medicine Id: { medicine.medicineId} </label>
                    </div> */}
                    <div className = "row" >
                        <label><b> Medicine Name: </b>{ medicine.medicineName}</label>
                    </div>
                    <div className = "row" >
                        <label><b> Cost: </b>{ medicine.medicineCost}</label>
                    </div>
                    <div className = "row" >
                        <label><b> Manufacturing Date: </b>{ medicine.mfd }</label>
                    </div>
                    <div className = "row" >
                        <label><b> Expiry Date: </b>{ medicine.expiryDate }</label>
                    </div>
                    <div className = "row" >
                        <label><b> Manufactured by: </b>{ medicine.company }</label>
                    </div>
                    <br></br>
                    <div>
                            <Link to={`/customercart`}><button style={{marginLeft: "10px"}} className='btn btn-dark' onClick={()=>{add(medicine.medicineId)}} >Add to Cart</button></Link>
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


export default ListMedicineComponent
