
import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8089/api/v1/customer";
                              
class CustomerService {

    viewAllCustomer(){
        return axios.get("http://localhost:8089/api/v1/customers");
    }

    addCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }

    viewCustomerBycustomerId(customerId){
        return axios.get(CUSTOMER_API_BASE_URL + '/' + customerId);
    }

    updateCustomer(customer){
        return axios.put(CUSTOMER_API_BASE_URL, customer);
    }

    removeCustomer(customerId){
        return axios.delete(CUSTOMER_API_BASE_URL + '/' + customerId);
    }
    
}

export default new CustomerService()