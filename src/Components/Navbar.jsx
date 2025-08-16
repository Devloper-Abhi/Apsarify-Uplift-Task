/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import * as fa from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [SidebarTop, setSideBarTop] = useState(-100);
  const [SideBarDisplay, setSideBarDisplay] = useState("none");
  return (
    <>
      <div
        className={
          `flex w-screen py-3 px-5 justify-between items-center fixed z-50 transition-colors duration-300 ` +
          (darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-black")
        }
      >
        <h1 className="font-bold text-xl">
          <span className={darkMode ? "text-sky-300" : "text-sky-900"}>
            UpLift
          </span>{" "}
          Task
        </h1>
        <nav className="hidden lg:flex pl-30">
          <ul>
            <li className="flex gap-1">
              <NavLink
                onClick={() => {
                  setSideBarTop(-100);
                  setTimeout(() => {
                    setSideBarDisplay("none");
                  }, 1020);
                }}
                className={({ isActive }) =>
                  "rounded-lg p-1 w-fit text-sm text-center duration-500 px-5 " +
                  (darkMode
                    ? "hover:bg-gray-900 hover:text-sky-300 hover:shadow-sky-900 " + (isActive ? "bg-gray-900 text-sky-300 shadow-sky-900" : "")
                    : "hover:bg-gray-200 hover:text-sky-700 hover:shadow-sky-200 " + (isActive ? "bg-gray-200 text-sky-700 shadow-sky-200" : ""))
                }
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => {
                  setSideBarTop(-100);
                  setTimeout(() => {
                    setSideBarDisplay("none");
                  }, 1020);
                }}
                className={({ isActive }) =>
                  "rounded-lg p-1 w-fit text-sm text-center duration-500 px-5 " +
                  (darkMode
                    ? "hover:bg-gray-900 hover:text-sky-300 hover:shadow-sky-900 " + (isActive ? "bg-gray-900 text-sky-300 shadow-sky-900" : "")
                    : "hover:bg-gray-200 hover:text-sky-700 hover:shadow-sky-200 " + (isActive ? "bg-gray-200 text-sky-700 shadow-sky-200" : ""))
                }
                to={"/About"}
              >
                About
              </NavLink>
              <NavLink
                onClick={() => {
                  setSideBarTop(-100);
                  setTimeout(() => {
                    setSideBarDisplay("none");
                  }, 1020);
                }}
                className={({ isActive }) =>
                  "rounded-lg p-1 w-fit text-sm text-center duration-500 px-5 " +
                  (darkMode
                    ? "hover:bg-gray-900 hover:text-sky-300 hover:shadow-sky-900 " + (isActive ? "bg-gray-900 text-sky-300 shadow-sky-900" : "")
                    : "hover:bg-gray-200 hover:text-sky-700 hover:shadow-sky-200 " + (isActive ? "bg-gray-200 text-sky-700 shadow-sky-200" : ""))
                }
                to={"/Features"}
              >
                Features
              </NavLink>
              <NavLink
                onClick={() => {
                  setSideBarTop(-100);
                  setTimeout(() => {
                    setSideBarDisplay("none");
                  }, 1020);
                }}
                className={({ isActive }) =>
                  "rounded-lg p-1 w-fit text-sm text-center duration-500 px-5 " +
                  (darkMode
                    ? "hover:bg-gray-900 hover:text-sky-300 hover:shadow-sky-900 " + (isActive ? "bg-gray-900 text-sky-300 shadow-sky-900" : "")
                    : "hover:bg-gray-200 hover:text-sky-700 hover:shadow-sky-200 " + (isActive ? "bg-gray-200 text-sky-700 shadow-sky-200" : ""))
                }
                to={"/Contact"}
              >
                Contact
              </NavLink>
              <NavLink
                onClick={() => {
                  setSideBarTop(-100);
                  setTimeout(() => {
                    setSideBarDisplay("none");
                  }, 1020);
                }}
                className={({ isActive }) =>
                  "rounded-lg p-1 w-fit text-sm text-center duration-500 px-5 " +
                  (darkMode
                    ? "hover:bg-gray-900 hover:text-sky-300 hover:shadow-sky-900 " + (isActive ? "bg-gray-900 text-sky-300 shadow-sky-900" : "")
                    : "hover:bg-gray-200 hover:text-sky-700 hover:shadow-sky-200 " + (isActive ? "bg-gray-200 text-sky-700 shadow-sky-200" : ""))
                }
                to={"/Dashboard"}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:flex gap-3 items-center">
          <button
            className={
              `text-xs px-3 py-1 rounded-full border transition-colors duration-200 shadow ` +
              (darkMode
                ? "bg-gray-700 text-white border-gray-500 hover:bg-gray-600 hover:shadow-sky-900 cursor-pointer"
                : "bg-gray-200 text-black border-gray-300 hover:bg-gray-300 hover:shadow-sky-200 cursor-pointer")
            }
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          <Link to={"/Login"}>
            <button
              className={
                "text-sm bg-sky-500 py-2 px-5 w-fit rounded-full font-medium shadow-md duration-500 cursor-pointer " +
                (darkMode
                  ? "hover:bg-gray-900 hover:text-sky-400 hover:shadow-sky-900"
                  : "hover:bg-white hover:text-sky-500 hover:shadow-sky-500 text-white")
              }
            >
              Login
            </button>
          </Link>
          <Link to={"/Register"}>
            <button
              className={
                "text-sm bg-sky-500 py-2 px-5 w-fit rounded-full font-medium shadow-md duration-500 cursor-pointer " +
                (darkMode
                  ? "hover:bg-gray-900 hover:text-sky-400 hover:shadow-sky-900"
                  : "hover:bg-white hover:text-sky-500 hover:shadow-sky-500 text-white")
              }
            >
              Register
            </button>
          </Link>
        </div>
        <fa.FaBars
          onClick={() => {
            setSideBarDisplay("flex");
            setTimeout(() => {
              setSideBarTop(0);
            }, 50);
          }}
          size="20px"
          color={darkMode ? "#fff" : "#000"}
          className="cursor-pointer hover:text-sky-400 lg:hidden duration-1000"
        />
      </div>
      <div
        className={
          `sidebar z-50 h-screen p-5 absolute top-0 w-screen item-center justify-center flex flex-col transition-colors ` +
          (darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-black")
        }
        style={{
          right: `${SidebarTop}vw`,
          display: SideBarDisplay,
          animationDuration: "2s",
        }}
      >
        <nav>
          <fa.FaTimes
            onClick={() => {
              setSideBarTop(-100);
              setTimeout(() => {
                setSideBarDisplay("none");
              }, 1020);
            }}
            size="20px"
            color={darkMode ? "#fff" : "#000"}
            className="cursor-pointer mx-auto my-5"
          />
          <ul>
            <li className="flex flex-col items-center justify-center gap-5">
              <NavLink
                onClick={() => {
                  setSideBarTop(-100);
                  setTimeout(() => {
                    setSideBarDisplay("none");
                  }, 1020);
                }}
                className={
                  "rounded-lg p-1 w-fit text-sm text-center duration-500 px-5 " +
                  (darkMode
                    ? "hover:bg-gray-800 hover:text-sky-300 hover:shadow-sky-900"
                    : "hover:bg-gray-200 hover:text-sky-700 hover:shadow-sky-200")
                }
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => {
                  setSideBarTop(-100);
                  setTimeout(() => {
                    setSideBarDisplay("none");
                  }, 1020);
                }}
                className={
                  "rounded-lg p-1 w-fit text-sm text-center duration-500 px-5 " +
                  (darkMode
                    ? "hover:bg-gray-800 hover:text-sky-300 hover:shadow-sky-900"
                    : "hover:bg-gray-200 hover:text-sky-700 hover:shadow-sky-200")
                }
                to={"/About"}
              >
                About
              </NavLink>
              <NavLink
                onClick={() => {
                  setSideBarTop(-100);
                  setTimeout(() => {
                    setSideBarDisplay("none");
                  }, 1020);
                }}
                className={
                  "rounded-lg p-1 w-fit text-sm text-center duration-500 px-5 " +
                  (darkMode
                    ? "hover:bg-gray-800 hover:text-sky-300 hover:shadow-sky-900"
                    : "hover:bg-gray-200 hover:text-sky-700 hover:shadow-sky-200")
                }
                to={"/Features"}
              >
                Features
              </NavLink>
              <NavLink
                onClick={() => {
                  setSideBarTop(-100);
                  setTimeout(() => {
                    setSideBarDisplay("none");
                  }, 1020);
                }}
                className={
                  "rounded-lg p-1 w-fit text-sm text-center duration-500 px-5 " +
                  (darkMode
                    ? "hover:bg-gray-800 hover:text-sky-300 hover:shadow-sky-900"
                    : "hover:bg-gray-200 hover:text-sky-700 hover:shadow-sky-200")
                }
                to={"/Contact"}
              >
                Contact
              </NavLink>
              <NavLink
                onClick={() => {
                  setSideBarTop(-100);
                  setTimeout(() => {
                    setSideBarDisplay("none");
                  }, 1020);
                }}
                className={
                  "rounded-lg p-1 w-fit text-sm text-center duration-500 px-5 " +
                  (darkMode
                    ? "hover:bg-gray-800 hover:text-sky-300 hover:shadow-sky-900"
                    : "hover:bg-gray-200 hover:text-sky-700 hover:shadow-sky-200")
                }
                to={"/Dashboard"}
              >
                Dashboard
              </NavLink>
              <button
                className={
                  `text-xs px-3 py-1 w-20 my-4 rounded-full border transition-colors duration-200 shadow ` +
                  (darkMode
                    ? "bg-gray-700 text-white border-gray-500 hover:bg-gray-600 hover:shadow-sky-900"
                    : "bg-gray-200 text-black border-gray-300 hover:bg-gray-300 hover:shadow-sky-200")
                }
                onClick={() => setDarkMode((prev) => !prev)}
              >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-center gap-5 py-5">
          <Link to={"/Login"}>
            <button
              className={
                "bg-sky-500 text-sm py-2 px-5 w-fit rounded-full font-medium shadow-md duration-500 cursor-pointer " +
                (darkMode
                  ? "hover:bg-gray-900 hover:text-sky-400 hover:shadow-sky-900"
                  : "hover:bg-white hover:text-sky-500 hover:shadow-sky-500 text-white")
              }
            >
              Login
            </button>
          </Link>
          <Link to={"/Register"}>
            <button
              className={
                "bg-sky-500 text-sm py-2 px-5 w-fit rounded-full font-medium shadow-md duration-500 cursor-pointer " +
                (darkMode
                  ? "hover:bg-gray-900 hover:text-sky-400 hover:shadow-sky-900"
                  : "hover:bg-white hover:text-sky-500 hover:shadow-sky-500 text-white")
              }
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
