import React from 'react'
// Hoks
import useAppIcons from '../../hooks/useAppIcons';

export default function ServiceCard({ category, index }) {
    const { corners } = useAppIcons();

    return (
        <div key={index} className="relative bg-white shadow-sm flex flex-col justify-center items-center gap-5 min-w-[135px] lg:w-[135px] h-[135px] rounded-2xl overflow-hidden p-2 cursor-pointer">
            <i className={`fa ${category.icon} fa-xl text-primary z-20`}></i>
            <p className='font-bold text-center text-sm px-1 z-20'>{category.title}</p>
            <img src={corners} className='absolute top-0 left-0 w-full h-full z-10' alt="corners" loading="lazy" />
        </div>
    )
}
