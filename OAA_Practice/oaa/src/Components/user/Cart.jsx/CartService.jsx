
import axios from 'axios';

const VIEWCART_API_BASE_URL = "http://localhost:8089/api/v1/cart";
const MEDICINES_API_BASE_URL = "http://localhost:8089/api/v1/medicines"
                              
class CartService {

    showAllMedicine(){
        return axios.get("http://localhost:8089/api/v1/medicines");
    }

    viewCartInfo(cartId=16){
        return axios.get(VIEWCART_API_BASE_URL + '/' + cartId);
    }

    viewMedicine(cartId=16){
        return axios.get(MEDICINES_API_BASE_URL + '/' + cartId);
    }
}

export default new CartService()