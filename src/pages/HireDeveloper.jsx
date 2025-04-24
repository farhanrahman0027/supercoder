import React from 'react';

function HireDeveloper() {
  return (
    <div className="pt-44 sm:pt-24 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Hire Top Remote Developers</h1>
      <p className="mb-4 text-gray-700">
        Looking to scale your tech team quickly with top 5% talent? Let us help you find and onboard the best developers remotely in less than 2 weeks.
      </p>

      <form className="space-y-6 max-w-xl">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Your Work Email"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Company Name"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Describe the skills you're looking for"
          className="w-full p-3 border border-gray-300 rounded-md"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700"
        >
          Hire Now
        </button>
      </form>
    </div>
  );
}

export default HireDeveloper;
