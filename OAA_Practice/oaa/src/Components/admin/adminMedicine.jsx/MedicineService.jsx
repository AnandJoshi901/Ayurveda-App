import axios from 'axios'

class MedicineService {
    
    showAllMedicine(){
        return axios.get(`http://localhost:8089/api/v1/medicines`);
    }t
    viewMedicineBycategoryId(id){
        return axios.get(  `http://localhost:8089/api/v1/Category/${id}`);
    }
}
export default new MedicineService()