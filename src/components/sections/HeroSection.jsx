import React from 'react'

export default function HeroSection() {
    return (
        <section className='relative w-full min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-center items-center gap-7 lg:gap-14 px-8' id='hero-section'>
            {/* Non Mobile */}
            <h1 className='text-5xl hidden lg:block'>
                <span className='text-primary font-[900]'><strong>QR Codes</strong></span> <span className='font-semibold'>for your business</span>
            </h1>
            <p className='font-extralight text-2xl hidden lg:block'>
                Discover how companies similar to yours use QR codes strategically.
            </p>
            {/* Mobile */}
            <h1 className='text-3xl block lg:hidden text-center'>
                <span className='font-semibold'>Choose the type of </span><span className='text-primary font-[900]'><strong>QR Code</strong></span> <span className='font-semibold'>you need to improve your business</span>
            </h1>
            <p className='font-extralight text-lg block lg:hidden text-center leading-5'>
                The variety of types of customizable QR Codes will allow you to renew your print and digitsl media, improve the customer experience and integrate link to any type of content.
            </p>
        </section>
    )
}
