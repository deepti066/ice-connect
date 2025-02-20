import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState("");

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return { num1, num2, answer: num1 + num2 };
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (e) => {
    setUserCaptcha(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (parseInt(userCaptcha) !== captcha.answer) {
      alert("Incorrect captcha. Please try again.");
      setCaptcha(generateCaptcha());
      setUserCaptcha("");
      return;
    }
    
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
    setUserCaptcha("");
    setCaptcha(generateCaptcha()); 
  };

  return (
    <>
    <div>
      <NavBar />
      </div>
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-2xl mt-10" data-aos="zoom-in">
        <h1 className="text-3xl font-bold text-center mt-16">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold">Office Address</h2>
            <p className="text-gray-700">Madhab Tower, 4th Floor, G S Road, Rukminigaon, Guwahati-781022 (Assam)</p>
            <h2 className="text-xl font-semibold mt-4">Registered Address</h2>
            <p className="text-gray-700">303, 3rd FLOOR TEMPLE TOWER, SIKARIA COMPOUND G S ROAD, DISPUR, GUWAHATI-781005 (Assam)</p>
            <h2 className="text-xl font-semibold mt-4">Technical Support</h2>
            <p className="text-gray-700">Email: <a href="mailto:services@iceconnectisp.com" className="text-blue-500">services@iceconnectisp.com</a></p>
            <p className="text-gray-700">Phone: <a href="tel:+918473067788" className="text-blue-500">+91-8473067788</a></p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required/>
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required/>
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded"required />
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold">{captcha.num1} + {captcha.num2} = ?</span>
                <input type="text" placeholder="Enter Captcha" value={userCaptcha} onChange={handleCaptchaChange} className="p-2 border rounded w-24"required/>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default ContactUs;
