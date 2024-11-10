import React from "react";
import CustomeMobileDropdown from "../dropdown/CustomeMobileDropdown";
import AuthButtons from "./AuthButtons";
import { Link } from "react-router-dom";

const NavLink = ({ to, text }) => (
    <Link to={to} className='text-black pb-1 border-b-2 border-transparent hover:text-primary hover:border-primary w-full lg:w-fit'>
        {text}
    </Link>
);

const MobileMenu = ({ open, onClose }) => (
    <div className={`${open ? 'flex w-full left-0' : 'w-0 -left-full hidden'} flex-col justify-center items-start space-y-10 fixed top-0 min-h-[100vh] bg-white transform duration-500 p-14 z-[100]`}>
        {/* Dropdowns */}
        <CustomeMobileDropdown text={'Features'} />
        <CustomeMobileDropdown text={'Resources'} />
        {/* Nav Links */}
        {['Plans and prices', 'API', 'FAQ'].map((text) => (
            <NavLink key={text} to={'/'} text={text} />
        ))}
        {/* Auth Buttons */}
        <AuthButtons />
        {/* Close Icon */}
        <div className='fixed top-10 left-10 z-[110]' onClick={onClose}>
            <i className="fa-solid fa-xmark fa-2xl"></i>
        </div>
    </div>
);

export default MobileMenu;
