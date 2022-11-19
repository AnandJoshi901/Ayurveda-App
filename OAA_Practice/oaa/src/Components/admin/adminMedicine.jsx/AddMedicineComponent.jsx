import React, { Component } from 'react'
import { useState } from "react";
import axios from "axios";
import MedicineService from "./MedicineService";

import { Link, renderMatches, useNavigate } from "react-router-dom";
import MedicineServices from '../../../services/MedicineServices';
// import Navbaradmin from "../Navbar/navbaradmin";

function AddMedicineComponent() {
    const navigate = useNavigate();
    const [Medicines, setMedicine] = useState({
        medicineId: "",
        medicineName: "",
        medicineCost: "",
        mfd: "",
        expiryDate: "",
        company: "",
        category: {
          categoryId:"1",
          categoryName:"Pain Relief"
        }
    });
    //Step 3:
    const onInputChange = (e) => {
      setMedicine({ ...Medicines, [e.target.name]: e.target.value });
    };
    const {
      medicineId,
      medicineName,
      medicineCost,
      mfd,
      expiryDate,
      company,
      category
    } = Medicines;
  
    const FormHandle = (e) => {
      e.preventDefault();
      addDataToServer(Medicines);
    };
    const addDataToServer = (data) => {
        MedicineServices.addMedicine(data).then(
        (response) => {
          console.log(response);
          
          alert("Medicine Added Successfully");
          navigate("/AdminListMedicines");
        },
        (error) => {
          console.log(error.response.data);
          alert("Operation failed");
        }
      );
    };
    const onDropdownChange= (e) => {
        if(e.target.value === "1") {
            setMedicine({...Medicines, category: {
                categoryId:1,
                categoryName: "Pain Relief"
            }});
        }
        if(e.target.value === "2") {
            setMedicine({...Medicines, category: {
                categoryId:2,
                categoryName: "Respiratory Care"
            }});
        }
        if(e.target.value === "3") {
            setMedicine({...Medicines, category: {
                categoryId:3,
                categoryName: "Skin Care"
            }});
        }
        if(e.target.value === "4") {
          setMedicine({...Medicines, category: {
              categoryId:4,
              categoryName: "Anti-infectives"
          }});
      }
      if(e.target.value === "7") {
        setMedicine({...Medicines, category: {
            categoryId:5,
            categoryName: "Homeopathic Medicines"
        }});
    }
        
    };
    return (
      <div>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
            <div className="jumbotron">
              <h1 className="display-4 text-center">Add Medicine</h1>
              <br></br>
              <hr></hr>
              <br></br>
              <br></br>
              <div>
                <form onSubmit={(e) => FormHandle(e)}  className="col-mt-6">
                <div className="row mt-3">
                <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Medicine Id</label>
                    <input
                      type="Id"
                      className="form-control"
                      name="medicineId"
                      placeholder="Enter Medicine Id"
                      required
                      value={medicineId}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  </div>
                  <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Medicine Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="medicineName"
                      placeholder="Enter Medicine Name"
                      required
                      value={medicineName}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  </div>
                  </div>


                  <div className="row mt-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Medicine Cost</label>
                    <input
                      type="number"
                      className="form-control"
                      name="medicineCost"
                      placeholder="Enter Medicine Cost"
                      required
                      value={medicineCost}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  </div>
                  <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Manufactured Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="mfd"
                      required
                      value={mfd}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  </div>
                  </div>


                  <div className="row mt-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Expiry Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="expiryDate"
                    //   placeholder="Enter Expiry Date"
                      required
                      value={expiryDate}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  </div>
                  <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="company"
                      placeholder="Enter Company Name"
                      required
                      value={company}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  </div></div>

                  {/* <div class="form-group">
                    <label for="exampleInputPassword1">Category Id</label>
                    <input
                      type="text"
                      class="form-control"
                      name="categoryId"
                      placeholder="Enter Category Id"
                      required
                      value={categoryId}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Category Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="categoryName"
                      placeholder="Enter Category Name"
                      required
                      value={categoryName}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div> */}
  
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Category  :&emsp;  </label>
                    <select className="form-select" onChange={(e) => onDropdownChange(e)}>
                        <option value="1">Pain Relief</option>
                        <option value="2">Respiratory Care</option>
                        <option value="3">Skin Care</option>
                        <option value="4">Anti-infectives</option>
                        <option value="7">Homepathic Medicines</option>
                        
                    </select>
                  </div>
                  <br/>
                  <div className="container text-center">
                    <button
                    id="addbtn"
                    type="submit"
                    className="btn btn-secondary"
                    //   className="btn btn-warning"
                    //   type="submit"
                    >
                      Add Medicine
                    </button>
                    <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AddMedicineComponent;