import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import useClickOutside from '../hooks/useClickOutside';

export const MovilMenu = ({ onClose }) => {
  const menuRef = useRef();

  useClickOutside(menuRef, onClose);

  return (
    <nav
      className="absolute right-0 bottom-14 w-[250px] rounded-l-2xl h-[250px] bg-black"
      ref={menuRef}
    >
      <ul className="flex flex-col w-full h-full items-start justify-between pr-8 py-7">
        <li className="text-white text-[20px] w-full hover:bg-complement rounded-r-xl pl-8">
          <NavLink onClick={onClose} to="/">
            Home
          </NavLink>
        </li>
        <li className="text-white text-[20px] w-full hover:bg-complement rounded-r-xl pl-8">
          <NavLink onClick={onClose} to="/portfolio">
            Linkedin
          </NavLink>
        </li>
        <li className="text-white text-[20px] w-full hover:bg-complement rounded-r-xl pl-8">
          <NavLink onClick={onClose} to="/services">
            Github
          </NavLink>
        </li>
        <li className="text-white text-[20px] w-full hover:bg-complement rounded-r-xl pl-8">
          <NavLink onClick={onClose} to="/contact">
            Instagram
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
