import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

import { removeFromSession } from '../utils/sessions';
import ProfileDropdown from './ProfileDropdown';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { userAuth, setUserAuth } = useContext(UserContext);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setisMenuOpen(!isMenuOpen);
  };

  // Handle logout
  const handleLogout = () => {
    // removeFromSession('user');
    // removeFromSession('token');
    // setUserAuth({ access_token: null });
  };

  const navItems = [
    { path: '/', title: 'Home' },
    { path: '/courses', title: 'Courses' },
    { path: '/faculty', title: 'Faculty' },
    { path: '/admissions', title: 'Admissions' },
    { path: '/about', title: 'About Us' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              className="w-10 h-10"
              src="https://logodix.com/logo/1861206.png" // University Logo
              alt="University Logo"
            />
            <h1 className="text-2xl font-bold text-blue-800">Certify</h1>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-blue-800 focus:outline-none"
              onClick={handleMenuToggler}
            >
              {isMenuOpen ? (
                <FaXmark className="w-7 h-7" />
              ) : (
                <FaBarsStaggered className="w-7 h-7" />
              )}
            </button>
          </div>

          {/* Centered Navigation Items */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-12">
            {navItems.map(({ path, title }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-800 font-semibold border-b-2 border-blue-800'
                    : 'text-gray-700 hover:text-blue-600 transition duration-200'
                }
              >
                {title}
              </NavLink>
            ))}
          </nav>

          {/* Authenticated Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {userAuth?.access_token ? (
              <ProfileDropdown
                fullname={userAuth.fullname}
                handleLogout={handleLogout}
              />
            ) : (
              <Link
                to="/admin-login"
                className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-black outline-none bg-transparent hover:bg-black text-black hover:text-white transition-all duration-300"
                role="button"
              >
                Admin Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="bg-blue-800 text-white py-5 px-4 rounded-md lg:hidden">
            <ul className="flex flex-col space-y-4">
              {navItems.map(({ path, title }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? 'font-semibold text-yellow-300'
                        : 'text-white transition duration-200 hover:text-yellow-200'
                    }
                    onClick={() => setisMenuOpen(false)} // Close menu on link click
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
              {userAuth?.access_token ? (
                <>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-white transition duration-200 hover:text-yellow-200"
                    >
                      Logout
                    </button>
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className="text-white transition duration-200 hover:text-yellow-200"
                    >
                      Profile
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    to="/admin-login"
                    className="text-white transition duration-200 hover:text-yellow-200"
                  >
                    Admin Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
