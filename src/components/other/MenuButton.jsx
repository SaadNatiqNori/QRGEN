import React from "react";

const MenuButton = ({ menuIcon, onClick }) => (
    <button className='relative col-span-2 flex justify-start items-center' onClick={onClick}>
        <img src={menuIcon} alt="menu" className='w-[30px]' loading='lazy' />
    </button>
);
export default MenuButton;