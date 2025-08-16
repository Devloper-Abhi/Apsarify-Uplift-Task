import React from "react";

const Profile = ({ darkMode }) => (
  <div
    className={
      `relative min-h-screen flex items-center justify-center transition-colors duration-300 px-4 overflow-hidden ` +
      (darkMode
        ? "bg-gradient-to-br from-gray-900 via-sky-900 to-gray-800 text-gray-100"
        : "bg-gradient-to-br from-sky-100 via-white to-sky-200 text-black")
    }
    aria-label="Profile Background"
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
);

export default Profile;
