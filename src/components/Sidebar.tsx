// src/components/Sidebar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">My Dashboard</div>
      <nav className="mt-4">
        <Link to="/" className="block py-2 px-4 hover:bg-gray-700">Dashboard</Link>
        <Link to="/users" className="block py-2 px-4 hover:bg-gray-700">Users</Link>
        <Link to="/settings" className="block py-2 px-4 hover:bg-gray-700">Settings</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
