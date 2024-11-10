import React from "react";

const AuthButtons = () => (
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
);

export default AuthButtons;