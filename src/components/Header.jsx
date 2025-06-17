import React, { useState, useContext } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoCallOutline, IoCart, IoClose, IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { CartContext } from "../store/CartContext"; // Make sure path is correct

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/service", name: "Service" },
    { path: "/contact", name: "Contact" },
  ];

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "border-b-2 border-blue-600 pb-1 text-blue-600 font-semibold"
      : "pb-1 hover:border-b-2 hover:border-gray-300 transition";

  return (
    <nav>
      {/* Top Bar */}
      <div className="bg-blue-950 px-3 py-1">
        <div className="container flex justify-between text-white mx-auto">
          <div className="flex items-center">
            <IoCallOutline className="me-1" />
            <span>+855 16 526 595</span>
          </div>
          <div className="hidden xl:flex">
            <span>Get 50% Off on Selected Items &emsp; | &emsp; Shop Now</span>
          </div>
          <div>
            <select className="outline-0 me-4">
              <option className="text-black">EN</option>
              <option className="text-black">KH</option>
            </select>
            <select className="outline-0">
              <option className="text-black">Cambodia</option>
              <option className="text-black">Thailand</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-4 px-3 shadow-lg relative">
        <div className="container flex justify-between items-center mx-auto">
          {/* Logo */}
          <div className="w-[20%]">
            <NavLink to="/">
              <img
                src="https://cdn.logojoy.com/wp-content/uploads/20200805121256/Warner-brothers-logo-576x600.png"
                alt="Logo"
                className="w-8 lg:w-13 h-auto"
              />
            </NavLink>
          </div>

          {/* Hamburger Toggle */}
          <div className="block xl:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <IoIosMenu className="text-2xl" />
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex w-[60%] items-center justify-between">
            <ul className="flex space-x-6 text-xl">
              {navItems.map(({ path, name }) => (
                <li key={name}>
                  <NavLink to={path} className={navLinkClass}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Search */}
            <form className="flex items-center border border-gray-300 rounded-full p-2 pe-3">
              <input
                placeholder="Search..."
                className="border-0 outline-0 px-3"
                type="text"
              />
              <button>
                <IoSearch />
              </button>
            </form>
          </div>

          {/* Desktop Account + Cart */}
          <div className="hidden xl:flex w-[20%] items-center justify-end space-x-4 relative">
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center text-blue-600 font-semibold"
                  : "flex items-center hover:text-blue-600 transition"
              }
            >
              <FaUser className="me-2" />
              Account
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center text-blue-600 font-semibold relative cursor-pointer"
                  : "flex items-center hover:text-blue-600 transition relative cursor-pointer"
              }
            >
              <IoCart className="me-2 text-xl" />
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center pointer-events-none">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>
        </div>

        {/* Mobile/iPad Menu */}
        <div
          className={`${
            isOpen
              ? "opacity-100 translate-y-2 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          } transition-all duration-300 w-[90%] xl:hidden bg-white border rounded-lg mt-6 absolute left-1/2 transform -translate-x-1/2 p-4 z-50`}
        >
          <ul className="space-y-4 text-xl">
            {navItems.map(({ path, name }) => (
              <li key={name}>
                <NavLink to={path} className={navLinkClass}>
                  {name}
                </NavLink>
              </li>
            ))}

            <li>
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center text-blue-600 font-semibold cursor-pointer"
                    : "flex items-center hover:text-blue-600 transition cursor-pointer"
                }
              >
                <FaUser className="me-2" />
                Account
              </NavLink>
            </li>

            {/* Mobile Cart Link with full tap support */}
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center text-blue-600 font-semibold relative cursor-pointer"
                    : "flex items-center hover:text-blue-600 transition relative cursor-pointer"
                }
              >
                <IoCart className="me-2 text-lg" />
                Cart
                {cartCount > 0 && (
                  <span
                    className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center pointer-events-none"
                    aria-label={`${cartCount} items in cart`}
                  >
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>

          {/* Search (mobile) */}
          <form className="flex items-center border border-gray-300 rounded-full p-2 pe-3 mt-5">
            <input
              placeholder="Search..."
              className="w-full border-0 outline-0 px-3"
              type="text"
            />
            <button>
              <IoSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
