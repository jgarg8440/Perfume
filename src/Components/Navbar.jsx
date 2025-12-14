import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();

  return (
    <nav className="px-4 sm:px-6 lg:px-12 py-4 lg:py-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#DCCA87] font-serif text-xl sm:text-2xl tracking-widest z-50">
          <Link to="/">Diamond Fragrance</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-gray-300 text-sm font-medium items-center">
          <li className="hover:text-[#DCCA87] transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#DCCA87] transition-colors">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#DCCA87] transition-colors">
            <Link to="/menu">Product</Link>
          </li>
          <li className="hover:text-[#DCCA87] transition-colors">
            <Link to="/awards">Awards</Link>
          </li>
          <li className="hover:text-[#DCCA87] transition-colors">
            <Link to="/contact">Contact</Link>
          </li>
          
          {/* Cart Icon */}
          <li>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#DCCA87] hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 lg:hidden z-50">
          {/* Mobile Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-[#DCCA87]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#DCCA87] p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 lg:hidden">
          <ul className="flex flex-col items-center justify-center h-full gap-8 text-gray-300 text-xl font-medium">
            <li onClick={() => setIsOpen(false)} className="hover:text-[#DCCA87] transition-colors">
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setIsOpen(false)} className="hover:text-[#DCCA87] transition-colors">
              <Link to="/about">About</Link>
            </li>
            <li onClick={() => setIsOpen(false)} className="hover:text-[#DCCA87] transition-colors">
              <Link to="/menu">Product</Link>
            </li>
            <li onClick={() => setIsOpen(false)} className="hover:text-[#DCCA87] transition-colors">
              <Link to="/awards">Awards</Link>
            </li>
            <li onClick={() => setIsOpen(false)} className="hover:text-[#DCCA87] transition-colors">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;