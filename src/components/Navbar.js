import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HiOutlineX, HiMenuAlt3 } from 'react-icons/hi';
import { MovilMenu } from './MovilMenu';

export const Navbar = () => {
  const [isMovilMenuOpen, setIsMovilMenuOpen] = useState(false);

  const toggleMenuMovil = () => {
    setIsMovilMenuOpen(!isMovilMenuOpen);
  };

  return (
    <>
      <header className="w-full block fixed bg-dark-custom">
        {/* Container */}
        <div className="flex items-center relative h-navbar-custom px-5 md:px-20">
          {/* Logo - navbar */}
          <div className="font-bold text-2xl flex-0">
            <span className="text-green-custom">></span>oestrada
            <span className="text-green-custom">_</span>
          </div>
          {/* Navigation - navbar */}
          <nav className="flex-1">
            <ul className="hidden md:flex justify-end space-x-10">
              <li>About</li>
              <li>Experience</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        {/* Movil menu */}
        <div className="absolute bottom-0 right-0">
          <div
            className={`fixed right-6 bottom-8 flex items-center justify-center md:hidden w-[55px] h-[55px] rounded-full 
            ${isMovilMenuOpen ? 'bg-light-custom' : 'bg-green-custom'}`}
          >
            {isMovilMenuOpen ? (
              <HiOutlineX
                className="text-dark-custom text-3xl cursor pointer"
                onClick={toggleMenuMovil}
              />
            ) : (
              <HiMenuAlt3
                className="text-dark-custom text-3xl cursor-pointer"
                onClick={toggleMenuMovil}
              />
            )}
          </div>

          <div className="fixed right-0 bottom-12">
            {isMovilMenuOpen && (
              <MovilMenu onClose={() => setIsMovilMenuOpen(false)} />
            )}
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
