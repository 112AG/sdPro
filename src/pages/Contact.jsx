import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-12">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Contact Us</h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left Column: Get in Touch */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600">Get In Touch</h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nuliam
              ornare et.
            </p>

            {/* Address */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700">Address</h3>
              <p className="text-gray-500">London Eye, London, UK</p>
            </div>

            {/* Phone */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700">Phone Number</h3>
              <p className="text-gray-500">+123 456 7890</p>
            </div>

            {/* Email */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700">E-Mail</h3>
              <p className="text-gray-500">mail@pbsux.com</p>
            </div>

            {/* Social Media */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700">Follow Us</h3>
              <div className="flex items-center space-x-4 mt-2">
                {/* Replace # with actual links. */}
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M18.36 6.64a9 9 0 1 0 2.193 4.908H18.36V8h-2v3h3v2h-3v3h-2v-3h-2v-2h2V9a2 2 0 0 1 2-2h2.36z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 16.88 3c-2.48 0-4.5 2-4.5 4.48v1A12.94 12.94 0 0 1 3 4s-4 9 5 13a13.06 13.06 0 0 1-8 2c9 5.5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M4.98 3.5C3.34 3.5 2 4.85 2 6.48v10.03c0 1.64 1.34 2.98 2.98 2.98h10.03c1.64 0 2.98-1.34 2.98-2.98V6.48c0-1.63-1.34-2.98-2.98-2.98H4.98zM12 8.17a3.83 3.83 0 1 1 0 7.66 3.83 3.83 0 0 1 0-7.66zm5.2-.38a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Send a Message Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Send a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-10">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2412.7718704498026!2d-0.12085048418259782!3d51.50331521799102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c29452617d%3A0xd4d406741fd1f1ec!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1614722966064!5m2!1sen!2suk"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="border-0 w-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
