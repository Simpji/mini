import React, { useState } from 'react';
import { SlMenu } from 'react-icons/sl';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (section) => {
    setDropdownOpen(dropdownOpen === section ? null : section);
  };

  return (
    <div className="bg-blue-500 sticky top-0 z-20 flex items-center py-2 justify-between px-4">
      <div>
        <Link to="/">
          <h1 className="text-24px text-white font-bold">Mini Unsplash Clone</h1>
        </Link>
      </div>
      <nav className="hidden lg:flex space-x-4 text-white text-15px">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/about">About</Link>
        <div className="relative">
          <button
            onClick={() => toggleDropdown('more')}
            className="flex items-center space-x-2"
          >
            <span>More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div className={`absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg ${dropdownOpen === 'more' ? 'block' : 'hidden'}`}>
            <Link to="/link1" className="block px-4 py-2 hover:bg-gray-100">Link 1</Link>
            <Link to="/link2" className="block px-4 py-2 hover:bg-gray-100">Link 2</Link>
          </div>
        </div>
      </nav>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-center w-10 h-10 lg:hidden">
        <SlMenu className="text-3xl text-white" />
      </button>
      <div onClick={() => setOpen(false)} className={`fixed lg:hidden top-0 w-full bg-black z-20 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}></div>
      <div className={`fixed lg:hidden left-0 top-0 w-72 h-screen overflow-auto z-30 bg-white transition-all duration-200 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <MdCancel onClick={() => setOpen(false)} className="text-red-500 text-3xl cursor-pointer" />
        </div>
        <nav className="flex flex-col text-black text-15px">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/search" onClick={() => setOpen(false)}>Search</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <button onClick={() => toggleDropdown('more')} className="flex items-center space-x-2">
            <span>More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div className={`flex flex-col ${dropdownOpen === 'more' ? 'block' : 'hidden'}`}>
            <Link to="/link1" onClick={() => setOpen(false)} className="px-4 py-2 hover:bg-gray-100">Link 1</Link>
            <Link to="/link2" onClick={() => setOpen(false)} className="px-4 py-2 hover:bg-gray-100">Link 2</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;