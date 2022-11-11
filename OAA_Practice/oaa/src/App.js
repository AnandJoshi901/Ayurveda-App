import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeaderComponent from './Components/Header';
import FooterComponent from './Components/Footer';
import ListCustomerComponent from './Components/admin/adminCustomer.jsx/ListCustomerComponent';
import ViewCustomerComponent from './Components/admin/adminCustomer.jsx/ViewCustomerComponent';
import HomePage from './Components/user/HomePage';
import UpdateCustomer from './Components/admin/adminCustomer.jsx/UpdateCustomer';
import AdminHomePage from './Components/admin/adminHomePage';
import OrderComponent from './Components/admin/adminOrder.jsx/OrderComponent';
import CategoryComponent from './Components/admin/adminCategory.jsx/CategoryComponent';
import CreateCategoryComponent from './Components/admin/adminCategory.jsx/CreateCategoryComponent';
import UpdateCategory from './Components/admin/adminCategory.jsx/UpdateCtegory';
import CreateCustomerComponent from './Components/admin/adminCustomer.jsx/CreateCustomerComponent';
import Login from './Components/Registration/AdminLogin';
import ViewMedicineByCategoryId from './Components/admin/adminMedicine.jsx/ViewMedicineByCategoryId';
import MedicineComponent from './Components/admin/adminMedicine.jsx/MedicineComponent';
import HomeComponent from './Components/Registration/HomeComponent'
import CustomerLogin from './Components/Registration/CustomerLogin';
import CustomerRegister from './Components/Registration/CustomerRegister';


function App() {
  return (
    <div>
        {/* <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                      <Route path="/homePage" exact component={HomePage}></Route>
                      <Route path="/customers" exact component={ListCustomerComponent}></Route>
                      <Route path = "/view-customer/:id" component = {ViewCustomerComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router> */}

<Router>
<HeaderComponent />
        <Routes>

          <Route path='/'  element={<HomeComponent />}></Route>

          <Route path='/HomePage' element={<HomePage/>}/>
          <Route path='/listCustomer' element={<ListCustomerComponent/>}/>
          <Route path='/view-customer/:id' element={<ViewCustomerComponent/>}/>
          <Route path='/update-customer/:id' element={<UpdateCustomer/>}/>
          <Route path='/add-customer' element={<CreateCustomerComponent/>}/>
          <Route path='/adminHomePage' element={<AdminHomePage/>}/>

          <Route path='/CustomerRegister' element={<CustomerRegister/>}/>

          
          <Route path='/orders' element={<OrderComponent/>}/>
          <Route path='/listMedicines' element={<CategoryComponent/>}/>
          <Route path='/Admin-Login' element={<Login/>}/>
          <Route path='/Customer-Login' element={<CustomerLogin/>}/>
          <Route path='/Category' element={<CreateCategoryComponent/>}/>
          <Route path='/update-category/:id' element={<UpdateCategory/>}/>
          {/* <Route path='/medicines' element={<MedicineComponent/>}/> */}
          {/* <Route path='/view-category/:id' element={<ViewCategoryComponent/>}/> */}
          <Route path='/viewMedicine-category/:id' element={<MedicineComponent/>}/>


          </Routes>
          <FooterComponent />
          </Router>
    </div>
    
  );
}

export default App;
