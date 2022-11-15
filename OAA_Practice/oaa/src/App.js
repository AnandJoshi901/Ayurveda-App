import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeaderComponent from './Components/Header';
import FooterComponent from './Components/Footer';
import ListCustomerComponent from './Components/admin/adminCustomer.jsx/ListCustomerComponent';
import ViewCustomerComponent from './Components/admin/adminCustomer.jsx/ViewCustomerComponent';
import HomePage from './Components/user/HomePage';
import UpdateCustomer from './Components/admin/adminCustomer.jsx/UpdateCustomer';
import OrderComponent from './Components/admin/adminOrder.jsx/OrderComponent';
import CategoryComponent from './Components/admin/adminCategory.jsx/CategoryComponent';
import CreateCategoryComponent from './Components/admin/adminCategory.jsx/CreateCategoryComponent';
import UpdateCategory from './Components/admin/adminCategory.jsx/UpdateCtegory';
import CreateCustomerComponent from './Components/admin/adminCustomer.jsx/CreateCustomerComponent';
import ViewMedicineByCategoryId from './Components/admin/adminMedicine.jsx/ViewMedicineByCategoryId';
import UserCategory from './Components/user/Category.jsx/UserCategory';
import ViewMedicineByCategoryId_user from './Components/user/Medicine.jsx/ViewMedicineByCategoryId_user';
import AddMedicineComponent from './Components/admin/adminMedicine.jsx/AddMedicineComponent';
import AdminHomePage from './Components/admin/adminHomePage';
import CustomerRegister from './Components/Registration/CustomerRegister';
import CustomerLogin from './Components/Registration/CustomerLogin';
import Login from './Components/Registration/AdminLogin';
import HomeComponent from './Components/Registration/HomeComponent';
import ListMedicineComponent from './Components/user/Medicine.jsx/ListMedicineComponent';
import AdminListMedicineComponent from './Components/admin/adminMedicine.jsx/AdminListMedicineComponent';
import UserCartComponent from './Components/user/Cart.jsx/UserCartComponent';
import UpdateMedicineComponent from './Components/admin/adminMedicine.jsx/UpdateMedicineComponent';
import UserState from './Components/Context/user/UserState';
import ProfilePage from './Components/user/Customer.jsx/ProfilePage';
import ViewOrderByCustomerIdComponent from './Components/user/Order.jsx/ViewOrderByOrderId';
import Footer from './Components/Registration/footer';
import ViewOrderByOrderId_admin from './Components/admin/adminOrder.jsx/ViewOrderByOrderId_admin';
import UpdateCustomer_user from './Components/user/Customer.jsx/UpdateCustomer_user';

function App() {
  return (
    <div>
      <UserState>
<Router>
<HeaderComponent/>

        <Routes>

          <Route path="/" exact element={<HomeComponent/>}></Route>
          <Route path='/homePage' element={<HomePage/>}/>
          <Route path='/listCustomer' element={<ListCustomerComponent/>}/>
          <Route path='/view-customer/:id' element={<ViewCustomerComponent/>}/>
          <Route path='/update-customer/:id' element={<UpdateCustomer/>}/>
          <Route path='/add-customer' element={<CreateCustomerComponent/>}/>
          <Route path='/adminHomePage' element={<AdminHomePage/>}/>
          <Route path='/orders' element={<OrderComponent/>}/>
          <Route path='/listCategories' element={<CategoryComponent/>}/>
          <Route path='/Category' element={<CreateCategoryComponent/>}/>
          <Route path='/update-category/:id' element={<UpdateCategory/>}/>
          <Route path='/listMedicines' element={<ListMedicineComponent/>}/>
          <Route path='/AdminListMedicines' element={<AdminListMedicineComponent/>}/>
          {/* <Route path='/view-category/:id' element={<ViewCategoryComponent/>}/> */}
          <Route path='/viewMedicine-category/:id' element={<ViewMedicineByCategoryId/>}/>
          <Route path='/medicineCategories' element={<UserCategory/>}/>
          <Route path='/viewMedicineBycategory_user/:id' element={<ViewMedicineByCategoryId_user/>}/>
          <Route path='/AddMedicine' element={<AddMedicineComponent/>}/>
          <Route path='/CustomerRegister' element={<CustomerRegister/>}/>
          <Route path='/Admin-Login' element={<Login/>}/>
          <Route path='/Customer-Login' element={<CustomerLogin/>}/>
          <Route path='/customerCart' element={<UserCartComponent/>}/>
          <Route path='/updateMedicine' element={<UpdateMedicineComponent/>}/>
          {/* <Route path='/profilePage' element={<ProfilePage/>}/> */}
          <Route path='/viewOrderByCustomerId' element={<ViewOrderByCustomerIdComponent/>}/>
          <Route path='/view-order/:id' element={<ViewOrderByOrderId_admin/>}/>
          <Route path='/profilePage' element={<ProfilePage/>}/>
          <Route path='/customer/updatecustomer/:id' element={<UpdateCustomer_user />} />


          


          
          </Routes>
<FooterComponent />

</Router>
</UserState>
    </div>
  
  );
}

export default App;
