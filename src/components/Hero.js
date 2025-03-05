import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import NavBar from "../components/Navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import slide1 from "../images/hero-image1.jpeg";
import slide2 from "../images/hero-image2.jpeg";
import slide3 from "../images/hero-image3.jpeg";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Navbar */}
        <NavBar />

        {/* Background Slider */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black px-6">
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} fade className="absolute top-0 left-0 w-full h-full">
          <Carousel.Item interval={5000}>
            <img src={slide1} className="w-full h-screen object-cover opacity-50" alt="Slide 1" />
              <div className="absolute inset-x-1 bottom-5 hidden py-5 text-center items-center text-white md:block mb-26">
              <h1>Reliable Network Infrastructure for Seamless Connectivity</h1>
              <p className="text-lg md:text-xl lg:text-2xl max-w-2xl"> We don't construct—we build experiences that propel success. 
          We are Internet Lease Line experts, offering fast, dedicated, and secure internet connections for companies of any size. 
          From uninterrupted bandwidth to ultra-low latency or enterprise-class network solutions, our lease line solutions deliver rapid, 
          consistent, and stable connectivity to ensure your operations keep running at top speed. Lead the way with the force of seamless internet, 
          designed for business success.   </p>
              </div>
           </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img src={slide2} className="w-full h-screen object-cover opacity-50" alt="Slide 2" />
            <div className="absolute inset-x-1 bottom-5 hidden py-5 text-center items-center text-white md:block mb-26">
            <h1>High-Speed Fault-Tolerant Internet Connectivity</h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-2xl"> We don't construct—we build experiences that propel success. 
          We are Internet Lease Line experts, offering fast, dedicated, and secure internet connections for companies of any size. 
          From uninterrupted bandwidth to ultra-low latency or enterprise-class network solutions, our lease line solutions deliver rapid, 
          consistent, and stable connectivity to ensure your operations keep running at top speed. Lead the way with the force of seamless internet, 
          designed for business success.   </p>
              </div>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img src={slide3} className="w-full h-screen object-cover opacity-50" alt="Slide 3" />
            <div className="absolute inset-x-1 bottom-5 hidden py-5 text-center items-center text-white md:block mb-26">
            <h1>Business-Specific Robust Solutions Crafted for You.</h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-2xl"> We don't construct—we build experiences that propel success. 
          We are Internet Lease Line experts, offering fast, dedicated, and secure internet connections for companies of any size. 
          From uninterrupted bandwidth to ultra-low latency or enterprise-class network solutions, our lease line solutions deliver rapid, 
          consistent, and stable connectivity to ensure your operations keep running at top speed. Lead the way with the force of seamless internet, 
          designed for business success.   </p>
              </div>
          </Carousel.Item>
        </Carousel>      

        {/* Foreground Content */}
        
          {/* <h1 className="text-4xl text-white mb-4">Empowering Your Business</h1> */}
          {/* <p className="text-lg max-w-2xl">
          We don't construct—we build experiences that propel success. 
          We are Internet Lease Line experts, offering fast, dedicated, and secure internet connections for companies of any size. 
          From uninterrupted bandwidth to ultra-low latency or enterprise-class network solutions, our lease line solutions deliver rapid, 
          consistent, and stable connectivity to ensure your operations keep running at top speed. Lead the way with the force of seamless internet, 
          designed for business success.            
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
