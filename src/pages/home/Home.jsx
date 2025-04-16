import React from "react";
import "./home.css";
import Decoration from "../../assets/homeAssets/Decoration.png";
import SDMan from "../../assets/homeAssets/SDMan.png";

function Home() {
  return (
    <div className="h-full w-full">
      <div className="h-[90vh] w-full bg-[#013775] px-4 flex justify-around">
        {/* Left block: Overlapping images */}
        <div className="w-[40%] relative">
          {/* Decorative shape/rectangle */}
          <img
            src={Decoration}
            alt="linearRectangle"
            className="absolute bottom-0 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[434px] 2xl:h-[589px]"
          />
          {/* SDMan image */}
          <img
            src={SDMan}
            alt="Our Employee"
            className="absolute bottom-0 h-[282px] sm:h-[340px] md:h-[394px] lg:h-[494px] 2xl:h-[669px]"
          />
        </div>

        {/* Right block: Text + button + clients label */}
        <div className="w-[40%] h-full flex flex-col items-start justify-center ">
          <p className="text-[#1AD079] text-sm sm:text-base md:text-lg font-medium">
            Welcome to SD Financial Services
          </p>
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Where <span className="text-[#F4C520]">Trust</span> Meets{" "}
            <span className="text-[#1AD079]">Financial</span> Excellence
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
            Simplifying Financial Solutions for Your Business, Home, and Health.
            At SD Financial Services, we provide a range of financial products
            tailored to help you manage and grow your business, buy your dream
            home, and protect your health. With a fast, transparent, and
            customer-centric approach, we’re here to make financing easier for
            you.
          </p>

          {/* Button and "Happy Clients" row */}
          <div className="flex items-center gap-5 pt-4">
            <button
              className="
              relative
              bg-[#F4C520]
              text-black
              font-semibold
              px-5
              py-2
              rounded-md
              shadow-[4px_4px_0_#1AD079]
              hover:shadow-[2px_2px_0_#1AD079]
              active:shadow-none
              transition-all
              text-sm
              sm:text-base
            "
            >
              Contact us
            </button>

            <div className="flex flex-col text-white font-bold">
              <span className="text-xl sm:text-2xl lg:text-3xl">50K+</span>
              <span className="text-sm sm:text-base lg:text-lg font-normal">
                Happy Clients
              </span>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <div></div>

      <div></div>

      <div></div>

      <div></div>

      <div></div>

      <div></div>

      <div></div>
    </div>
  );
}

export default Home;
