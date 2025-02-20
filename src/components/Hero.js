import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Img1 from '../images/cloud-2.png';
// import Img2 from '../images/hosting.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <>
      <div
          className="h-screen w-full max-w-full m-auto overflow-hidden mt-8 lg:mt-4"
          data-aos="zoom-in"
      >
        <div>
          <NavBar />
        </div>
        <div
            id="hero"
            className="flex flex-col lg:flex-row items-center py-8 text-center lg:text-left"
        >
          {/* Left Side - Vertically Centered Text */}
          <div
              className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start"
              data-aos="zoom-in"
              data-aos-delay="200"
          >
            <p className="text-xl text-gray-700 mt-2 mb-5 text-justify p-5">
              We don't construct—we build experiences that propel success. We are
              Internet Lease Line experts, offering fast, dedicated, and secure
              internet connections for companies of any size. From uninterrupted
              bandwidth to ultra-low latency or enterprise-class network
              solutions, our lease line solutions deliver rapid, consistent, and
              stable connectivity to ensure your operations keep running at top
              speed. Lead the way with the force of seamless internet, designed
              for business success.
            </p>
          </div>

          {/* Right Side - Carousel */}
          <div
              className="flex lg:justify-end w-full lg:w-1/2 pr-8 mt-8"
              data-aos="fade-up"
              data-aos-delay="700"
          >
            <Carousel
                className="w-full"
                interval={3000}
                fade
                activeIndex={currentIndex}
                onSelect={handleSelect}
            >
              <Carousel.Item>
                <img
                    className="d-block w-100 rounded-t mt-40"
                    src={Img1}
                    alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                    className="d-block w-100 rounded-t mt-40"
                    src={Img1}
                    alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                    className="d-block w-100 rounded-t mt-40"
                    src={Img1}
                    alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

    </>
  );
};

export default Hero;
