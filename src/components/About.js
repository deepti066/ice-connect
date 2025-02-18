import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import cloudImage from '../images/cloud-2.png';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-blue-900 to-black text-white py-20">
      <div>
        <NavBar />
      </div>

      <div className="h-screen m-auto overflow-hidden bg-gradient-to-br from-gray-800 via-blue-900 to-black mt-8 lg:mt-4 h-5/6" data-aos="zoom-in">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-400">
              Ice Connect ISP Pvt Ltd is engaged in building the next generation Internet services for enterprise customers in Assam. ICE CONNECT ISP PVT LTD offers secured fiber optic broadband and Internet Lease Line (ILL) services to enterprise customers in Assam. ICE CONNECT ISP Pvt. Ltd possesses an all Assam Class-B ISP license granted by the Department of Telecommunications (DoT), Govt. of India.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-300">
                At ICE CONNECT ISP PVT LTD, we are committed to providing reliable, high-performance, and secure Internet Lease Line solutions to businesses of all sizes. Our mission is to empower organizations with dedicated, uninterrupted internet connectivity, ensuring seamless operations, enhanced productivity, and business continuity.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img src={cloudImage} alt="Cloud Hosting" className="rounded-lg shadow-lg" />
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-3xl font-semibold mb-8">Our Vision</h3>
            <p className="text-lg text-gray-300">
              Our vision is to be the leading provider of innovative and reliable internet connectivity solutions, empowering businesses to thrive in a digitally-driven world. We aim to transform the way companies connect, communicate, and grow by providing the most advanced, secure, and scalable Internet Lease Line services.
            </p>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-semibold text-gray-400 mb-4">Ready to Get Started?</h3>
            <Link to="/contact" className="text-white bg-indigo-500 hover:bg-indigo-600 inline-flex items-center justify-center px-6 py-3 text-lg shadow-xl rounded-2xl">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
