import React from 'react';

const ServicesSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl">
            Social Media Marketing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer specialized services to grow your online presence across major platforms.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Facebook Service */}
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-4 pb-8 shadow-lg">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0H1.325C.595 0 0 .594 0 1.326v21.348C0 23.406.595 24 1.325 24H12.82v-9.294H9.692V11.13h3.128V8.353c0-3.1 1.892-4.788 4.655-4.788 1.325 0 2.464.098 2.797.142v3.24h-1.918c-1.507 0-1.8.717-1.8 1.767v2.315h3.6l-.469 3.577h-3.131V24h6.134C23.405 24 24 23.406 24 22.674V1.326C24 .594 23.405 0 22.675 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Facebook Marketing</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Boost your brand's presence on Facebook with our targeted ad campaigns and community management strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Instagram Service */}
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-4 pb-8 shadow-lg">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-pink-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.206.058 2.007.24 2.48.511.556.312.95.682 1.38 1.112.429.429.8.824 1.111 1.379.272.474.453 1.275.511 2.481.058 1.265.071 1.645.071 4.849s-.012 3.584-.07 4.849c-.058 1.206-.24 2.007-.511 2.48-.312.556-.682.95-1.112 1.38-.429.429-.824.8-1.379 1.111-.474.272-1.275.453-2.481.511-1.265.058-1.645.071-4.849.071s-3.584-.012-4.849-.07c-1.206-.058-2.007-.24-2.48-.511-.556-.312-.95-.682-1.38-1.112-.429-.429-.8-.824-1.111-1.379-.272-.474-.453-1.275-.511-2.481-.058-1.265-.071-1.645-.071-4.849s.012-3.584.07-4.849c.058-1.206.24-2.007.511-2.48.312-.556.682-.95 1.112-1.38.429-.429.824-.8 1.379-1.111.474-.272 1.275-.453 2.481-.511 1.265-.058 1.645-.071 4.849-.071m0-2.163c-3.259 0-3.667.012-4.947.071-1.282.059-2.159.27-2.919.57-.787.31-1.447.725-2.106 1.384-.659.659-1.074 1.319-1.384 2.106-.3.76-.511 1.637-.57 2.919-.059 1.28-.071 1.688-.071 4.947s.012 3.667.071 4.947c.059 1.282.27 2.159.57 2.919.31.787.725 1.447 1.384 2.106.659.659 1.319 1.074 2.106 1.384.76.3 1.637.511 2.919.57 1.28.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.282-.059 2.159-.27 2.919-.57.787-.31 1.447-.725 2.106-1.384.659-.659 1.319-1.074 2.106-1.384.76-.3 1.637-.511 2.919-.57 1.28-.059 1.688-.071 4.947-.071s3.667-.012 4.947-.071c1.282-.059 2.159-.27 2.919-.57.787-.31 1.447-.725 2.106-1.384.659-.659 1.074-1.319 1.384-2.106.3-.76.511-1.637.57-2.919.059-1.28.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.059-1.282-.27-2.159-.57-2.919-.31-.787-.725-1.447-1.384-2.106-.659-.659-1.319-1.074-2.106-1.384-.76-.3-1.637-.511-2.919-.57-1.28-.059-1.688-.071-4.947-.071zM12 5.838a6.163 6.163 0 100 12.327 6.163 6.163 0 000-12.327zm0 10.163a3.838 3.838 0 110-7.676 3.838 3.838 0 010 7.676zm7.448-10.47a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Instagram Marketing</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Elevate your brand's visibility on Instagram through visually engaging content and powerful influencer partnerships.
                  </p>
                </div>
              </div>
            </div>

            {/* YouTube Service */}
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-4 pb-8 shadow-lg">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-2.549-.23-8.577-.23-11.126 0-2.564.231-4.31 1.978-4.549 4.549-.231 2.549-.231 8.577 0 11.126.231 2.564 1.978 4.31 4.549 4.549 2.549.231 8.577.231 11.126 0 2.564-.231 4.31-1.978 4.549-4.549.231-2.549.231-8.577 0-11.126-.231-2.564-1.978-4.31-4.549-4.549zm-8.615 12.74v-7.847l6.493 3.923-6.493 3.924z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">YouTube Marketing</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Maximize your video reach on YouTube with our expert strategies, including content optimization and targeted ads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Process</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl">
            How We Work
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Consultation</h3>
              <p className="mt-2 text-base text-gray-500">
                We start with understanding your brand and goals to tailor a strategy that works for you.
              </p>
            </div>

            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Execution</h3>
              <p className="mt-2 text-base text-gray-500">
                Our team implements the strategy with precision, ensuring your brand message reaches the right audience.
              </p>
            </div>

            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Optimization</h3>
              <p className="mt-2 text-base text-gray-500">
                We continuously analyze and optimize the campaign to maximize results and drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Customer Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium text-gray-900">
                "Their team helped us grow our social media presence exponentially. Highly recommended!"
              </p>
              <p className="mt-2 text-sm text-gray-500">- Jane Doe, CEO of Example Company</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium text-gray-900">
                "Professional, dedicated, and results-driven. We saw a significant boost in our engagement."
              </p>
              <p className="mt-2 text-sm text-gray-500">- John Smith, Marketing Director at Another Co.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium text-gray-900">
                "The best team we've worked with. They understand our brand and deliver amazing results."
              </p>
              <p className="mt-2 text-sm text-gray-500">- Emily Johnson, Founder of Startup Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl">
            Get in Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We’d love to hear from you! Drop us a message and let’s start a conversation.
          </p>
        </div>

        <div className="mt-10">
          <form className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 p-3 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Your Name" />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 p-3 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Your Email" />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea className="mt-1 p-3 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" rows="4" placeholder="Your Message"></textarea>
            </div>
          </form>
          <div className="text-center mt-8">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FullPage = () => {
  return (
    <div>
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default FullPage;
