import React from "react";
import logo from "../assets/images/white.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-400 to-blue-950 text-white md:py-8 py-4 md:px-6 px-4">
      {" "}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-8 flex md:inline items-center justify-center flex-col">
          <div className="mb-4">
            <img src={logo} alt="Company Logo" className="w-32 text-white" />
          </div>
          <div className="text-sm space-y-2">
            <p>
              <span className="font-semibold">Address:</span> C-168/169, Emerald
              One, B/s, Gujarat Kidney Hospital, Jetalpur Road, Vadodara,
              Gujarat, India
            </p>
            <p>
              <span className="font-semibold">Mobile:</span> +91 9106531465
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              sdfinancialofficial@gmail.com
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Replace "#" with your actual social media links */}
              <Link to='https://www.facebook.com/Sdfinancialservices.fb' className="h-8 w-8 bg-white rounded-full text-blue-600 flex items-center justify-center font-semibold hover:shadow-md transition">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link to='https://www.instagram.com/sdfinance.in/' className="h-8 w-8 bg-white rounded-full text-blue-600 flex items-center justify-center font-semibold hover:shadow-md transition">
                <i className="ri-instagram-line"></i>
              </Link>
              <Link to='https://www.linkedin.com/company/sdfinancialservices' className="h-8 w-8 bg-white rounded-full text-blue-600 flex items-center justify-center font-semibold hover:shadow-md transition">
                <i className="ri-linkedin-line"></i>
              </Link>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">
              Subscribe to our newsletter
            </h3>
            <form className="flex sm:flex-row">
              <input
                type="email"
                name="subscriber_email"
                placeholder="Enter your email"
                required
                className="px-4 py-2 text-gray-800 border bg-white rounded-sm sm:rounded-l rounded-r-none focus:outline-none"
              />
              <button
                type="submit"
                className=" border px-4 py-2 bg-white text-gray-600 font-semibold hover:bg-gray-100 rounded-sm sm:rounded-r rounded-l-none transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className=" sm:w-1/2 md:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:text-blue-100 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-100 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-blue-100 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="hover:text-blue-100 transition-colors"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/media-coverage"
                className="hover:text-blue-100 transition-colors"
              >
                Media Coverage
              </Link>
            </li>
            <li>
              <Link
                to="/terms-condition"
                className="hover:text-blue-100 transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link
                to="privacy-policy"
                className="hover:text-blue-100 transition-colors"
              >
                Privacy &amp; Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className=" sm:w-1/2 md:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/working-capital"
                className="hover:text-blue-100 transition-colors"
              >
                Working Capital
              </Link>
            </li>
            <li>
              <Link
                to="/business-personal"
                className="hover:text-blue-100 transition-colors"
              >
                Business Personal
              </Link>
            </li>
            <li>
              <Link
                to="/home-loan"
                className="hover:text-blue-100 transition-colors"
              >
                Home Loan
              </Link>
            </li>
            <li>
              <Link
                to="/loan-against-property"
                className="hover:text-blue-100 transition-colors"
              >
                Loan Against Property
              </Link>
            </li>
            <li>
              <Link
                to="/auto-loan"
                className="hover:text-blue-100 transition-colors"
              >
                Auto Loan
              </Link>
            </li>
            <li>
              <Link
                to="/leading-banks"
                className="hover:text-blue-100 transition-colors"
              >
                Leading 20 Banks
              </Link>
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-6 mb-3">Insurance</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/health-insurance"
                className="hover:text-blue-100 transition-colors"
              >
                Health
              </Link>
            </li>
            <li>
              <Link
                to="/life-insurance"
                className="hover:text-blue-100 transition-colors"
              >
                Life Insurance
              </Link>
            </li>
            <li>
              <Link
                to="/general-insurance"
                className="hover:text-blue-100 transition-colors"
              >
                General Insurance
              </Link>
            </li>
          </ul>
        </div>

        <div className=" md:w-1/4">
          <h3 className="text-lg font-semibold mb-3">Career &amp; Tools</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/career"
                className="hover:text-blue-100 transition-colors"
              >
                Career Page
              </Link>
            </li>
            <li>
              <Link
                to="/emi-calculator"
                className="hover:text-blue-100 transition-colors"
              >
                EMI Calculator
              </Link>
            </li>
            <li>
              <Link
                to="/request-form"
                className="hover:text-blue-100 transition-colors"
              >
                Request Loan Form
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="hover:text-blue-100 transition-colors"
              >
                Feedback / Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/query"
                className="hover:text-blue-100 transition-colors"
              >
                Query
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-blue-500 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
