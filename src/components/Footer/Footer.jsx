import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name */}
        <h2 className="text-xl font-semibold text-purple-500">Atharv Dhayagude &#9829;</h2>
        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Atharv Dhayagude . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
