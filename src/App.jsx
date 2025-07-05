// App.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";  // Import THREE.js
import NET from "vanta/dist/vanta.net.min";  // Import Vanta.js
import './App.css';  // Assuming you have styles for your app
import Footer from './components/Footer';
import HomeMain from './components/Home-main';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Donate from "./components/pages/Donate";
import Chat from "./components/pages/Chat";
import Mosque from "./components/pages/Mosque";
import MyPrayer from "./components/pages/MyPrayer";
import Resource from "./components/pages/Resource";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import AiNoorMosque from "./components/pages/AiNoorMosque";
import AdminPanel from "./components/pages/auth/AdminPanel";

function App() {
  const vantaRef = useRef(null);  // Reference for the VANTA background

  useEffect(() => {
    // Initialize VANTA.NET when component mounts
    const vantaEffect = VANTA.NET({
      el: vantaRef.current,
      THREE,  // Pass THREE.js for the Vanta effect
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 800.00,
      minWidth: 400.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xffffff,
      backgroundColor: 0x0,
      maxDistance: 18.00,// Background color
      spacing: 17.00
    });

    // Cleanup the VANTA effect on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);  // Empty dependency array ensures this only runs on mount/unmount

  return (
    <Router>
    <div className="flex min-h-screen flex-col">
      {/* VANTA Background div */}
      <div
        ref={vantaRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          opacity: 0.2,  // Adjust the opacity to make it subtle
        }}
      />

      {/* Your other components */}
      <Navbar />
      <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/mosque" element={<Mosque />} />
          <Route path="/player" element={<MyPrayer />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<AdminPanel/>} />
          <Route path="/ai_noor_mosque" element={<AiNoorMosque/>} />
        </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
