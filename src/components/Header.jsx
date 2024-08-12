import React from 'react';
import { Link } from 'react-router-dom';
import { FaTasks } from 'react-icons/fa'; // Import an icon from react-icons

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <FaTasks className="text-3xl" /> {/* Logo icon */}
        <span className="text-xl font-bold">Todo App</span>
      </div>
      <div>
        <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-2">
          Login
        </Link>
        <Link to="/signup" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
