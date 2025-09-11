import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import groupm from "../../assets/images/Groupimagem.png";
import group from "../../assets/images/Groupimage.png";
import homeicon from "../../assets/icons/homeicon.svg";
import briefcase from "../../assets/icons/briefcase.svg";
import watsap from "../../assets/icons/watsap.svg";
import Design from "../Home/design.jsx";

function Home() {
  return (
    <div>
      <section className="relative min-h-screen bg-no-repeat bg-cover lg:bg-center pt-[100px] pb-8 px-[16px] lg:px-0 lg:bg-[url('/src/assets/back/homebg.png')] bg-[url('/src/assets/back/homebgm.png')]">
        <div className="flex flex-col items-center text-center min-h-[calc(100vh-100px)] justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[264px] lg:w-auto flex-shrink-0"
          >
            <img src={homeicon} alt="Home Icon" />
          </motion.div>

          {/* Main Content Container */}
          <div className="flex-1 flex flex-col justify-center items-center max-w-6xl mx-auto py-4">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white font-extrabold text-[32px] lg:text-[64px] px-4 lg:px-[200px] mb-6 lg:mb-8"
            >
              Build a website that speaks, engages, and converts!
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center w-full"
            >
              <div className="flex flex-col-reverse lg:flex-row items-center gap-[16px] w-full max-w-[500px]">
                {/* Our Work Button */}
                <Link
                  to="/about"
                  className="bg-[#FFFFFF24] hover:bg-[#ffffff48] text-white rounded-[50px] py-[12px] lg:py-[20px] px-[40px] w-full lg:w-auto transition duration-300 text-center"
                >
                  <div className="flex items-center justify-center gap-2 w-full">
                    <img src={briefcase} alt="Briefcase Icon" />
                    Our Work
                  </div>
                </Link>

                {/* WhatsApp Contact Button */}
                <a
                  href="https://wa.me/2348127574208" // Replace with your actual WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FCE803] hover:bg-[#FCE80320] text-[#17191E] hover:text-[#FCE803] rounded-[50px] py-[12px] lg:py-[20px] px-[40px] w-full lg:w-auto transition duration-300 text-center"
                >
                  <div className="flex items-center justify-center gap-2 w-full">
                    <img src={watsap} alt="WhatsApp Icon" />
                    Contact Us
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Illustrations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex-shrink-0"
          >
            <img
              src={group}
              alt="Group Illustration"
              className="hidden lg:block max-w-full h-auto"
            />
            <img
              src={groupm}
              alt="Mobile Group Illustration"
              className="block lg:hidden max-w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Design Component */}
      <Design />
    </div>
  );
}

export default Home;
