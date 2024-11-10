import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Hooks
import useAppIcons from '../../../src/hooks/useAppIcons';
// Components
import CustomeDropdown from '../dropdown/CustomeDropdown';
import MenuButton from '../other/MenuButton';
import Logo from '../other/Logo';
import AuthButtons from '../other/AuthButtons';
import MobileMenu from '../other/MobileMenu';


const NavLink = ({ to, text }) => (
    <Link to={to} className='text-black pb-1 border-b-2 border-transparent hover:text-primary hover:border-primary w-full lg:w-fit'>
        {text}
    </Link>
);

const Header = () => {
    const { logo, menu } = useAppIcons();
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            {/* Non-Mobile Header */}
            <header className='bg-white w-full h-[80px] hidden lg:flex justify-between items-center gap-5 fixed top-0 left-0 z-50 px-32 pt-2'>
                <Logo src={logo} alt="logo" />
                <div className='flex flex-1 justify-end items-center gap-7'>
                    <CustomeDropdown text={'Features'} />
                    <CustomeDropdown text={'Resources'} />
                    <NavLink to={'/'} text={'Plans and prices'} />
                    <NavLink to={'/'} text={'API'} />
                    <NavLink to={'/'} text={'FAQ'} />
                    <AuthButtons />
                </div>
            </header>

            {/* Mobile Header */}
            <header className='bg-white w-full h-[80px] grid grid-cols-8 lg:hidden gap-5 fixed top-0 left-0 z-50 px-4 pt-2'>
                <MenuButton menuIcon={menu} onClick={() => setOpenMenu(true)} />
                <Logo src={logo} alt="logo" />
                <MobileMenu open={openMenu} onClose={() => setOpenMenu(false)} />
                <SupportButton />
            </header>
        </>
    );
};


// Reusable Support Button Component
const SupportButton = () => (
    <button className='relative col-span-2 flex justify-end items-center'>
        <i className="fa-solid fa-headset fa-2xl"></i>
    </button>
);

export default Header;