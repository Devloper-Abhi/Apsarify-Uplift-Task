import React from "react";
const About = ({ darkMode }) => (
  <div
    className={
      `min-h-screen px-3 flex items-center justify-center transition-colors duration-300 px-4 overflow-hidden ` +
      (darkMode
        ? "bg-gradient-to-br from-gray-900 via-sky-900 to-gray-800 text-gray-100"
        : "bg-gradient-to-br from-sky-100 via-white to-sky-200 text-black")
    }
  >
    <div className="max-w-3xl w-full flex flex-col items-center justify-center animate-fade-in">
      <h1
        className={
          `text-4xl font-extrabold mb-6 text-center tracking-tight animate-slide-down ` +
          (darkMode ? "text-sky-300" : "text-sky-900")
        }
      >
        About <span className="animate-bounce inline-block">🎉</span>
      </h1>
      <p className="mb-4 text-md text-center animate-fade-in-delay">
        UpLift Task helps people organize and achieve more in their personal and
        professional lives. Whether you're managing daily chores, tracking work
        projects, or setting personal goals, UpLift Task gives you the tools to
        make it happen.
      </p>
      <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-center animate-fade-in-delay2">
        Our mission is to simplify productivity with a clean, intuitive
        interface — so you can spend less time managing tasks and more time
        achieving them. <span className="inline-block animate-spin">✨</span>
      </p>
    </div>
    <style>{`
      .animate-fade-in { animation: fadeIn 0.8s cubic-bezier(.4,0,.2,1); }
      .animate-fade-in-delay { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1); }
      .animate-fade-in-delay2 { animation: fadeIn 1.6s cubic-bezier(.4,0,.2,1); }
      .animate-slide-down { animation: slideDown 0.8s cubic-bezier(.4,0,.2,1); }
      @keyframes fadeIn { from { opacity: 0; transform: scale(.96);} to { opacity: 1; transform: scale(1);} }
      @keyframes slideDown { from { opacity: 0; transform: translateY(-24px);} to { opacity: 1; transform: translateY(0);} }
    `}</style>
  </div>
);

export default About;
