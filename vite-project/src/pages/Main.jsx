// App.js
import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-blue-600"><i className="fa-solid fa-cube pr-4"></i>PeakPlanner</div>
        <div className="space-x-4">
          <Link to="/auth/login" className="bg-transparent border-2 border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Login</Link>
          <Link to="/auth/signup" className="bg-transparent border-2 border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center p-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-700 rounded-full p-2">
            <img
              src="./public/team_image.jpg"
              alt="HR Management"
              className="rounded-full w-64 h-64"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left md:ml-10">
          <h1 className="text-4xl font-bold mt-6 md:mt-0">Manage Your Team </h1>
          <p className="mt-4 text-lg">
          Empowering teams to connect, collaborate, and succeed seamlessly across all time zones.
          </p>
        
        </div>
      </section>
    </div>
  );
}

export default Main;
