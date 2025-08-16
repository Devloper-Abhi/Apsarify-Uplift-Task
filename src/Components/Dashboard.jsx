/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  FiHome,
  FiList,
  FiUser,
  FiLogOut,
  FiEdit,
  FiTrash2,
  FiEye,
} from "react-icons/fi";
import { Link } from "react-router-dom";

// Default tasks
const initialTasks = [
  { title: "Start Your Day With Uplift Task", due: "Now", status: "Completed" },
];

const Dashboard = ({ darkMode }) => {
  const [form, setForm] = useState({ title: "", due: "", status: "Pending" });
  const [editingIndex, setEditingIndex] = useState(null);
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("taskForm");
    if (!saved) return initialTasks;
    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : initialTasks;
    } catch {
      localStorage.removeItem("taskForm");
      return initialTasks;
    }
  });
  const [viewTask, setViewTask] = useState(null);
  const [newTaskIdx, setNewTaskIdx] = useState(null);

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("taskForm", JSON.stringify(tasks));
  }, [tasks]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.title || !form.due) return;
    setTasks((prev) => {
      const updated = [...prev, form];
      setNewTaskIdx(updated.length - 1);
      setTimeout(() => setNewTaskIdx(null), 1200);
      return updated;
    });
    setForm({ title: "", due: "", status: "Pending" });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setForm(tasks[index]);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!form.title || !form.due) return;
    const updated = [...tasks];
    updated[editingIndex] = form;
    setTasks(updated);
    setEditingIndex(null);
    setForm({ title: "", due: "", status: "Pending" });
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    if (editingIndex === index) {
      setEditingIndex(null);
      setForm({ title: "", due: "", status: "Pending" });
    }
  };

  return (
    <div
      className={
        `relative flex min-h-screen pt-15 transition-colors duration-300 overflow-hidden ` +
        (darkMode
          ? "bg-gradient-to-br from-gray-900 via-sky-900 to-gray-800 text-gray-100"
          : "bg-gradient-to-br from-sky-100 via-white to-sky-200 text-black")
      }
      aria-label="Dashboard Background"
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
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 font-medium " +
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
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 font-medium " +
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
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 font-medium " +
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
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 font-medium " +
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
      <div className="flex-1 flex flex-col items-center justify-start py-12 px-4 md:px-12 relative z-10">
        {/* Welcome Back Header */}
        <div className="w-full max-w-3xl flex items-center justify-between mb-8 animate-fade-in">
          <h1
            className={
              "text-3xl font-extrabold tracking-tight drop-shadow-lg " +
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
        {/* Task Form */}
        <div
          className={
            `w-full max-w-3xl p-6 rounded-2xl shadow-xl mb-8 transition-colors duration-300 animate-fade-in-delay ` +
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
            {editingIndex === null ? "Add Task" : "Edit Task"}
          </h3>
          <form
            className="flex flex-col md:flex-row gap-2"
            onSubmit={editingIndex === null ? handleAdd : handleUpdate}
          >
            <input
              className={
                "border-2 rounded px-2 py-1 flex-1 outline-none transition-all duration-200 " +
                (darkMode
                  ? "bg-gray-900 border-gray-700 text-gray-100 focus:border-sky-400"
                  : "bg-white border-sky-900 text-black focus:border-sky-500")
              }
              name="title"
              placeholder="Task Title"
              value={form.title}
              onChange={handleChange}
            />
            <input
              className={
                "border-2 rounded px-2 py-1 flex-1 outline-none transition-all duration-200 " +
                (darkMode
                  ? "bg-gray-900 border-gray-700 text-gray-100 focus:border-sky-400"
                  : "bg-white border-sky-900 text-black focus:border-sky-500")
              }
              name="due"
              placeholder="Due Date"
              value={form.due}
              onChange={handleChange}
            />
            <select
              className={
                "border-2 rounded px-2 py-1 cursor-pointer outline-none transition-all duration-200 " +
                (darkMode
                  ? "bg-gray-900 border-gray-700 text-gray-100 focus:border-sky-400"
                  : "bg-white border-sky-900 text-black focus:border-sky-500")
              }
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
            <button
              className={
                "bg-sky-700 text-white px-4 py-1 rounded shadow-md cursor-pointer transition-all duration-200 " +
                "hover:bg-sky-800 hover:shadow-sky-700 active:scale-95"
              }
              type="submit"
            >
              {editingIndex === null ? "Add" : "Update"}
            </button>
            {editingIndex !== null && (
              <button
                className="bg-gray-400 text-white px-4 py-1 rounded shadow-md hover:bg-gray-500 active:scale-95 transition-all duration-200"
                type="button"
                onClick={() => {
                  setEditingIndex(null);
                  setForm({ title: "", due: "", status: "Pending" });
                }}
              >
                Cancel
              </button>
            )}
          </form>
        </div>

        {/* Task Table */}
        <div
          className={
            `w-full max-w-3xl p-6 rounded-2xl shadow-xl transition-colors duration-300 animate-fade-in-delay2 ` +
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
              <tr className="border-b text-gray-600">
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
                      "group transition-all duration-200 cursor-pointer hover:scale-[1.01] " +
                      (darkMode ? "hover:bg-gray-900" : "hover:bg-sky-50")
                    }
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
                          "p-2 rounded-full border transition-all duration-200 shadow-sm " +
                          (darkMode
                            ? "border-gray-700 text-blue-400 hover:bg-blue-900 cursor-pointer hover:text-white hover:shadow-blue-900"
                            : "border-blue-200 text-blue-600 hover:bg-blue-100 cursor-pointer hover:text-blue-800 hover:shadow-blue-200")
                        }
                        onClick={() => handleEdit(idx)}
                        title="Edit"
                      >
                        <FiEdit />
                      </button>
                      <button
                        className={
                          "p-2 rounded-full border transition-all duration-200 shadow-sm " +
                          (darkMode
                            ? "border-gray-700 text-red-400 hover:bg-red-900 cursor-pointer hover:text-white hover:shadow-red-900"
                            : "border-red-200 text-red-600 hover:bg-red-100 cursor-pointer hover:text-red-800 hover:shadow-red-200")
                        }
                        onClick={() => handleDelete(idx)}
                        title="Delete"
                      >
                        <FiTrash2 />
                      </button>
                      <button
                        className={
                          "p-2 rounded-full border transition-all duration-200 shadow-sm " +
                          (darkMode
                            ? "border-gray-700 text-sky-300 hover:bg-sky-900 cursor-pointer hover:text-white hover:shadow-sky-900"
                            : "border-sky-200 text-sky-700 hover:bg-sky-100 cursor-pointer hover:text-sky-900 hover:shadow-sky-200")
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

export default Dashboard;
