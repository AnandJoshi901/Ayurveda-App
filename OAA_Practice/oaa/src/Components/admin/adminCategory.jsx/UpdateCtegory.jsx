import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

function UpdateCategory() {
  const { id } = useParams(); // getting url id
  const URL = `http://localhost:8089/api/v1/category/id/${id}`;
  const navigate=useNavigate();

  useEffect(() => {
    getCategoryById();
  }, []);
  const [category, setCategory] = useState({
    categoryId:"",
    categoryName: "",
  });

  const {
    categoryId,
    categoryName, } = category;
  const onInputChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const FormHandle = (e) => {
    e.preventDefault();
    updateDataToServer(category);

  };
  const updateDataToServer = (data) => {
    axios.put(URL, data).then(
      (response) => {
        alert("Category Updated Successfully");
        navigate("/listMedicines");
      },
      (error) => {
        alert("Operation failed");
      }
    );
  };

  const getCategoryById = async (e) => {
    const categoryInfo = await axios.get(URL);
    setCategory(categoryInfo.data);
  };

  return (
    <div>
       <Navbar/>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
          <div className="jumbotron">
            <h1 className="display-4 text-center">Update category!</h1>
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
                  <button id="addbtn"
                    type="submit"
                    className="btn my-2 text-center mr-2"
                  >
                    Update Category
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
export default UpdateCategory;