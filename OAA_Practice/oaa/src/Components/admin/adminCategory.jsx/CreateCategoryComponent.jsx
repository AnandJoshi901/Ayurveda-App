import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";


function CreateCategoryComponent() {
  //Step 1:
  const navigate=useNavigate();
  const [category, setCategory] = useState({
    categoryId:"",
    categoryName: "",
  });
  //Step 3:
  const onInputChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  const {
    categoryId,
    categoryName,
  } = category;

  const FormHandle = (e) => {
    e.preventDefault();
    addDataToServer(category);
  };
  const addDataToServer = (data) => {
    axios.post("http://localhost:8089/api/v1/category", data).then(
      (response) => {
        console.log(response);
        alert("Category Added Successfully");
        navigate("/listCategories");
      },
      (error) => {
        console.log(error);
        alert("Operation failed");
      }
    );
  };
  return (
    <div>
       <Navbar/>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
          <div className="jumbotron">
            <h1 className="display-4 text-center">Add Category!</h1>
            <br></br>
            <hr></hr>
            <br></br>
            <div>
              <form onSubmit={(e) => FormHandle(e)}>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Category Id</label>
                  <input
                    type="text"
                    className="form-control"
                    name="categoryId"
                    placeholder="Enter Category Id"
                    required
                    value={categoryId}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Category Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="categoryName"
                    placeholder="Enter Category Name"
                    required
                    value={categoryName}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                
                <div className="container text-center">
                  <button
                    id="addbtn"
                    type="submit"
                    class="btn btn-secondary" 
                  >
                    Add Category
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
export default CreateCategoryComponent;