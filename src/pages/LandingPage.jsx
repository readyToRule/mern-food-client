import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-emerald-400 via-cyan-500 to-indigo-700 text-white relative">
    <div className="bg-white bg-opacity-10 rounded-3xl px-12 py-10 shadow-2xl max-w-xl w-full text-center animate-fade-in">
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow">Foodie Express</h1>
      <p className="text-lg font-light mb-8">
        Savor the authentic taste of <span className="font-semibold text-emerald-200">North</span> & <span className="font-semibold text-yellow-200">South</span> Indian cuisine.<br />
        Order breakfast, lunch, or dinner and get it delivered piping hot to your doorstep!
      </p>
      <div className="flex justify-center gap-6 mb-6">
        <Link to="/register">
          <button className="px-8 py-3 rounded-full bg-white text-indigo-700 font-bold shadow-md hover:scale-105 hover:bg-indigo-50 transition-all duration-200">Register</button>
        </Link>
        <Link to="/login">
          <button className="px-8 py-3 rounded-full bg-indigo-700 text-white font-bold shadow-md hover:scale-105 hover:bg-indigo-800 transition-all duration-200">Login</button>
        </Link>
      </div>
    </div>
    <footer className="absolute bottom-8 text-sm opacity-70">
      &copy; {new Date().getFullYear()} Foodie Express. All rights reserved.
    </footer>
  </div>
);

export default LandingPage;
