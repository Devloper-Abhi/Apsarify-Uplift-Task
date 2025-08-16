import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = ({ darkMode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div
      className={
        `flex items-center justify-center min-h-[85vh] transition-colors duration-300 ` +
        (darkMode ? "bg-gray-900" : "bg-gray-50")
      }
    >
      <div
        className={
          `rounded-2xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden animate-fade-in ` +
          (darkMode ? "bg-gray-800" : "bg-white")
        }
        style={{
          boxShadow: darkMode
            ? "0 8px 32px 0 rgba(0, 80, 180, 0.25)"
            : "0 8px 32px 0 rgba(0, 180, 255, 0.12)",
        }}
      >
        {/* Animated circle background */}
        <div
          className={
            "absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-20 pointer-events-none " +
            (darkMode ? "bg-sky-400" : "bg-sky-300")
          }
        ></div>
        <h2
          className={
            `text-2xl font-bold mb-4 text-center tracking-tight animate-slide-down ` +
            (darkMode ? "text-sky-300" : "text-sky-900")
          }
        >
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={
              "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 " +
              (darkMode
                ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-sky-400"
                : "bg-white border-gray-300 text-black focus:ring-sky-500") +
              " hover:shadow-lg"
            }
            required
          />
          <input
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              maxLength: {
                value: 16,
                message: "Password must be at most 16 characters long",
              },
            })}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={
              "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 " +
              (darkMode
                ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-sky-400"
                : "bg-white border-gray-300 text-black focus:ring-sky-500") +
              " hover:shadow-lg"
            }
            required
          />
          <p className="text-red-600 text-sm font-medium">
            {errors.password && errors.password.message}
          </p>
          <button
            disabled={isSubmitting}
            type="submit"
            className={
              "bg-sky-500 w-full py-3 rounded-full cursor-pointer text-white font-medium shadow-lg duration-300 transform transition-all " +
              " hover:text-sky-500 hover:shadow-sky-500 active:scale-95 " +
              (darkMode ? "hover:bg-gray-900 hover:text-sky-400" : "")
            }
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-sky-500 hover:underline hover:text-sky-700 transition-colors duration-200"
          >
            Register
          </Link>
        </p>
      </div>
      {/* Animations */}
      <style>
        {`
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1);
        }
        .animate-slide-down {
          animation: slideDown 0.7s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(.96);}
          to { opacity: 1; transform: scale(1);}
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-24px);}
          to { opacity: 1; transform: translateY(0);}
        }
        `}
      </style>
    </div>
  );
};

export default Login;
