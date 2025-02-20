import React, { useEffect } from 'react';
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
import About from './components/About';
import Broadband from './components/Broadband';
import Internetservice from './components/Internet-service';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", aos_init);

    return () => {
      window.removeEventListener("load", aos_init);
    };
  }, []);

  useDocTitle("ICE CONNECT | Internet Service Provider");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/hosting" element={<HostingPage/>} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route path="/hosting" element={<HostingPage />} />
            <Route path="/broadband" element={<Broadband />} />
            <Route path="/internet" element={<Internetservice />} />
            <Route path="/Privacy" element={<PrivacyPolicy />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;

