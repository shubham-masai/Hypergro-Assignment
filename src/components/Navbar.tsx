import React, { useState } from 'react';
import { logo, menu, close } from '../assets';

interface NavItemProps {
  title: string;
  onClick?: () => void;
}

const Navbar : React.FC = () => { 
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center z-50">
      <img src={logo} alt="Logo" className="logo w-[180px] h-[40px]" />

      {/* Main navigation links for larger screens */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <NavItem title="Home" />
        <NavItem title="Movies" />
        <NavItem title="TV Shows" />
      </ul>

      {/* Mobile navigation for smaller screens */}
      <div className="sm:hidden flex flex-1 justify-end items-center z-50">
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar for mobile */}
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <NavItem title="Home" onClick={() => setToggle(false)} />
            <NavItem title="Movies" onClick={() => setToggle(false)} />
            <NavItem title="TV Shows" onClick={() => setToggle(false)} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem : React.FC<NavItemProps>= ({ title, onClick }) => (
  <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite sm:mr-10" onClick={onClick}>
    {title}
  </li>
);

export default Navbar;