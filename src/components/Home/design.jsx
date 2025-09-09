import React from "react";
import { Link } from "react-router-dom";
import Work from "../Home/work.jsx";
import Design2 from "../Home/design2.jsx";
import Design3 from "../Home/design3.jsx";
import Vid from "../Home/vid.jsx";
import designicon from "../../assets/icons/designicon.svg";

function Design() {
  return (
    <section className="bg-cover bg-center lg:py-[101px] py-[60px] px-[16px] lg:px-[80px] lg:bg-[url('/src/assets/back/bgimage.png')] bg-[url('/src/assets/back/bgimagem.png')]">
      <div className="text-center max-w-5xl mx-auto">
        {/* Icon */}
        <div className="flex justify-center">
          <img src={designicon} alt="Design Icon" />
        </div>

        {/* Heading */}
        <h2 className="text-white font-extrabold mt-[32px] text-[24px] lg:text-[64px] leading-tight">
          Sleek sites built to grow your business
        </h2>

        {/* Description */}
        <p className="text-[#9F9F9f] font-medium mt-[20px] lg:mt-[30px] text-[14px] lg:text-[16px] leading-relaxed lg:leading-[28px]">
          We build sleek, responsive websites that load fast, are SEO optimized,
          secure, user-friendly, branded to your identity, designed for
          conversions, easy to manage, analytics-ready, and scalable to grow
          with your business.
        </p>
      </div>

      {/* Additional Sections */}
      <Design2 />
      <Vid />
      <Work />
      <Design3 />
    </section>
  );
}

export default Design;
