import axios from 'axios'

class MedicineService {
    
    showAllMedicine(){
        return axios.get(`http://localhost:8089/api/v1/medicines`);
    }
    viewMedicineBycategoryId(id){
        return axios.get(  `http://localhost:8089/api/v1/Category/${id}`);
    }
    addMedicine(){
        return axios.post(`http://localhost:8089/api/v1/medicine`);
    }
}
export default new MedicineService()