import React,{useEffect} from 'react'
import NavBarCustomer from './NavBarCustomer';
import { useNavigate } from 'react-router-dom';



function HomePage() {

  let navigate=useNavigate();

  return (
    <>
    <div>
    <NavBarCustomer/>
      <div className='home-page' >
        <div className='img-home-page'>
            <div className='img-wrapper'>
              <img src="https://cdn.dribbble.com/users/1447046/screenshots/7813949/media/2e5dcde12e9e661e3931ad3caf77affb.gif"  alt="car" />
            </div>
        </div>
            <div className='text-home-page'>
              <h1><span>Meet</span> Your </h1>
              <h1>Health Needs</h1>
              <button onClick={()=>navigate("/medicineCategories")} style={{marginTop:'100px'}}> Get your medicines now!</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomePage