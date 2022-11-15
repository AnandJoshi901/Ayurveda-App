import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBarCustomer from "../NavBarCustomer";
import { Link } from "react-router-dom";
import MedicineServices from "../../../services/MedicineServices";
let cartid = 1;
function ViewMedicineByCategoryId_user() {
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

    const add= (id) => {
        if (window.confirm("Click OK to confirm adding to cart !") === true){
          MedicineServices.addToCart(cartid,id).then((response)=>
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
                <h3 className = "text-center" > Medicines </h3>
                <div className="row row-cols-3">
                {
                Medicines.length > 0 ? Medicines.map((medicine)=>(
                    <div className="col">
                <div className="card"style={{ margin: "2rem" }} key={medicine.medicineId} >
                <img className="center" src={"/images/"+medicine.medicineName+".jpg"} alt="Not found" style={{height:200,width:100,marginLeft: "80px"}}></img>
                <div className="card-body" style={{ color: "black" }}>
                    {/* <div className = "row" >
                        <label> Medicine Id: { medicine.medicineId} </label>
                    </div> */}
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
                            <Link to={`/Customercart`}><button style={{marginLeft: "10px"}} className='btn btn-dark' onClick={()=>{add(medicine.medicineId)}}>Add to Cart</button></Link>
                        </div>
                    </div>
                </div>
                </div>
                )):"No Medicines Available"}
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
  );
}

export default ViewMedicineByCategoryId_user