import axios from 'axios';

class userOrderService{
viewOrder(id){
    return axios.get(  `http://localhost:8089/api/v1/orderbycustomer/${id}`);
}
}

export default new userOrderService()