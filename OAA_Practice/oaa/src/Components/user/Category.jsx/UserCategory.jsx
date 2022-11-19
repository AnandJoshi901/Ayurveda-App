import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CategoryService from '../../admin/adminCategory.jsx/CategoryService';
import axios from 'axios';
import NavBarCustomer from '../NavBarCustomer';


class UserCategory extends Component {
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

            <div style={{ 
                backgroundImage: `url("https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000")` 
              }}>
                 <NavBarCustomer/>
                 <br></br>
                 <br></br>
                 <div className = "card col-md-8 offset-md-2" style={{ boxShadow: "2px 2px 5px black" }}>
                <h3 className = "text-center" > Categories </h3>
                </div>
                <br></br>
                <div className="card col-md-8 offset-md-2" style={{ boxShadow: "2px 2px 5px black" }}>
                    <br></br>
                    <div className="row row-cols-3" style={{ alignItems:"center"}}>
                    {this.state.category.length === 0 ? "No Record " :
                        this.state.category.map((category, index) => (
                            <div className="col" style={{ alignContent:"center"}}>
                            <div className="card" style={{ margin: "2rem", boxShadow: "2px 2px 5px black" }} key={category.id}>
                            <img className="center" src={"/images/"+category.categoryName+".jpg"}  alt="Not found" style={{height:200,width:200,alignContent:"center",marginLeft: "30px"}}></img>
                                <div className='jumbotron'>
                                <div className="card-body" style={{color:"black"}} >
                                    <h5 className="card-title">{index + 1}</h5>
                                    <hr></hr>
                                    <h5 className="card-title">Category Name &nbsp; :&nbsp; {category.categoryName}</h5>
                                    <h5 className="card-text">Category Id &nbsp; :&nbsp; {category.categoryId}</h5>
                                    <div>
                                        <Link to={`/viewMedicineBycategory_user/${category.categoryId}`}><button style={{marginLeft: "30px"}} className='btn btn-dark' >View Medicines</button></Link>
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

export default UserCategory