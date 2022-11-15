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

            <div>
                 <NavBarCustomer/>
                 <br></br>
                 <br></br>
                 <div className = "card col-md-8 offset-md-2" >
                <h3 className = "text-center" > Categories </h3>
                </div>
                <div className="card col-md-8 offset-md-2">
                    <br></br>
                    <div className="row row-cols-3" style={{ alignItems:"center"}}>
                    {this.state.category.length === 0 ? "No Record " :
                        this.state.category.map((category, index) => (
                            <div className="col" style={{ alignContent:"center"}}>
                            <div className="card" style={{ margin: "2rem" }} key={category.id}>
                                <div className='jumbotron'>
                                <div className="card-body" style={{color:"black"}} >
                                    <h5 className="card-title">{index + 1}</h5>
                                    <hr></hr>
                                    <h5 className="card-title">Category Name &nbsp; :&nbsp; {category.categoryName}</h5>
                                    <h5 className="card-text">Category Id &nbsp; :&nbsp; {category.categoryId}</h5>
                                    <div>
                                        <Link to={`/viewMedicineBycategory_user/${category.categoryId}`}><button style={{marginLeft: "10px"}} className='btn btn-secondary' >View Medicines</button></Link>
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