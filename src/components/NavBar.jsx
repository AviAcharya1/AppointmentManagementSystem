// components/Navbar.jsx
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ setView, openForm, darkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Appointment Management System
            </h1>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setView('calendar')}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 mr-2"
            >
              Calendar
            </button>
            <button
              onClick={() => setView('cards')}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 mr-2"
            >
              Cards
            </button>
            <button
              onClick={() => setView('list')}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 mr-2"
            >
              List
            </button>
            <button
              onClick={openForm}
              className="px-3 py-2 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 mr-4"
            >
              Create Appointment
            </button>
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;