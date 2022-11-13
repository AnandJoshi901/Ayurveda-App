import axios from 'axios'

class CustomerServiceforlogin {

    login(data){
        return axios.post("http://localhost:8089/api/v1/login", data);
    }
}
export default new CustomerServiceforlogin()