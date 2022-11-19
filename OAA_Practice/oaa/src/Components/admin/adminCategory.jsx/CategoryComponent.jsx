import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CategoryService from './CategoryService';
import axios from 'axios';
import NavBarAdmin from '../NavBarAdmin';


class CategoryComponent extends Component {
    // Step 1:
    constructor(props) {
        super(props);
        this.state = {
            category: []
        };
    }
    //Step 2:
    componentDidMount() {
        CategoryService.showAll().then((Response) => {
            
            this.setState({ category: Response.data })
            console.log(Response.data);
        });

    }
    deleteCategory = (id) => {
        axios.delete(`http://localhost:8089/api/v1/category/${id}`).then(
            (response) => {
                alert("Record Deleted Successfully");
                this.setState({
                    category: this.state.category.filter(category => category.categoryId !== id)
                });
            }, (error) => {
                alert("Operation Failed Here");
            }
        );
    };
    render() {
        return (

            <div  style={{ 
                backgroundImage: `url("https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000")` 
              }}>
                 <NavBarAdmin/>
                 <br></br>
                 <br></br>
                 <div className = "card col-md-8 offset-md-2" style={{ boxShadow: "2px 2px 5px lightblue",}} >
                <h3 className = "text-center" > Categories </h3>
                
                {/* <div className="row row-cols-3" style={{ alignItems:"center"}}></div> */}
                </div>
                <br></br>
                <div className="card col-md-8 offset-md-2" style={{ boxShadow: "2px 2px 5px lightblue" }}>
                    <br></br>
                    <div className='addbutton' >
                        <Link to={'/Category'}> <button  className="btn btn-dark" style={{ marginLeft:"150px"}} >Create Category</button></Link>
                        <Link to={'/AddMedicine'}> <button  className="btn btn-dark" style={{ marginLeft:"500px"}} >Add Medicine</button></Link>
                    </div>
                    <div className="row row-cols-3" style={{ alignItems:"center"}}>
                    {this.state.category.length === 0 ? "No Record " :
                        this.state.category.map((category, index) => (
                            <div className="col" style={{ alignContent:"center"}}>
                            <div className="card" style={{ margin: "2rem",boxShadow: "2px 2px 5px lightblue" }} key={category.id}>
                            <img className="center" src={"/images/"+category.categoryName+".jpg"}  alt="Not found" style={{height:200,width:200,alignContent:"center",marginLeft: "30px"}}></img>
                                <div className='jumbotron'>
                                <div className="card-body" style={{color:"black"}} >
                                    <h5 className="card-title">{index + 1}</h5>
                                    <hr></hr>
                                    <h5 className="card-title">Category Name &nbsp; :&nbsp; {category.categoryName}</h5>
                                    <h5 className="card-text">Category Id &nbsp; :&nbsp; {category.categoryId}</h5>
                                    <div>
                                        <Link to={`/update-category/${category.categoryId}`}><button style={{marginLeft: "10px"}} className='btn btn-warning'>Update</button></Link> 
                                        <button style={{marginLeft: "10px"}} className="btn btn-danger" onClick={() => { this.deleteCategory(category.categoryId) }}>Delete</button>
                                        <Link to={`/viewMedicine-category/${category.categoryId}`}><button style={{marginLeft: "10px"}} className='btn btn-secondary' >View </button></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                        ))}
                        </div>
                        <br></br>
                <br></br>
                <br></br><br></br>
                </div>
                
            </div>
            
        )
    }
}

export default CategoryComponent