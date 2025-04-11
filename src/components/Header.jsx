import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/vite.svg";
import { DropDownProvider } from "../context/DropDownContext";

function Header() {
   const { showCategory, setShowCategory, showInsurance, setShowInsurance } =
    useContext(DropDownProvider);

   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [mobileInsuranceOpen, setMobileInsuranceOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Career", to: "/career" },
    { name: "Contact", to: "/contact" },
  ];

  const categoryItems = [
    "Working Capital",
    "Business Loan",
    "Personal Loan",
    "Home Loan",
    "Loan Against Property",
    "Auto Loan",
  ];

  const insuranceItems = [
    "Health Insurance",
    "Life Insurance",
    "General Insurance",
  ];

  // Add a useEffect to handle mouse leave for dropdowns
  useEffect(() => {
    const handleMouseLeave = () => {
      setShowCategory(false);
      setShowInsurance(false);
    };

    // Attach mouse leave event to the header
    const headerElement = document.querySelector("header");
    headerElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      headerElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [setShowCategory, setShowInsurance]);

  return (
    <header className="bg-white shadow-md relative z-50">
 
       <div className="flex items-center justify-between px-6 py-4">
         <div>
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex gap-6 text-gray-700 text-base font-semibold"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative ${
                  isActive ? "text-blue-600" : "text-gray-700"
                } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-600`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Desktop Category Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              setShowCategory(true);
            }}
            onMouseLeave={() => {
              setShowCategory(false);
            }}
          >
            <Link to="/category" className="cursor-pointer hover:text-blue-600">
              Category <i className="ri-arrow-drop-down-fill"></i>
            </Link>
            {showCategory && (
              <div className="absolute left-0 top-[54%] mt-2 bg-white rounded shadow-md px-2 py-2 text-sm w-48">
                <ul>
                  {categoryItems.map((loan, index) => (
                    <li
                      key={index}
                      className="hover:bg-blue-50 px-3 py-1 rounded"
                    >
                      <Link to="#">{loan}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Desktop Insurance Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              setShowInsurance(true);
            }}
            onMouseLeave={() => {
              setShowInsurance(false);
            }}
          >
            <Link
              to="/insurance"
              className="cursor-pointer hover:text-blue-600"
            >
              Insurance <i className="ri-arrow-drop-down-fill"></i>
            </Link>
            {showInsurance && (
              <div className="absolute right-0 top-[54%] mt-2 bg-white rounded shadow-md px-2 py-2 text-sm w-[164px]">
                <ul>
                  {insuranceItems.map((item, index) => (
                    <li
                      key={index}
                      className="hover:bg-blue-50 px-3 py-1 rounded"
                    >
                      <Link to="#">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i
              className={`${
                mobileMenuOpen ? "ri-close-large-line" : "ri-menu-line"
              } text-xl text-gray-700 cursor-pointer`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        onMouseLeave={() => setMobileMenuOpen(false)}
        className={`
          md:hidden 
          fixed top-19 right-0 h-full w-screen max-w-sm 
          bg-white shadow-lg z-40 
          transform transition-transform duration-300 
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile Nav Links */}
        <nav className="mt-8 flex flex-col gap-4 text-gray-700 text-base font-semibold px-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `relative ${
                  isActive ? "text-blue-600" : "text-gray-700"
                } hover:text-blue-600`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Category Dropdown */}
          <div className="border-t pt-2">
            <button
              onClick={() => setMobileCategoryOpen((prev) => !prev)}
              className="w-full flex justify-between items-center hover:text-blue-600 focus:outline-none"
            >
              <NavLink
                to="/category"
                className={({ isActive }) =>
                  `relative ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  } hover:text-blue-600`
                }
              >
                Category
              </NavLink>
              <span>{mobileCategoryOpen ? "−" : "+"}</span>
            </button>
            {mobileCategoryOpen && (
              <ul className="mt-2 pl-4 flex flex-col gap-2 text-sm">
                {categoryItems.map((loan, index) => (
                  <li key={index} className="hover:text-blue-600">
                    <Link to="#" onClick={() => setMobileMenuOpen(false)}>
                      {loan}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile Insurance Dropdown */}
          <div className="border-t pt-2">
            <button
              onClick={() => setMobileInsuranceOpen((prev) => !prev)}
              className="w-full flex justify-between items-center hover:text-blue-600 focus:outline-none"
            >
              <NavLink
                to="/insurance"
                className={({ isActive }) =>
                  `relative ${isActive ? "text-blue-600" : "text-gray-700"} `
                }
              >
                Insurance
              </NavLink>
              <span>{mobileInsuranceOpen ? "−" : "+"}</span>
            </button>
            {mobileInsuranceOpen && (
              <ul className="mt-2 pl-4 flex flex-col gap-2 text-sm">
                {insuranceItems.map((item, index) => (
                  <li key={index} className="hover:text-blue-600">
                    <Link to="#" onClick={() => setMobileMenuOpen(false)}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
