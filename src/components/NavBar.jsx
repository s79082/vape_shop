import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo.png" // Replace with your logo image path
            alt="Logo"
            className="w-8 h-8 mr-2"
          />
          <span className="text-xl font-semibold">Your Shop Name</span>
        </div>
        <ul className="flex space-x-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer"><a href="/products">Products</a></li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
