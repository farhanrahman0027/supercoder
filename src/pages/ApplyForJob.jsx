import React from 'react';

function ApplyJob() {
  return (
    <div className="pt-44 sm:pt-24 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Apply for Remote Developer Jobs</h1>
      <p className="mb-4 text-gray-700">
        Join the elite network of Supercoder developers and land top-tier remote job opportunities.
        Showcase your skills, experience, and get matched with companies worldwide.
      </p>

      <form className="space-y-6 max-w-xl">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Primary Skill (e.g., React, Node.js)"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Brief Description of Experience"
          className="w-full p-3 border border-gray-300 rounded-md"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default ApplyJob;
