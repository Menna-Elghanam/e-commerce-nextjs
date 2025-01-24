import React, { useState } from "react";
import { FiShoppingCart, FiSearch, FiMenu, FiX, FiUser } from "react-icons/fi";
import { Input } from "@heroui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Logo </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-gray-300 transition-colors">
              Home
            </a>
            <a
              href="/products"
              className="hover:text-gray-300 transition-colors"
            >
              Products
            </a>
            <a
              href="/categories"
              className="hover:text-gray-300 transition-colors"
            >
              Categories
            </a>

          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <Input
                classNames={{
                  base: "max-w-full sm:max-w-[10rem] h-10",
                  mainWrapper: "h-full",
                  input: "text-small",
                  inputWrapper:
                    "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                type="search"
              />
            </div>

            <button className="relative hover:text-gray-300 transition-colors">
              <FiShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            <button className="hover:text-gray-300 transition-colors">
              <FiUser className="w-6 h-6" />
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 pb-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a href="/" className="hover:text-gray-300 transition-colors">
              Home
            </a>
            <a
              href="/products"
              className="hover:text-gray-300 transition-colors"
            >
              Products
            </a>
            <a
              href="/categories"
              className="hover:text-gray-300 transition-colors"
            >
              Categories
            </a>


            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-800 text-gray-100 px-4 py-2 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FiSearch className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            </div>

            <div className="flex space-x-4 pt-2">
              <button className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
                <FiShoppingCart className="w-5 h-5" />
                <span>Cart (3)</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
                <FiUser className="w-5 h-5" />
                <span>Profile</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
