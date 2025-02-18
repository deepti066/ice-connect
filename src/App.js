import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Location from './pages/Location';
import DemoProduct from './pages/DemoProduct';
import HostingPage from './pages/Hosting';


import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
// import Services from './components/Services';
import About from './components/About';
import CloudHosting from './components/CloudHosting';
import VPSHosting from './components/VPSHosting';
import Broadband from './components/Broadband';
import OttBundle from './components/OttBundle';
import Corporate from './components/Corporate';
import Internetservice from './components/Internet-service';
import TV from './components/TV';

function App() {
 // For dark mode
 const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    }

    window.addEventListener("load", () => {
      aos_init();
    });


  //Check localStorage for dark mode setting
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "true") {
    setIsDarkMode(true);
  }
}, []);

  useDocTitle("Aryahi Optinet | ISP | System Integrations");

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode; // Toggle dark mode
      // Store the new mode in localStorage
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  // Apply dark mode styles to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);


  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            {/* <Route path="/services" element={<Services />} />  */}
            <Route path="/hosting" element={<HostingPage />} />
            <Route path="/cloud-hosting" element={<CloudHosting />} />
            <Route path="/vps-hosting" element={<VPSHosting />} />
            <Route path="/broadband" element={<Broadband />} />
            <Route path="/bundle" element={<OttBundle />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/internet" element={<Internetservice />} />
            <Route path="/Tv" element={<TV />} />

          </Routes>
          <button
            className="fixed bottom-5 right-5 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
