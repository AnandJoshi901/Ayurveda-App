
import axios from 'axios';

const MEDICINE_API_BASE_URL = "http://localhost:8089/api/v1/medicine";
                              
class MedicineService {

    showAllMedicine(){
        return axios.get("http://localhost:8089/api/v1/medicines");
    }

    addMedicine(medicine){
        return axios.post(MEDICINE_API_BASE_URL, medicine);
    }

    viewMedicine(medicineId){
        return axios.get(MEDICINE_API_BASE_URL + '/' + medicineId);
    }

    updateMedicine(medicine){
        return axios.put(MEDICINE_API_BASE_URL, medicine);
    }

    removeMedicine(medicineId){
        return axios.delete(MEDICINE_API_BASE_URL + '/' + medicineId);
    }
}

export default new MedicineService()