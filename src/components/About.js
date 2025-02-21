import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import Footer from "../components/Footer";


const About = () => {
  return (
    <>
    <div >
      <NavBar/>
    </div>
    
    <div className="max-w-4xl mx-auto p-6 text-gray-800 justify-between items-center" data-aos="zoom-in" data-aos-delay="200">
      <h1 className="text-3xl font-bold mt-16 text-center">About Us</h1>
      <p>
        <strong>ICE CONNECT ISP PRIVATE LIMITED</strong> is a pioneer in constructing next generation Internet services for enterprises in the state of Assam. 
        Additionally, we also provide Internet Lease Line (ILL) as well as Fiber Optic Broadband services in Assam. 
        ICE CONNECT ISP Private Limited holds an all Assam Class-B ISP license that was issued by the Department of Telecommunications (DoT), Government of India.
      </p>
      <p>
      ICE Connect would have - and is in the process of developing - a fully integrated platform that is capable of dispatching leading edge voice, video, 
      IT applications, and multimedia content services over any broadband or IP based network. We are also capable of replicating such frameworks for other internet service providers across the globe which are eager to provide next generation services to their end users. 
      To make the capability frameworks needed, we have partnered with best in class technology partners.

      </p>
      <h2 className="text-2xl font-semibold mt-6 text-center">Our Mission</h2>
      <p>
       At  <strong>ICE CONNECT ISP PVT LTD</strong>, we strive to offer high-perfomance, secure, and reliable Internet Lease Line solutions to businesses of all sizes.
       Our goal is to enable organizations with dedicated uninterrupted internet connectivity, which ensures smooth operations, increased productivity, and business continuity.
      </p>
      <p>
        We are committed to delivering: 
      </p>
      <ul className="list-disc ml-6">
        <li>
          <strong>Unmatched Reliability:</strong> our Internet Lease Line offer consistent speed with minimal downtime, allowing businesses to stay connected an operational at all times.
        </li>
        <li>
          <strong>Security:</strong> We prioritize safety of your data with state-of-the-art sercurity measures, ensuring that your business communications are always secure.
        </li>
        <li>
          <strong>Customizations:</strong> From a small startup to a big company, we provide adjustable bandwidth capabilities to match your individual business demands.
        </li>
        <li>
          <strong>Customer Support:</strong> Through our special customer support staff we are ever ready to guide you in overcoming problems or enhancing your connectivity capacity as your enterprise expands.
        </li>
        <li>
          <strong>Innovations:</strong>We constandly upgrade our infrastructure to keep pace with the constantly changing digital world, delivering you the latest solutions.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-center">Our Vision</h2>
      <p>Our vision is to be the premier provider of innovative and reliable internet connectivity services, enabling businesses to succeed in a digitally-influenced environment.
        We look to revolutionize the manner in which companies are connected, community, and develop by offering the most advanced, secure, and scalable Internet Lease Line solutions.
      </p>
      <p>
        We see a future where companies can depend on a speedy, committed, and uninterrupted internet connection that fuels their day-to-day operations, inspires innovation, 
        and builds global collaborations. Our dream is to help companies forge stronger bonds with their customers, partners, and employees through speedy and secure internet connections that
        open doors and make possibilities a reality. We aim to create long-term relationships with our customers, helping them succeed in a more interconnected world.
      </p>
    </div>
    <Footer />

    </>
  )
};

export default About;
  