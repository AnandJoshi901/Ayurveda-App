import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CategoryService from './CategoryService';
import axios from 'axios';
import { Nav, Navbar } from "react-bootstrap";


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
            <div>
                 <Navbar/>
                <div className="container">
                    <div className='addbutton'>
                        <Link to={'/Category'}> <button  className="btn btn-dark"  >Create Category</button></Link>
                    
                        <Link to={'/CreateMedicine'}> <button  className="btn btn-dark"  >Add Medicine</button></Link>
                    
                    </div>
                    {this.state.category.length === 0 ? "No Record " :
                        this.state.category.map((category, index) => (
                            <div className="card" style={{ margin: "2rem" }} key={category.id}>
                                <div className='jumbotron'>
                                <div className="card-body" style={{color:"black"}} >
                                    <h5 className="card-title">{index + 1}</h5>
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
                        ))}
                </div>
             
            </div>
        )
    }
}

export default CategoryComponent