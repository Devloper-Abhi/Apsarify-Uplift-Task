import React from "react";

const Contact = ({ darkMode }) => (
  <div
    className={
      `min-h-screen flex items-center justify-center transition-colors duration-300 px-4 overflow-hidden ` +
      (darkMode
        ? "bg-gradient-to-br from-gray-900 via-sky-900 to-gray-800 text-gray-100"
        : "bg-gradient-to-br from-sky-100 via-white to-sky-200 text-black")
    }
  >
    <div className="max-w-xl w-full flex flex-col items-center justify-center animate-fade-in">
      <h1
        className={
          `text-4xl font-extrabold mb-6 text-center tracking-tight animate-slide-down ` +
          (darkMode ? "text-sky-300" : "text-sky-900")
        }
      >
        Contact Us <span className="animate-bounce inline-block">📬</span>
      </h1>
      <p className="mb-6 text-center animate-fade-in-delay">
        Have questions or feedback? Reach out and we’ll get back to you soon!{" "}
        <span className="inline-block animate-spin">💌</span>
      </p>
      <form className="w-full space-y-4 animate-fade-in-delay2">
        <input
          className={
            "w-full px-4 py-2 rounded border outline-none " +
            (darkMode
              ? "bg-gray-800 border-gray-700 text-gray-100"
              : "bg-white border-gray-300 text-black")
          }
          type="text"
          placeholder="Your Name"
        />
        <input
          className={
            "w-full px-4 py-2 rounded border outline-none " +
            (darkMode
              ? "bg-gray-800 border-gray-700 text-gray-100"
              : "bg-white border-gray-300 text-black")
          }
          type="email"
          placeholder="Your Email"
        />
        <textarea
          className={
            "w-full px-4 py-2 rounded border outline-none resize-none " +
            (darkMode
              ? "bg-gray-800 border-gray-700 text-gray-100"
              : "bg-white border-gray-300 text-black")
          }
          rows={4}
          placeholder="Your Message"
        />
        <button
          type="submit"
          className={
            "w-full py-2 rounded bg-sky-500 font-semibold transition-colors duration-200 " +
            (darkMode
              ? "text-white hover:bg-sky-600"
              : "text-white hover:bg-sky-700")
          }
        >
          Send
        </button>
      </form>
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

export default Contact;
