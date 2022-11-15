
import axios from 'axios'

class OrderServices {
    
    showAll(){
        return axios.get(`http://localhost:8089/api/v1/orders`);
    }
    viewOrder(id){
        return axios.get(  `http://localhost:8089/api/v1/orderbycustomer/${id}`);
    }
}
export default new OrderServices()