import React from "react";
import { Link } from "react-router-dom";

const Home = ({ darkMode }) => (
  <div
    className={
      `relative min-h-screen flex items-center justify-center transition-colors duration-300 px-4 overflow-hidden h-screen` +
      (darkMode
        ? "bg-gradient-to-br from-gray-900 via-sky-900 to-gray-800 text-gray-100"
        : "bg-gradient-to-br from-sky-100 via-white to-sky-200 text-black")
    }
    aria-label="Home Page Background"
  >
    <div aria-hidden="true">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div
          className="absolute left-1/4 top-10 w-72 h-72 rounded-full opacity-30 blur-3xl animate-bg-float1"
          style={{
            background: darkMode
              ? "radial-gradient(circle, #38bdf8 0%, #0e7490 100%)"
              : "radial-gradient(circle, #bae6fd 0%, #38bdf8 100%)",
          }}
        ></div>
        <div
          className="absolute right-1/4 bottom-10 w-60 h-60 rounded-full opacity-20 blur-2xl animate-bg-float2"
          style={{
            background: darkMode
              ? "radial-gradient(circle, #0ea5e9 0%, #1e293b 100%)"
              : "radial-gradient(circle, #7dd3fc 0%, #bae6fd 100%)",
          }}
        ></div>
        <div
          className="absolute left-1/2 top-1/2 w-40 h-40 rounded-full opacity-10 blur-2xl animate-bg-float3"
          style={{
            background: darkMode
              ? "radial-gradient(circle, #f472b6 0%, #0e7490 100%)"
              : "radial-gradient(circle, #f472b6 0%, #bae6fd 100%)",
          }}
        ></div>
      </div>
    </div>
    <main className="relative z-10 max-w-3xl w-full flex flex-col items-center justify-center animate-fade-in">
      <h1
        className={
          `text-3xl font-extrabold mb-2 text-center tracking-tight animate-slide-down drop-shadow-lg ` +
          (darkMode ? "text-sky-300" : "text-sky-900")
        }
      >
        Welcome to UpLift Task{" "}
        <span className="animate-bounce inline-block">🚀</span>
      </h1>
      <p className="text-xl text-center my-4 max-w-xl animate-fade-in-delay font-medium">
        Your all-in-one personal task manager to stay organized, focused, and
        productive. <span className="inline-block animate-spin">✨</span>
      </p>
      <div className="flex flex-wrap justify-center gap-6 py-6 w-full animate-fade-in-delay2">
        <Link to="/Login" tabIndex={0} aria-label="Login to your account">
          <button
            className={
              "bg-sky-500 py-3 px-12 rounded-full font-semibold shadow-xl cursor-pointer duration-300 transform transition-all text-lg focus:outline-none focus:ring-4 focus:ring-sky-300 " +
              (darkMode
                ? "text-white hover:bg-gray-900 hover:text-sky-400 hover:shadow-sky-900 active:scale-95"
                : "text-white hover:bg-white hover:text-sky-500 hover:shadow-sky-500 active:scale-95")
            }
            tabIndex={-1}
          >
            Login
          </button>
        </Link>
        <Link to="/Register" tabIndex={0} aria-label="Register a new account">
          <button
            className={
              "bg-sky-500 py-3 px-12 rounded-full font-semibold shadow-xl cursor-pointer duration-300 transform transition-all text-lg focus:outline-none focus:ring-4 focus:ring-sky-300 " +
              (darkMode
                ? "text-white hover:bg-gray-900 hover:text-sky-400 hover:shadow-sky-900 active:scale-95"
                : "text-white hover:bg-white hover:text-sky-500 hover:shadow-sky-500 active:scale-95")
            }
            tabIndex={-1}
          >
            Register
          </button>
        </Link>
      </div>
    </main>
    <style>{`
      .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1); }
      .animate-fade-in-delay { animation: fadeIn 1.8s cubic-bezier(.4,0,.2,1); }
      .animate-fade-in-delay2 { animation: fadeIn 2.4s cubic-bezier(.4,0,.2,1); }
      .animate-slide-down { animation: slideDown 1.2s cubic-bezier(.4,0,.2,1); }
      .animate-bounce { animation: bounce 1.5s infinite alternate cubic-bezier(.4,0,.2,1); }
      .animate-spin { animation: spin 2.5s linear infinite; }
      .animate-bg-float1 { animation: bgFloat1 12s ease-in-out infinite alternate; }
      .animate-bg-float2 { animation: bgFloat2 14s ease-in-out infinite alternate; }
      .animate-bg-float3 { animation: bgFloat3 16s ease-in-out infinite alternate; }
      @keyframes fadeIn { from { opacity: 0; transform: scale(.96);} to { opacity: 1; transform: scale(1);} }
      @keyframes slideDown { from { opacity: 0; transform: translateY(-32px);} to { opacity: 1; transform: translateY(0);} }
      @keyframes bounce { to { transform: translateY(-10px) scale(1.08); } }
      @keyframes spin { to { transform: rotate(360deg); } }
      @keyframes bgFloat1 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(40px) scale(1.08);} }
      @keyframes bgFloat2 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(-30px) scale(1.04);} }
      @keyframes bgFloat3 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(20px) scale(1.02);} }
    `}</style>
  </div>
);

export default Home;
