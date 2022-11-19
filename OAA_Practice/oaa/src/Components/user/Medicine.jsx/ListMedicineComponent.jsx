import React, { Component } from 'react'
import MedicineServices from '../../../services/MedicineServices';
import NavBarCustomer from '../NavBarCustomer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";


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
          MedicineServices.addToCart(16,id).then((response)=>
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




  /*
class ListMedicineComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Medicines: []
        }
        this.addMedicine = this.addMedicine.bind(this);
        this.editMedicine = this.editMedicine.bind(this);
        this.deleteMedicine = this.deleteMedicine.bind(this);
    }

    deleteMedicine(id){
        MedicineServices.deleteMedicine(id).then( res => {
            this.setState({Medicines: this.state.Medicines.filter(Medicine => Medicine.id !== id)});
        });
    }
    viewMedicine(id){
        this.props.history.push(`/view-Medicine/${id}`);
    }
    editMedicine(id){
        this.props.history.push(`/add-Medicine/${id}`);
    }

    componentDidMount(){
        MedicineServices.showAllMedicine().then((res) => {
            this.setState({ Medicines: res.data});
            console.log(res.data)
        });
    }

    addMedicine(){
        this.props.history.push('/add-Medicine/_add');
    }
    */
    

        return (
            <div style={{ 
              backgroundImage: `url("https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000")` 
            }}>
                <NavBarCustomer/>
                <br></br>
                <div className = "card col-md-8 offset-md-2" style={{ boxShadow: "2px 2px 5px black" }}>
                  <br></br>
                <h2 className = "text-center" > Medicines </h2>
                <br></br>
                <hr></hr>
                <div className='text-home-page'>
                <button onClick={()=>navigate("/medicineCategories")} style={{marginTop:'100px'}}> View By Category!</button>
                </div>
                        
                <div className="row row-cols-3" style={{ alignItems:"center",}}>
                {
                Medicines.length > 0 ? Medicines.map((medicine)=>(
                    <div className="col" style={{ alignContent:"center"}}>
                <div className="card"style={{ margin: "2rem",boxShadow: "2px 2px 5px black" }} key={medicine.medicineId} >
                <img className="center" src={"/images/"+medicine.medicineName+".jpg"}  alt="Not found" style={{height:200,width:120,alignContent:"center",marginLeft: "80px"}}></img>
                <hr></hr>
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
                            <Link to={`/customercart`}><button style={{marginLeft: "50px"}} className='btn btn-dark' onClick={()=>{add(medicine.medicineId)}} >Add to Cart</button></Link>
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

////////////////////////
/*

import 'bootstrap/dist//css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbarcust from '../Navbar/navbarcustomer';
import MobileService from "./MobileService";
function MobileComponent() {
    const navigate= useNavigate();
    const [mobiles,setMobiles]= useState([]);
    const [cname,setCname]=useState("");
    const [id,setId]= useState("1");
    const [min,setMin]= useState(5000);
    const [max,setMax]= useState(10000);
    const getMobiles = async (e) => {
        const mobileInfo = await MobileService.getAllMobiles();
        setMobiles(mobileInfo.data);
    };
    useEffect(() => {
        getMobiles();
      }, []);
    
    const dropDownChange= (e) => {
      setId(e.target.value);
    };
    const add= (id) => {
      if (window.confirm("Click OK to confirm adding to cart !") === true){
        MobileService.addToCart(1,id).then((response)=>
        {
          console.log(response);
          alert("Mobile Added to Your Cart Successfully");
          navigate("/mobile");
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
    const checkPrice= (e) => {
      e.preventDefault();
      if(min>=max){
        alert("Minimum price should be less than maximum price");
      }else {
        navigate(`/byprice/${min}/${max}`);
      }
    }
    return(
        <div>
        <Navbarcust></Navbarcust>
        <div>
          <details className='card'>
            <summary>
            <label>Search and Filters :&emsp;</label>
            </summary>
            <div>
            <select onChange={(e)=>dropDownChange(e)}>
                        <option value="1">Basic Phone</option>
                        <option value="2">Feature Phone</option>
                        <option value="3">Smart Phone</option>
            </select>
              &emsp; &emsp;
              <button className="btn btn-primary" type="button" style={{color:"white"}} onClick={()=>{navigate(`/bycategory/${id}`)}}>
                  View by Category
              </button>
            </div><br/>
            <form  onSubmit={()=>{navigate(`/bycompany/${cname}`)}}>
            <input
                      type="text"
                      name="companyName"
                      placeholder="Enter Company Name"
                      required
                      value={cname}
                      onChange={(e) =>setCname(e.target.value)}
            />
              &emsp; &emsp;
              <button className="btn btn-primary" type="submit" style={{color:"white"}}>
                  Search by company
              </button>
            </form><br/>
            <form  onSubmit={(e)=>{checkPrice(e)}}>
            <input
                      type="number"
                      name="min"
                      placeholder="Enter minimum price"
                      required min="0" max="200000" step="1000"
                      value={min}
                      onChange={(e) =>setMin(e.target.value)}
            />
              &emsp; &emsp;
            <input
                      type="number"
                      name="min"
                      placeholder="Enter maximum price"
                      required min="1000" max="200000" step="1000"
                      value={max}
                      onChange={(e) =>setMax(e.target.value)}
            />
              &emsp; &emsp;
              <button className="btn btn-primary" type="submit" style={{color:"white"}}>
                  Search by price range
              </button>
            </form><br/>
          </details>
            </div>
            <br/>
          <div className="row row-cols-3">
          {mobiles.length === 0
          ? <div className='col-sm-12'>No Record</div>
          : mobiles.map((mobile, index) => (
              <div className="col">
                <div
                className="card"
                style={{ margin: "2rem" }}
                key={mobile.id}
              >
                <img className="center" src={"/images/"+mobile.mobileName+".jpg"} alt="Not found" style={{height:125,width:125}}></img>
                <div>
                  <div className="card-body" style={{ color: "purple" }}>
                    <h5 className="card-title">
                      Mobile Name &nbsp; :&nbsp;{mobile.mobileName}
                    </h5>
                    <h5 className="card-text">
                      Mobile Cost &nbsp; :&nbsp;₹{mobile.mobileCost}
                    </h5>
                    <h5 className="card-text">
                      Company Name &nbsp; :&nbsp;{mobile.companyName}
                    </h5>
                    <div className="d-grid gap-4">
                      <button id="addbtn" className="btn btn-info" type="button" onClick={()=>{navigate(`/view-mobile/${mobile.mobileId}`)}}>
                          View Details
                      </button>
                      <button className="btn btn-warning" type="button" onClick={()=>{add(mobile.mobileId)}}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
          
        </div>
    )
}

export default MobileComponent;


///////////////////////////////////////////////

/*

<div>
                 <h2 className="text-center">Medicines List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addMedicine}> Add Medicine</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Medicine First Name</th>
                                    <th> Medicine Last Name</th>
                                    <th> Medicine Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Medicines.map(
                                        Medicine => 
                                        <tr key = {Medicine.id}>
                                             <td> { Medicine.firstName} </td>   
                                             <td> {Medicine.lastName}</td>
                                             <td> {Medicine.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editMedicine(Medicine.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteMedicine(Medicine.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewMedicine(Medicine.id)} className="btn btn-primary">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>

            */