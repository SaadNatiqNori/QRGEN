import React from "react";

const Logo = ({ src, alt }) => (
    <div className='col-span-4 flex justify-center items-center lg:w-3/12'>
        <img src={src} alt={alt} className='w-[150px] pb-0 lg:pb-2' loading="lazy" />
    </div>
);

export default Logo;
