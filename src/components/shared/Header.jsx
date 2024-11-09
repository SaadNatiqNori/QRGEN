import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// Hooks
import useAppIcons from '../../../src/hooks/useAppIcons';
// Components
import CustomeDropdown from '../dropdown/CustomeDropdown';

export default function Header() {
    const { logo, menu } = useAppIcons();
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            {/* Non Mobile Header */}
            <header className='bg-white w-full h-[80px] hidden md:flex justify-between items-center gap-5 bg-transparent fixed top-0 left-0 z-50 px-32 pt-2'>
                {/* Logo */}
                <div className='w-3/12'>
                    <img src={logo} alt="logo" className='w-[150px] pb-2' loading="lazy" />
                </div>
                {/* Links and Buttons */}
                <div className='flex flex-1 justify-end items-center gap-7'>
                    {/* We can make it more dynamic by passing options prop to the component */}
                    <CustomeDropdown text={'Features'} />
                    <CustomeDropdown text={'Resources'} />
                    {/* Navs */}
                    <Link to={'/'} className='text-black pb-1 border-b-2 border-transparent hover:text-primary hover:border-primary'>Plans and prices</Link>
                    <Link to={'/'} className='text-black pb-1 border-b-2 border-transparent hover:text-primary hover:border-primary'>API</Link>
                    <Link to={'/'} className='text-black pb-1 border-b-2 border-transparent hover:text-primary hover:border-primary'>FAQ</Link>
                    {/* Auth Buttons */}
                    <div className='flex justify-between items-center gap-5'>
                        <button className='bg-primary text-white border border-primary flex justify-center items-center gap-1 rounded-md w-[120px] py-[10px] hover:opacity-95 mb-2'>
                            <span>Register</span>
                            <i className="fa-regular fa-sm fa-user"></i>
                        </button>
                        <button className='bg-transparent text-primary border border-primary flex justify-center items-center gap-1 rounded-md w-[120px] py-[10px] hover:opacity-95 mb-2'>
                            <span>Log In</span>
                            <i className="fa-solid fa-sm fa-arrow-right-to-bracket"></i>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Header */}
            <header className='bg-white w-full h-[80px] grid grid-cols-8 md:hidden gap-5 bg-transparent fixed top-0 left-0 z-50 px-4 pt-2'>

                {/* Menu Icon */}
                <button className='relative col-span-2 flex justify-start items-center' onClick={() => {
                    setOpenMenu(true);
                }}>
                    <img src={menu} alt="menu" className='w-[30px]' loading='lazy' />
                </button>
                {/* Links and Buttons */}
                <div className={`${openMenu ? 'flex w-full left-0' : 'w-0 -left-full hidden'} flex-col justify-center items-start gap-7 fixed top-0 min-h-[100vh] bg-white transform duration-500 p-14 z-[100]`}>
                    {/* We can make it more dynamic by passing options prop to the component */}
                    <CustomeDropdown text={'Features'} />
                    <CustomeDropdown text={'Resources'} />
                    {/* Navs */}
                    <Link to={'/'} className='text-black pb-1 border-b-2 border-transparent hover:text-primary hover:border-primary'>Plans and prices</Link>
                    <Link to={'/'} className='text-black pb-1 border-b-2 border-transparent hover:text-primary hover:border-primary'>API</Link>
                    <Link to={'/'} className='text-black pb-1 border-b-2 border-transparent hover:text-primary hover:border-primary'>FAQ</Link>
                    {/* Auth Buttons */}
                    <div className='flex justify-between items-center gap-5'>
                        <button className='bg-primary text-white border border-primary flex justify-center items-center gap-1 rounded-md w-[120px] py-[10px] hover:opacity-95 mb-2'>
                            <span>Register</span>
                            <i className="fa-regular fa-sm fa-user"></i>
                        </button>
                        <button className='bg-transparent text-primary border border-primary flex justify-center items-center gap-1 rounded-md w-[120px] py-[10px] hover:opacity-95 mb-2'>
                            <span>Log In</span>
                            <i className="fa-solid fa-sm fa-arrow-right-to-bracket"></i>
                        </button>
                    </div>
                    {/* Close Icon */}
                    <div className='fixed top-10 left-10 z-[110]' onClick={() => setOpenMenu(false)}>
                        <i className="fa-solid fa-xmark fa-2xl"></i>
                    </div>
                </div>
                {/* Logo */}
                <div className='col-span-4 flex justify-center items-center'>
                    <img src={logo} alt="logo" className='w-[150px]' loading="lazy" />
                </div>
                {/* Support Icon */}
                <button className='relative col-span-2 flex justify-end items-center'>
                    <i className="fa-solid fa-headset fa-2xl"></i>
                </button>

            </header>
        </>
    )
}
