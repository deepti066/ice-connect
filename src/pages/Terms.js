import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const HostingPage = () => {
  return (
    <>
        <div>
          <NavBar />
        </div>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl" data-aos="zoom-in" data-aos-delay="200">
      <h1 className="text-3xl font-bold text-center mt-16">Our Services</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Broadband Services</h2>
        <p className="text-gray-700 mt-2">
             Reliable, Fast, and Affordable Broadband Services
        </p>
        <p className="text-gray-700 mt-2">
        Stay connected with high-speed internet that suits your requirements. From streaming to remote work or gaming, our broadband services provide smooth, reliable, and lightning-fast internet speeds. With flexible plans and exceptional customer service, we're here to keep you connected to what's important.

        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Personalized speeds and bandwidth</li>
          <li>24/7 technical support</li>
          <li>Secure, high-performance internet for business</li>
          <li>Scalability for increasing needs</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Internet Lease Line Services</h2>
        <p className="text-gray-700 mt-2">
        Tap into the potential of a secure, dedicated, and high-speed connection with our Internet Lease Line (ILL) solutions. Ideal for companies that need reliable, high-performance internet without having to share bandwidth with other users, our ILL services offer the best reliability and speed for your business-critical processes.
        </p>
        <h3 className="text-xl font-semibold mt-4">Why Our Internet Lease Line Services?</h3>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Faster, Reliable Speeds: No drops in performance. High-speed internet guaranteed for business-critical tasks.</li>
          <li>Reliability You Can Rely On: Our Internet Lease Line services come with a 99.9% uptime guarantee, so you're never offline.</li>
          <li>24/7 Support & Monitoring: Our experienced support team monitors your connection 24/7 to provide optimal performance and troubleshoot any issues that may arise.</li>
          <li>Private & Secure Connection: Keep your data transferred on a private line with zero chances of cyber attacks.</li>
          <li>No Data Limits: Take advantage of limitless data without having to worry about reaching limits or being throttled.</li>
          <li>Guaranteed Bandwidth: Pay for the speeds you get, with dedicated bandwidth that isn't shared with others.Uninterrupted Connectivity: No more slowdowns and interruptions. Get 24/7 uptime with a solid, uninterrupted connection.</li>
          <li>Uninterrupted Connectivity: Stable 24/7 uptime.</li>
          <li>Secure and Private: With dedicated connectivity, your data rides through a secure and private line, offering increased security for sensitive business data.
          Scalability: While your company is expanding, your internet access can expand right along with you. Our lease line solutions can be scaled for your business growth to ensure there's always adequate bandwidth to maintain up with business demands.</li>
          <li>Support for Critical Applications: From web hosting, to running cloud software, to servicing VoIP and video conferencing, an ILL provides seamless operation for important business applications.</li>
        </ul>
      </div>
    </div>
      <Footer />

    </>
  );
};

export default HostingPage;
