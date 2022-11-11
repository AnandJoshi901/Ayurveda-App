import React, { Component } from 'react'
import CustomerService from '../../../services/CustomerService';
import { Link } from 'react-router-dom';
import NavBarAdmin from '../NavBarAdmin';

class ListCustomerComponent extends Component {

    constructor(props) {
        
        super(props)

        this.state = {
                Customers: []
        }
        // this.addCustomer = this.addCustomer.bind(this);
        this.removeCustomer = this.removeCustomer.bind(this);
    }

    removeCustomer(id){
        CustomerService.removeCustomer(id).then( res => {
            this.setState({Customers: this.state.Customers.filter(customer => customer.id !== id)});
        });
    }

    componentDidMount(){
        CustomerService.viewAllCustomer().then((res) => {
            this.setState({ Customers: res.data});
           // console.log("view all customers")
        });
    }

    // addCustomer(){
    //     this.props.history.push('/add-customer/_add');
    // }

    render() {
        return (
            
            <div>
                <NavBarAdmin/>
                <br></br>
                 <h2 className="text-center">Customers List</h2>
                 <br></br>
                 <hr></hr>
                 <br></br>
                 <div>
                 <Link to={`/add-customer`} ><button className="btn btn-dark" style={{marginLeft: "10px"}}>Add Customer</button></Link>
                 </div>
                 <br></br>
                 <div className = "text-center" >
                        <table className = "table table-striped table-bordered"  style={{width: "80%",  marginleft: "auto",marginright: "auto",alignContent:"center",alignItems:"center"}}>

                            <thead >
                                <tr>
                                    
                                    <th> Customer's Name</th>
                                    <th> Mobile Number</th>
                                    <th> Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Customers.map(
                                        customer => 
                                        <tr key = {customer.customerId}>
                                             <td> {customer.customerName} </td>   
                                             <td> {customer.mobileNumber}</td>
                                             <td> {customer.emailId}</td>
                                             <td>
                                                <Link to={`/update-customer/${customer.customerId}`}><button style={{marginLeft: "10px"}} className="btn btn-warning">Update</button></Link>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.removeCustomer(customer.customerId)} className="btn btn-danger">Delete </button>
                                                 <Link to={`/view-customer/${customer.customerId}`} ><button style={{marginLeft: "10px"}} className="btn btn-secondary">View</button></Link>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListCustomerComponent
