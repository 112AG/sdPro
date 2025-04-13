import React from 'react';

const About = () => {
  return (
    <section className="bg-white text-gray-800 px-6 py-12 md:px-20">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Heading & Intro */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-700">About Us</h1>
          <p className="text-lg text-gray-600">
            Empowering individuals and businesses with trusted financial solutions, expert advice, and a commitment to long-term success.
          </p>
        </div>

        {/* Background / Story */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2015, we started with a vision to make financial planning accessible, transparent, and impactful.
              What began as a small consultancy has grown into a full-scale financial services company, trusted by thousands.
            </p>
          </div>
          <img
            src="https://source.unsplash.com/600x400/?finance,business"
            alt="Finance Team"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Vision & Mission */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision & Mission</h2>
          <p className="text-gray-700 mb-2">
            <strong>Vision:</strong> To be a trusted partner in everyone’s financial journey, empowering them with tools and advice that build lasting wealth.
          </p>
          <p className="text-gray-700">
            <strong>Mission:</strong> Deliver accessible, ethical, and innovative financial services that meet every client’s unique needs.
          </p>
        </div>

        {/* Journey / Timeline (simple version) */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Journey</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✅ 2015 - Company founded</li>
            <li>✅ 2017 - Secured regulatory certification</li>
            <li>✅ 2020 - Crossed 10,000+ clients</li>
            <li>✅ 2022 - Expanded to global markets</li>
          </ul>
        </div>

        {/* Achievements / Moments */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Milestones & Achievements</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Best Financial Advisory Firm - FinTech Awards 2023</li>
            <li>ISO 27001 Certified</li>
            <li>Recognized by Forbes for Innovation in WealthTech</li>
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Certifications & Compliance</h2>
          <p className="text-gray-600">
            We are licensed and regulated by the <strong>Financial Conduct Authority (FCA)</strong> and compliant with <strong>ISO 27001</strong> standards for data security.
          </p>
        </div>

        {/* Partners */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Partners</h2>
          <div className="flex flex-wrap gap-6">
            <img src="/assets/partner1.png" alt="Partner 1" className="h-12" />
            <img src="/assets/partner2.png" alt="Partner 2" className="h-12" />
            <img src="/assets/partner3.png" alt="Partner 3" className="h-12" />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-700 mb-4">Ready to take the next step in your financial journey?</p>
          <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
            Get in Touch
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
