import React from 'react';

function ContactUs() {
  return (
    <div className=" pt-44 sm:pt-24 px-6 md:px-20 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Contact Us
      </h1>
      <p className="text-gray-700 mb-10">
        Have any questions, feedback, or partnership inquiries? Fill out the form below and our team will get back to you shortly.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            placeholder="Write your message..."
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
