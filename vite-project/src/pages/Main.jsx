// App.js
import React from 'react';

function Main() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-blue-600"><i className="fa-solid fa-cube pr-4"></i>PeakPlanner</div>
        <div className="space-x-4">
          <button className="bg-transparent border-2 border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Login</button>
          <button className="bg-transparent border-2 border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center p-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-700 rounded-full p-2">
            <img
              src="./public/main.webp"
              alt="HR Management"
              className="rounded-full w-64 h-64"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left md:ml-10">
          <h1 className="text-4xl font-bold mt-6 md:mt-0">Human Resources Management</h1>
          <p className="mt-4 text-lg">
            This presentation explores the key aspects and best practices of HRM.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default Main;
