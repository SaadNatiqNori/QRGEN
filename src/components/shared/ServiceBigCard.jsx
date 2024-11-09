import React from 'react'

export default function ServiceBigCard({ category, index }) {

    return (
        <div key={index} className="relative bg-[#F2F1FF] shadow-sm flex flex-col justify-center items-center gap-5 w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden p-5 md:p-10 cursor-pointer">
            <img src='https://hotpot.ai/images/site/ai/image_generator/art_maker/teaser_400.jpg' className='w-[300px] h-[150px] md:h-[300px] max-h-[300px] object-cover overflow-hidden rounded-lg' alt="item-img" loading="lazy" />
            <div className='w-[70px] h-[70px] p-6 flex justify-center items-center border border-gray-300 bg-white rounded-lg'>
                <i className={`fa ${category.icon} fa-xl text-primary`}></i>
            </div>
            <p className='font-bold text-center text-sm'>{category.title}</p>
            <button className='border border-primary rounded-lg text-primary px-3 py-1 hover:bg-primary hover:text-white transform duration-300'>More Info</button>
        </div>
    )
}
