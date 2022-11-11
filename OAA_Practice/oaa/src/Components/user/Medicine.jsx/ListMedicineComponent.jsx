import React, { Component } from 'react'
import MedicineServices from '../../../services/MedicineServices';

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
        MedicineServices.getMedicines().then((res) => {
            this.setState({ Medicines: res.data});
        });
    }

    addMedicine(){
        this.props.history.push('/add-Medicine/_add');
    }

    render() {
        return (
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
        )
    }
}

export default ListMedicineComponent
