import React from "react";
import "./home.css";
import Decoration from "../../assets/homeAssets/Decoration.png";
import SDMan from "../../assets/homeAssets/SDMan.png";
import clientOne from "../../assets/homeAssets/client1.jpg";
import clientTwo from "../../assets/homeAssets/client2.jpg";
import clientThree from "../../assets/homeAssets/client3.jpg";
import TopHeader from "../../components/TopHeader";
import LoanTabs from "../../componentsTwo/LoanTabs/LoanTabs";
import Button from "../../components/Button";
import WhyUs from "../../componentsTwo/WhyUS/WhyUs";

function Home() {
  return (
    <div className="h-full w-full bg-[#f6f8fb]">
      {/* One */}
      <div className="h-screen w-full bg-[#013775] px-4 flex sm:flex-row flex-col-reverse justify-around">
        {/* Left block: Overlapping images */}
        <div className="w-[100%] h-full sm:w-[40%] relative flex items-center justify-center">
          {/* Decorative shape/rectangle */}
          <img
            src={Decoration}
            alt="linearRectangle"
            className="absolute bottom-0 h-[304px] sm:h-[300px] md:h-[350px] lg:h-[434px] 2xl:h-[589px]"
          />
          {/* SDMan image */}
          <img
            src={SDMan}
            alt="Our Employee"
            className="absolute bottom-0 h-[342px] sm:h-[340px] md:h-[394px] lg:h-[494px] 2xl:h-[669px]"
          />
        </div>

        {/* Right block: Text + button + clients label */}
        <div className="w-[100%] sm:w-[50%] md:w-[40%] sm:h-full flex flex-col items-start justify-center pt-4 sm:pt-0">
          <p className="text-[#1AD079] text-sm sm:text-base md:text-lg font-medium sm:pb-0 pb-1.5">
            Welcome to SD Financial Services
          </p>
          <h1 className="text-white text-[32px]  sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-none">
            Where <span className="text-[#F4C520]">Trust</span> Meets{" "}
            <span className="text-[#1AD079]">Financial</span> Excellence
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed py-1.5 sm:py-0">
            Simplifying Financial Solutions for Your Business, Home, and Health.
            At SD Financial Services, we provide a range of financial products
            tailored to help you manage and grow your business, buy your dream
            home, and protect your health. With a fast, transparent, and
            customer-centric approach, we’re here to make financing easier for
            you.
          </p>

          {/* Button and "Happy Clients" row */}
          <div className="flex items-center gap-5 pt-4">
            <Button btn="Contact Us" link="#" />

            <div className="flex items-center justify-start gap-[-20px]">
              <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] rounded-full border-[2px] border-[#001f3f] overflow-hidden z-10">
                <img
                  src={clientOne}
                  alt="Client 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] rounded-full border-[2px] border-[#001f3f] overflow-hidden z-20 -ml-4">
                <img
                  src={clientTwo}
                  alt="Client 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] rounded-full border-[2px] border-[#001f3f] overflow-hidden z-30 -ml-4">
                <img
                  src={clientThree}
                  alt="Client 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col text-white font-bold">
              <span className="text-xl sm:text-2xl lg:text-3xl">50K+</span>
              <span className="text-[12px] text-gray-300 sm:text-base lg:text-lg font-normal">
                Happy Clients
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Two */}
      <div className="h-full w-full">
        <TopHeader top={"Who we are"} subHead="Our Main Service" />
        <LoanTabs />
      </div>
      {/* Three */}
      <div>
        <TopHeader top={"Why us"} subHead="Why SD Financs?" />

        <WhyUs/>
      </div>
      {/* Four */}
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
