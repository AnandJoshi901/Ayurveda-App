import React, { Component }  from 'react';
import { HomeNavBar } from './HomeNavBar';
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from './footer';

export function HomeComponent() {
  let navigate = useNavigate();
  return (
    <div>
      <HomeNavBar />

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block vw-100 vh-100"
            src="https://dwibhashi.co.in/images/slider-1.jpg"
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
            src="https://flushinghospital.org/newsletter/wp-content/uploads/2017/01/Herbal-Medicine-MX-680x340-1440545288.jpg"
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
            src="http://rakshakayurveda.com/wp-content/uploads/2022/04/slider1571304559slider1565264538slider1.jpg"
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

      <Footer/>
    </div>
  );
}
export default HomeComponent