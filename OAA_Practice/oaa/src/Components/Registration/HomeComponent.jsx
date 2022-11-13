import React, { Component }  from 'react';
import { HomeNavBar } from './HomeNavBar';
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function HomeComponent() {
  let navigate = useNavigate();
  return (
    <div>
      <HomeNavBar />

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block vw-100 vh-100"
           // src="http://newtrackindia.com/imgs/slider/car-rental-services.jpg"
            src="https://www.volumetree.com/wp-content/uploads/2020/04/Online-Medicine-Store.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="mb-5">
              <Button onClick={()=>navigate("/Customer-Login")}>
                Explore!
              </Button>
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block vw-100 vh-100"
           // src="http://newtrackindia.com/imgs/slider/corporate-car-rental-services-chennai.jpg"
            src="https://media.istockphoto.com/id/1242457489/vector/hands-in-disposable-gloves-with-paper-bag-with-medicines-drugs-pills-and-bottles-inside.jpg?s=612x612&w=0&k=20&c=em8YhqUOvKpLbCNfKELNghzw4r4vxilb5CsGG8O4Q6U="
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2 className="mb-5">
              <Button onClick={()=>navigate("/Customer-Login")}>
                Start Your Journey!
              </Button>
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block vw-100 vh-100"
            //src="http://newtrackindia.com/imgs/slider/corporate-car-rental-services.jpg"
            src="https://media.istockphoto.com/id/1289187345/vector/human-hand-holding-smartphone-using-mobile-app-order-cbd-products-online.jpg?s=612x612&w=0&k=20&c=90FjALFYkVgSOuCKmL7wqOaAoc3ivQouJ7KncsCKojU="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2 className="mb-5">
              <Button onClick={()=>navigate("/Customer-Login")}>
                Start Your Journey!
              </Button>
            </h2>


          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default HomeComponent



{/* <Link to={`/Admin-Login`}><button style={{marginLeft: "10px"}} className='btn btn-warning'>Admin Login</button></Link> 
<Link to={`/Customer-Login`}><button style={{marginLeft: "10px"}} className='btn btn-secondary' >Customer Login </button></Link> */}