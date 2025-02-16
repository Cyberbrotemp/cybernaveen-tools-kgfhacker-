import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">HackerTools</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/tools" className="hover:bg-gray-700 px-3 py-2 rounded-md">Tools</Link>
              <Link to="/news" className="hover:bg-gray-700 px-3 py-2 rounded-md">Tech News</Link>
              <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
              {user ? (
                <>
                  <Link to="/profile" className="hover:bg-gray-700 px-3 py-2 rounded-md">Profile</Link>
                  <button onClick={logout} className="hover:bg-gray-700 px-3 py-2 rounded-md">Logout</button>
                </>
              ) : (
                <Link to="/auth" className="hover:bg-gray-700 px-3 py-2 rounded-md">Login/Register</Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
            <Link to="/tools" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Tools</Link>
            <Link to="/news" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Tech News</Link>
            <Link to="/about" className="block hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
            {user ? (
              <>
                <Link to="/profile" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Profile</Link>
                <button onClick={logout} className="block w-full text-left hover:bg-gray-700 px-3 py-2 rounded-md">Logout</button>
              </>
            ) : (
              <Link to="/auth" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Login/Register</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}