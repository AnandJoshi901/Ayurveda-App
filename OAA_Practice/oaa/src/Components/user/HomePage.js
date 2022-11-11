import React,{useEffect} from 'react'
import NavBarCustomer from './NavBarCustomer';
import { useNavigate } from 'react-router-dom';



function HomePage() {

  let navigate=useNavigate();
    // User Authentication
   
    // const usr = useSelector((state)=>state.usr);
    // useEffect(()=>{ 
    //   if(Object.keys(usr).length === 0){
    //       console.log("Invalid User");
    //       navigate("/login");
    //   }
    //   else if(usr.role === "admin"){
    //     console.log("Invalid User");
    //     navigate("/login");
    //   }
    //   else{}
    // });


    // const {CurrentUser}=useSelector((state)=>state.users);
    // let dispatch=useDispatch();
    // useEffect(()=>{
    //     dispatch(loadUsers())
    // },[]);



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
              <button onClick={()=>navigate("/medicinesPage")} style={{marginTop:'100px'}}> Get your medicines now!</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomePage