import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import "../AppNavBar.css";

function NavBarAdmin(props) {
    let navigate=useNavigate();

  return (
    
  <Navbar bg="black" expand="md" variant="dark">
      <Navbar.Brand onClick={()=>{
                navigate("/")}} className="custom items-align-center">

      Herbal Medics
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
            navigate("/listCategories")
            }}>
            Categories
          </Nav.Link>
          <Nav.Link onClick={()=>{
            navigate("/AdminListMedicines")
            }}>
            Medicines
          </Nav.Link>
          {/* <Nav.Link onClick={()=>{
            navigate("/allCarts")
          }}>
            Carts
          </Nav.Link> */}
          <Nav.Link onClick={()=>{
            navigate("/orders")
          }}>
            All Orders
          </Nav.Link>
          
          <Nav.Link href="/Admin-Login">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBarAdmin;