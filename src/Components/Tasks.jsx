import React, { useState, useEffect } from "react";
import { FiHome, FiList, FiUser, FiLogOut, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

// Default tasks
const initialTasks = [
  { title: "Start Your Day With Uplift Task", due: "Now", status: "Completed" },
];

const Tasks = ({ darkMode }) => {
  const [tasks] = useState(() => {
    const saved = localStorage.getItem("taskForm");
    try {
      const parsed = saved ? JSON.parse(saved) : initialTasks;
      return Array.isArray(parsed) ? parsed : initialTasks;
    } catch {
      localStorage.removeItem("taskForm");
      return initialTasks;
    }
  });
  const [viewTask, setViewTask] = useState(null);

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("taskForm", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div
      className={
        `relative flex min-h-screen pt-15 transition-colors duration-300 overflow-hidden ` +
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
          `relative z-10 w-64 p-6 flex flex-col justify-between min-h-screen transition-colors duration-300 shadow-xl ` +
          (darkMode
            ? "bg-gray-800 text-gray-100 border-r border-gray-700"
            : "bg-white text-black border-r border-gray-200")
        }
      >
        <div>
          <nav className="space-y-4 mt-5">
            <Link
              className={
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 font-medium cursor-pointer " +
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
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 font-medium cursor-pointer " +
                (darkMode
                  ? "hover:bg-gray-900 hover:text-sky-300 hover:shadow-sky-900 border border-transparent hover:border-sky-700"
                  : "hover:bg-sky-50 hover:text-sky-700 hover:shadow-sky-200 border border-transparent hover:border-sky-400")
              }
              to="/tasks"
            >
              <FiList /> My Tasks
            </Link>
            <Link
              className={
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 font-medium cursor-pointer " +
                (darkMode
                  ? "hover:bg-gray-900 hover:text-sky-300 hover:shadow-sky-900 border border-transparent hover:border-sky-700"
                  : "hover:bg-sky-50 hover:text-sky-700 hover:shadow-sky-200 border border-transparent hover:border-sky-400")
              }
              to="/profile"
            >
              <FiUser /> Profile
            </Link>
          </nav>
        </div>
        <button
          className={
            "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 font-medium cursor-pointer " +
            (darkMode
              ? "hover:bg-red-900 hover:text-red-300 hover:shadow-red-900 border border-transparent hover:border-red-700"
              : "hover:bg-red-50 hover:text-red-700 hover:shadow-red-200 border border-transparent hover:border-red-400")
          }
        >
          <FiLogOut /> Logout
        </button>
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
        <div className="flex justify-between items-center mb-6 animate-fade-in">
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

        {/* Task Table */}
        <div
          className={
            `p-6 rounded-2xl shadow-xl transition-colors duration-300 animate-fade-in-delay2 ` +
            (darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200")
          }
        >
          <h3
            className={
              `text-lg font-semibold mb-4 ` +
              (darkMode ? "text-sky-300" : "text-sky-700")
            }
          >
            Tasks
          </h3>
          <table className="w-full text-left">
            <thead>
              <tr className={darkMode ? "text-gray-400" : "text-gray-600"}>
                <th className="py-2">Task</th>
                <th className="py-2">Due Date</th>
                <th className="py-2">Status</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-400">
                    No tasks found.
                  </td>
                </tr>
              )}
              {Array.isArray(tasks) &&
                tasks.map((task, idx) => (
                  <tr
                    key={idx}
                    className={
                      "group transition-all duration-200 rounded-xl cursor-pointer hover:scale-[1.01] " +
                      (darkMode ? "hover:bg-gray-900" : "hover:bg-sky-50")
                    }
                    style={{ borderBottom: "none" }}
                  >
                    <td className="py-2 px-2">{task.title}</td>
                    <td className="py-2">{task.due}</td>
                    <td
                      className={`py-2 font-semibold ${
                        task.status === "Completed"
                          ? "text-green-500"
                          : task.status === "Pending"
                          ? "text-red-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {task.status}
                    </td>
                    <td className="py-2 flex items-center gap-2">
                      <button
                        className={
                          "p-2 rounded-full border transition-all duration-200 shadow-sm cursor-pointer " +
                          (darkMode
                            ? "border-gray-700 text-sky-300 hover:bg-sky-900 hover:text-white hover:shadow-sky-900"
                            : "border-sky-200 text-sky-700 hover:bg-sky-100 hover:text-sky-900 hover:shadow-sky-200")
                        }
                        onClick={() => setViewTask(task)}
                        title="View"
                      >
                        <FiEye />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* View Modal */}
        {viewTask && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
            <div
              className={
                `rounded-2xl p-8 shadow-lg min-w-[300px] max-w-xs transition-colors duration-300 ` +
                (darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-black")
              }
            >
              <h2
                className={
                  `text-xl font-bold mb-4 ` +
                  (darkMode ? "text-sky-300" : "text-sky-900")
                }
              >
                Task Details
              </h2>
              <div className="mb-2">
                <span className="font-semibold">Title:</span> {viewTask.title}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Due:</span> {viewTask.due}
              </div>
              <div className="mb-4">
                <span className="font-semibold">Status:</span> {viewTask.status}
              </div>
              <button
                className="bg-sky-700 text-white px-4 py-1 rounded w-full cursor-pointer shadow-md hover:bg-sky-800 hover:shadow-sky-700 active:scale-95 transition-all duration-200"
                onClick={() => setViewTask(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <style>{`
          .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1); }
          .animate-fade-in-delay { animation: fadeIn 1.8s cubic-bezier(.4,0,.2,1); }
          .animate-fade-in-delay2 { animation: fadeIn 2.4s cubic-bezier(.4,0,.2,1); }
          .animate-bounce { animation: bounce 1.5s infinite alternate cubic-bezier(.4,0,.2,1); }
          .animate-bg-float1 { animation: bgFloat1 12s ease-in-out infinite alternate; }
          .animate-bg-float2 { animation: bgFloat2 14s ease-in-out infinite alternate; }
          .animate-bg-float3 { animation: bgFloat3 16s ease-in-out infinite alternate; }
          @keyframes fadeIn { from { opacity: 0; transform: scale(.96);} to { opacity: 1; transform: scale(1);} }
          @keyframes bounce { to { transform: translateY(-10px) scale(1.08); } }
          @keyframes bgFloat1 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(40px) scale(1.08);} }
          @keyframes bgFloat2 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(-30px) scale(1.04);} }
          @keyframes bgFloat3 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(20px) scale(1.02);} }
        `}</style>
    </div>
  );
};

export default Tasks;
