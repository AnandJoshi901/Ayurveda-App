import { useState } from "react";
import MobileService from "./MobileService";
import { Link, useNavigate } from "react-router-dom";
import "../CSSStyles/Styles.css";
import 'bootstrap/dist//css/bootstrap.min.css';
import Navbaradmin from "../Navbar/navbaradmin";

function CreateMobileComponent() {
    const navigate = useNavigate();
    const [mobile, setMobile] = useState({
      mobileName: "",
      mobileCost: "",
      mfd: "",
      modelNumber: "",
      companyName: "",
      category: {}
    });
    //Step 3:
    const onInputChange = (e) => {
      setMobile({ ...mobile, [e.target.name]: e.target.value });
    };
    const {
      mobileName,
      mobileCost,
      mfd,
      modelNumber,
      companyName,
      category
    } = mobile;
  
    const FormHandle = (e) => {
      e.preventDefault();
      addDataToServer(mobile);
    };
    const addDataToServer = (data) => {
      MobileService.addMobile(data).then(
        (response) => {
          console.log(response);
          alert("Mobile Added Successfully");
          navigate("/mobileadmin");
        },
        (error) => {
          console.log(error.response.data);
          alert("Operation failed");
        }
      );
    };
    const onDropdownChange= (e) => {
        if(e.target.value === "1") {
            setMobile({...mobile, category: {
                categoryId:1,
                categoryName: "Basic Phone"
            }});
        }
        if(e.target.value === "2") {
            setMobile({...mobile, category: {
                categoryId:2,
                categoryName: "Feature Phone"
            }});
        }
        if(e.target.value === "3") {
            setMobile({...mobile, category: {
                categoryId:3,
                categoryName: "Smart Phone"
            }});
        }
    };
    return (
      <div>
        <Navbaradmin/>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
            <div className="jumbotron">
              <h1 class="display-4 text-center">Add Mobile</h1>
              <div>
                <form onSubmit={(e) => FormHandle(e)}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Mobile Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="mobileName"
                      placeholder="Enter Mobile Name"
                      required
                      value={mobileName}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Mobile Cost</label>
                    <input
                      type="number"
                      class="form-control"
                      name="mobileCost"
                      placeholder="Enter Mobile Cost"
                      required
                      value={mobileCost}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Manufactured Date</label>
                    <input
                      type="date"
                      class="form-control"
                      name="mfd"
                      required
                      value={mfd}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Model Number</label>
                    <input
                      type="text"
                      class="form-control"
                      name="modelNumber"
                      placeholder="Enter Model Number"
                      required
                      value={modelNumber}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Company Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="companyName"
                      placeholder="Enter Company Name"
                      required
                      value={companyName}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
  
                  <div class="form-group">
                    <label for="exampleInputPassword1">Category  :&emsp;  </label>
                    <select className="form-select" onChange={(e) => onDropdownChange(e)}>
                        <option value="1">Basic Phone</option>
                        <option value="2">Feature Phone</option>
                        <option value="3">Smart Phone</option>
                    </select>
                  </div>
                  <br/>
                  <div className="container text-center">
                    <button
                      className="btn btn-warning"
                      type="submit"
                    >
                      Add Mobile
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
export default CreateMobileComponent;