import React from "react";

const featureList = [
  {
    title: "Smart Task Management",
    desc: "Organize, prioritize, and set deadlines with ease.",
  },
  {
    title: "Custom Reminders",
    desc: "Get notified before deadlines so you never miss a task.",
  },
  {
    title: "Progress Tracking",
    desc: "Track your achievements and celebrate your wins.",
  },
  {
    title: "Cross-Device Sync",
    desc: "Access your tasks anywhere, anytime.",
  },
];

const Features = ({ darkMode }) => (
  <div
    className={
      `min-h-[100vh] p-8 text-center pt-20 transition-colors duration-300 overflow-hidden ` +
      (darkMode
        ? "bg-gradient-to-br from-gray-900 via-sky-900 to-gray-800 text-gray-100"
        : "bg-gradient-to-br from-sky-100 via-white to-sky-200 text-black")
    }
  >
    <h2
      className={
        `text-4xl font-extrabold mb-8 text-center tracking-tight animate-slide-down ` +
        (darkMode ? "text-sky-300" : "text-sky-900")
      }
    >
      Features <span className="animate-bounce inline-block">🚀</span>
    </h2>
    <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
      {featureList.map((f, idx) => (
        <div
          key={idx}
          className={
            `shadow-xl rounded-2xl p-8 border transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-rotate-1 animate-fade-in-delay` +
            (darkMode
              ? " bg-gray-800 border-gray-700 hover:shadow-sky-900"
              : " bg-white border-gray-100 hover:shadow-sky-200")
          }
          style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
        >
          <h3
            className={
              darkMode
                ? "text-sky-300 text-xl font-bold"
                : "text-sky-700 text-xl font-bold"
            }
          >
            {f.title}
          </h3>
          <p className={darkMode ? "mt-2 text-gray-300" : "mt-2 text-gray-600"}>
            {f.desc}
          </p>
        </div>
      ))}
    </div>
    <style>{`
      .animate-fade-in-delay { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1); }
      .animate-slide-down { animation: slideDown 0.8s cubic-bezier(.4,0,.2,1); }
      @keyframes fadeIn { 0% { opacity: 0; transform: scale(.96);} 100% { opacity: 1; transform: scale(1);} }
      @keyframes slideDown { 0% { opacity: 0; transform: translateY(-24px);} 100% { opacity: 1; transform: translateY(0);} }
    `}</style>
  </div>
);

export default Features;
