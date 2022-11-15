import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import "../AppNavBar.css";

function NavBarCustomer(props) {
    let navigate=useNavigate();
    
  return (
    
  <Navbar bg="black" expand="md" variant="dark">
      <Navbar.Brand onClick={()=>{
                navigate("/")}} className="custom items-align-center">
                  
        {/* this is for logo
        <FaCar className="logo-color me-2 mb-1" style={{fontSize: 45}} /> */}
         Herbal Medics
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{textAlign: "center"}}>
        <Nav className="ms-auto me-5 mx-auto" >
          <Nav.Link onClick={()=>{
                navigate("/homePage")
            }}>
            Home
          </Nav.Link>
          <Nav.Link onClick={()=>{
                navigate("/listMedicines")
            }}>
              All Medicines
          </Nav.Link>
          <Nav.Link onClick={()=>{
            navigate("/profilePage")
            }}>
            Profile
          </Nav.Link>
          <Nav.Link onClick={()=>{
            navigate("/customerCart")
          }}>
            Cart
          </Nav.Link>
          <Nav.Link onClick={()=>{
            navigate("/viewOrderByCustomerId")
          }}>
            My Orders
          </Nav.Link>
          
          <Nav.Link href="/Customer-Login">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBarCustomer;