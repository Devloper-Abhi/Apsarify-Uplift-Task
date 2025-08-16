import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiList, FiUser, FiLogOut, FiEye } from "react-icons/fi";

const Profile = ({ darkMode }) => (
  <div
    className={
      `relative sm:flex min-h-screen pt-13 transition-colors duration-300 overflow-hidden ` +
      (darkMode
        ? "bg-gradient-to-br from-gray-900 via-sky-900 to-gray-800 text-gray-100"
        : "bg-gradient-to-br from-sky-100 via-white to-sky-200 text-black")
    }
    aria-label="Tasks Background"
  >
    {/* Animated gentle floating shapes for full background */}
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
    {/* Sidebar */}
    <div
      className={
        `relative z-10 sm:w-67 sm:min-h-screen w-screen p-6 flex flex-col justify-between h-fit transition-colors duration-300 shadow-xl ` +
        (darkMode
          ? "bg-gray-800 text-gray-100 border-r border-gray-700 "
          : "bg-white text-black border-r border-gray-200")
      }
    >
      <div>
        <nav className="space-y-4 justify-between sm:items-stretch mt-4 sm:block flex-row flex g-5">
          <Link
            className={
              "flex sm:flex-row flex-col items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 font-medium " +
              (darkMode
                ? "hover:bg-gray-900 hover:text-sky-300 hover:shadow-sky-900 border border-transparent hover:border-sky-700"
                : "hover:bg-sky-50 hover:text-sky-700 hover:shadow-sky-200 border border-transparent hover:border-sky-400")
            }
            to="/dashboard"
          >
            <FiHome /> Dashboard
          </Link>
          <Link
            className={
              "flex sm:flex-row flex-col items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 font-medium " +
              (darkMode
                ? "hover:bg-gray-900 hover:text-sky-300 hover:shadow-sky-900 border border-transparent hover:border-sky-700"
                : "hover:bg-sky-50 hover:text-sky-700 hover:shadow-sky-200 border border-transparent hover:border-sky-400")
            }
            to="/tasks"
          >
            <FiList /> Tasks
          </Link>
          <Link
            className={
              "flex sm:flex-row flex-col items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 font-medium " +
              (darkMode
                ? "hover:bg-gray-900 hover:text-sky-300 hover:shadow-sky-900 border border-transparent hover:border-sky-700"
                : "hover:bg-sky-50 hover:text-sky-700 hover:shadow-sky-200 border border-transparent hover:border-sky-400")
            }
            to="/profile"
          >
            <FiUser /> Profile
          </Link>
          <Link
            className={
              "flex sm:flex-row flex-col items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 font-medium " +
              (darkMode
                ? "hover:bg-gray-900 hover:text-sky-300 hover:shadow-sky-900 border border-transparent hover:border-sky-700"
                : "hover:bg-sky-50 hover:text-sky-700 hover:shadow-sky-200 border border-transparent hover:border-sky-400")
            }
            to="/"
          >
            <FiLogOut /> Logout
          </Link>
        </nav>
      </div>
    </div>

    {/* Main Content */}
    <div
      className={
        `relative z-10 flex-1 p-8 transition-colors duration-300 ` +
        (darkMode
          ? "bg-transparent text-gray-100"
          : "bg-transparent text-black")
      }
    >
      {/* Header */}
      <div className="flex flex-col justify-between items-center mb-6 animate-fade-in">
        <div className="flex w-full justify-between items-center mb-6 animate-fade-in">
        <h1
          className={
            `text-3xl font-extrabold tracking-tight drop-shadow-lg ` +
            (darkMode ? "text-sky-300" : "text-sky-900")
          }
        >
          Welcome Back <span className="animate-bounce inline-block">👋</span>
        </h1>
        <FiUser
          className={
            "w-10 px-2 h-10 rounded-full border transition-all duration-200 cursor-pointer " +
            (darkMode
              ? "border-gray-700 hover:text-sky-300 hover:border-sky-700"
              : "border-gray-300 hover:text-sky-700 hover:border-sky-400")
          }
        />
        </div>
        <div className="relative z-10 max-w-xl w-full flex flex-col items-center justify-center animate-fade-in">
          <h1
            className={
              `text-4xl font-extrabold mb-6 text-center tracking-tight animate-slide-down ` +
              (darkMode ? "text-sky-300" : "text-sky-900")
            }
          >
            Profile <span className="animate-bounce inline-block">👤</span>
          </h1>
          <div
            className={
              "w-full p-6 rounded-2xl shadow transition-colors duration-300 animate-fade-in-delay " +
              (darkMode ? "bg-gray-800" : "bg-white")
            }
          >
            <div className="mb-4">
              <span className="font-semibold">Name:</span> John Doe{" "}
              <span className="inline-block animate-spin">🎈</span>
            </div>
            <div className="mb-4">
              <span className="font-semibold">Email:</span> johndoe@email.com
            </div>
            <div className="mb-4">
              <span className="font-semibold">Member Since:</span> Jan 2024
            </div>
            <button
              className={
                "bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-700 transition-colors duration-200 animate-fade-in-delay2 shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-300"
              }
            >
              Edit Profile
            </button>
          </div>
        </div>
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
    </div>
  </div>
);

export default Profile;
