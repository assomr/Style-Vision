import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-[#DFDBD4] rounded-lg px-6 md:px-10 lg:px-20 relative">
      {/* --------- Image en haut à gauche ---------- */}
      <img
        src={assets.header_4}
        alt="Header Top Left"
        className="absolute top-0 left-0 w-[100px] md:w-[150px] lg:w-[200px] object-contain"
      />

      {/* --------- Image en bas à gauche ---------- */}
      <img
        src={assets.header_5}
        alt="Header Bottom Left"
        className="absolute bottom-0 left-0 w-[30px] md:w-[50px] lg:w-[70px] object-contain"
      />

      {/* --------- Image en bas légèrement à gauche ---------- */}
      <img
        src={assets.header_6}
        alt="Header Bottom Center"
        className="absolute bottom-0 left-[45%] transform -translate-x-1/2 w-[150px] md:w-[200px] lg:w-[250px] object-contain"
      />

      {/* --------- Left Side ----------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight text-secondary font-della">
          Book Appointment <br className="hidden sm:block " /> With Trusted Stylists
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-sm font-light">
          <img className="w-28 rounded-full" src={assets.group_profiles} alt="Group Profiles" />
          <p className="text-secondary">
            Simply browse our long list of trusted stylists, <br />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book appointment <img className="w-3" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* ---------- Right Side ---------- */}
      <div className="md:w-1/2 relative">
        <img
          className="absolute bottom-0 right-0 w-full h-auto rounded-lg"
          src={assets.header_img}
          alt="Header Illustration"
        />
      </div>

      {/* ---------- Logo ---------- */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[200px] h-[80px]">
        <img
          src={assets.logo_fashion}
          alt="Fashion Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Header;
