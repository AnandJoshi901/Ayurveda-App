import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import "../AppNavBar.css";

function NavBarAdmin(props) {
    let navigate=useNavigate();

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

  return (
    
  <Navbar bg="black" expand="md" variant="dark">
      <Navbar.Brand onClick={()=>{
                navigate("/")}} className="custom items-align-center">
                  
        {/* this is for logo
        <FaCar className="logo-color me-2 mb-1" style={{fontSize: 45}} /> */}
         OAA
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{textAlign: "center"}}>
        <Nav className="ms-auto me-5 mx-auto" >
          <Nav.Link onClick={()=>{
                navigate("/adminHomePage")
            }}>
            Home
          </Nav.Link>
          <Nav.Link onClick={()=>{
            navigate("/listCustomer")
            }}>
            Customers
          </Nav.Link>
          <Nav.Link onClick={()=>{
            navigate("/listMedicines")
            }}>
            Medicines
          </Nav.Link>
          <Nav.Link onClick={()=>{
            navigate("/allCarts")
          }}>
            Carts
          </Nav.Link>
          <Nav.Link onClick={()=>{
            navigate("/orders")
          }}>
            All Orders
          </Nav.Link>
          
          <Nav.Link href="/login">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBarAdmin;