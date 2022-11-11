import React, { Component } from 'react'
import axios from 'axios'

const CATEGORY_API_BASE_URL = "http://localhost:8089/api/v1/Category";

class CategoryService {
    
    showAll(){
        return axios.get(`http://localhost:8089/api/v1/categories`);
    }
    viewCategoryBycategoryId(categoryId){
        return axios.get(CATEGORY_API_BASE_URL + '/' + categoryId);
    }
}
export default new CategoryService();