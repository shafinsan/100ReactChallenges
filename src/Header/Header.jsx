import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-100 p-2 rounded-box shadow w-52 menu menu-sm mt-3 z-1"
          >
            <li>
              <a>Simple</a>
              <ul className="p-2 z-10">
                <li>
                  <NavLink to="/">TypeWritter</NavLink>
                </li>
                <li>
                  <NavLink to="simple/sidebar">SideBar</NavLink>
                </li>
                <li>
                  <NavLink to="simple/clock">Clock</NavLink>
                </li>
                <li>
                  <NavLink to="simple/slider">Slider1</NavLink>
                </li>
                <li>
                  <NavLink to="simple/advanceslider">Slider2</NavLink>
                </li>
                <li>
                  <NavLink to="simple/cude">Cube</NavLink>
                </li>
                <li>
                  <NavLink to="simple/3dImage">3D Image</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="About">Complex</NavLink>
            </li>
            <li>
              <NavLink to="Contact">Compound</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">✈</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>simple</summary>
              <ul className="p-2 z-10">
                <li>
                  <NavLink to="/">TypeWritter</NavLink>
                </li>
                <li>
                  <NavLink to="simple/sidebar">SideBar</NavLink>
                </li>
                <li>
                  <NavLink to="simple/clock">Clock</NavLink>
                </li>
                <li>
                  <NavLink to="simple/slider">Slider1</NavLink>
                </li>
                <li>
                  <NavLink to="simple/advanceslider">Slider2</NavLink>
                </li>
                <li>
                  <NavLink to="simple/cude">Cube</NavLink>
                </li>
                <li>
                  <NavLink to="simple/3dImage">3D Image</NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NavLink to="About">Complex</NavLink>
          </li>
          <li>
            <NavLink to="Contact">Compound</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-2xl">🚦</a>
      </div>
    </div>
  );
}

export default Header;
