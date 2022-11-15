import axios from 'axios'

class MedicineService {
    
    showAllMedicine(){
        return axios.get(`http://localhost:8089/api/v1/medicines`);
    }t
    viewMedicineBycategoryId(id){
        return axios.get(  `http://localhost:8089/api/v1/Category/${id}`);
    }
    addMedicine(){
        return axios.post(`http://localhost:8089/api/v1/medicine`);
    }
    viewMedicineById(id){
        return axios.get(  `http://localhost:8089/api/v1/medicine/${id}`);
    }
    updateMedicine(medicine){
        return axios.put("http://localhost:8089/api/v1/medicine", medicine);
    }
    removeMedicine(medicineId){
        return axios.delete("http://localhost:8089/api/v1/medicine" + '/' + medicineId);
    }

}
export default new MedicineService()