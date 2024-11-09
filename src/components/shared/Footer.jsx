import React from 'react'
// Hook
import useAppIcons from '../../hooks/useAppIcons'
import { Link } from 'react-router-dom';

export default function Footer() {
    const { logoBlack, facebook, instagram, youtube, linkedin } = useAppIcons();

    return (
        <footer className='relative px-4 md:px-56 bg-black py-8 md:py-24'>
            {/* Links & Desc */}
            <div className='w-full flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-5/12'>
                    <img src={logoBlack} alt="logo" className='w-[190px] md:w-[160px] mb-1' />
                    <p className='text-white w-full md:w-3/4'>
                        Create QR Codes Effortlessly with Our Free Generator -- Comprehensive, Customizable, and Insightful
                    </p>
                    {/* Dashed Box */}
                    <h3 className='block md:hidden py-6 px-7 w-full bordered-box text-primary font-extrabold my-4 text-center text-xl bg-transparent'>
                        Try Our QR Code Generator 7 days for free
                    </h3>
                    {/* Social */}
                    <div className='hidden md:flex flex-col justify-start items-start gap-2 mt-8'>
                        <p className='text-white text-xl font-extrabold'>
                            Let's get social!
                        </p>
                        <div className='flex justify-start items-center gap-4 w-full mt-2'>
                            <Link to={'/'}>
                                <img loading="lazy" src={instagram} alt="instagram" className='w-[35px]' />
                            </Link>
                            <Link to={'/'}>
                                <img loading="lazy" src={facebook} alt="facebook" className='w-[35px]' />
                            </Link>
                            <Link to={'/'}>
                                <img loading="lazy" src={youtube} alt="youtube" className='w-[35px]' />
                            </Link>
                            <Link to={'/'}>
                                <img loading="lazy" src={linkedin} alt="linkedin" className='w-[35px]' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-2 gap-5 md:flex md:flex-row md:flex-1 justify-between items-start md:gap-0 mt-12 md:mt-0'>
                    <div className='flex justify-start md:justify-end items-start'>
                        <div className='relative flex flex-col justify-start items-start gap-2'>
                            <p className='font-extrabold mb-2 text-white'><strong>Product</strong></p>
                            <Link to={'/'} className='font-light text-white/85'>Benifits</Link>
                            <Link to={'/'} className='font-light text-white/85'>Where To Use</Link>
                            <Link to={'/'} className='font-light text-white/85'>API</Link>
                            <Link to={'/'} className='font-light text-white/85'>Affiliate Program</Link>
                        </div>
                    </div>
                    <div className='flex justify-start md:justify-end items-start'>
                        <div className='relative flex flex-col justify-start items-start gap-2'>
                            <p className='font-extrabold mb-2 text-white'><strong>Information</strong></p>
                            <Link to={'/'} className='font-light text-white/85'>Payment & Content</Link>
                            <Link to={'/'} className='font-light text-white/85'>Pricing</Link>
                            <Link to={'/'} className='font-light text-white/85'>GDPR</Link>
                            <Link to={'/'} className='font-light text-white/85'>TrustPilo</Link>
                            <Link to={'/'} className='font-light text-white/85'>Reviews</Link>
                        </div>
                    </div>
                    <div className='flex justify-start md:justify-end items-start'>
                        <div className='relative flex flex-col justify-start items-start gap-2'>
                            <p className='font-extrabold mb-2 text-white'><strong>Legal</strong></p>
                            <Link to={'/'} className='font-light text-white/85'>About Us</Link>
                            <Link to={'/'} className='font-light text-white/85'>Account & Payment</Link>
                            <Link to={'/'} className='font-light text-white/85'>Privacy Policy</Link>
                            <Link to={'/'} className='font-light text-white/85'>Terms & Conditions</Link>
                        </div>
                    </div>
                    <div className='flex justify-start md:justify-end items-start'>
                        <div className='relative flex flex-col justify-start items-start gap-2'>
                            <p className='font-extrabold mb-2 text-white'><strong>Support</strong></p>
                            <Link to={'/'} className='font-light text-white/85'>FAQ</Link>
                            <Link to={'/'} className='font-light text-white/85'>Instructions</Link>
                            <Link to={'/'} className='font-light text-white/85'>Blog</Link>
                            <Link to={'/'} className='font-light text-white/85'>Help Center</Link>
                            <Link to={'/'} className='font-light text-white/85'>Contact Us</Link>
                        </div>
                    </div>
                </div>
                <div className='flex md:hidden flex-col justify-start items-start gap-2 mt-8'>
                    <p className='text-white text-xl font-extrabold'>
                        Let's get social!
                    </p>
                    <div className='flex justify-start items-center gap-4 w-full mt-2'>
                        <Link to={'/'}>
                            <img loading="lazy" src={instagram} alt="instagram" className='w-[35px]' />
                        </Link>
                        <Link to={'/'}>
                            <img loading="lazy" src={facebook} alt="facebook" className='w-[35px]' />
                        </Link>
                        <Link to={'/'}>
                            <img loading="lazy" src={youtube} alt="youtube" className='w-[35px]' />
                        </Link>
                        <Link to={'/'}>
                            <img loading="lazy" src={linkedin} alt="linkedin" className='w-[35px]' />
                        </Link>
                    </div>
                </div>
            </div>
            {/* Dashed Line */}
            <div className='w-full h-[20px] bordered mt-8 md:mt-10 mb-5'></div>
            {/* Copyright */}
            <div className='w-full flex flex-col md:flex-row justify-between items-center gap-5'>
                <div className='flex flex-col-reverse md:flex-col justify-start items-center md:items-start gap-2'>
                    <p className='text-sm text-white font-bold'>Made in Dubai ❤️ UAE 🇦🇪</p>
                    <p className='text-sm text-white font-bold text-center md:text-start'>2024 &copy; Brainy Box Technologies FZCO - "QR CODE" is a trademark of DENSO WAVE INCORPORATED</p>
                </div>
                <div className='flex justify-between items-center gap-5 w-full md:w-fit'>
                    {/* Here i am not sure if we have localizations nor not that's why i am not adding functionality to the button, but we can use i18n for localization */}
                    <button className='flex justify-center items-center gap-2'>
                        <img loading="lazy" src="https://media.istockphoto.com/id/185228721/photo/old-british-flag-union-jack.jpg?s=612x612&w=0&k=20&c=wAhRV_YTdJlZRq4JGHebovy3CY-6-jRH3k4Vumisllk=" className='w-[30px] h-[30px] rounded-full' alt="language" />
                        <span className='font-extralight text-white'><strong>English</strong></span>
                    </button>
                    <button className='flex justify-center items-center gap-2'>
                        <img loading="lazy" src="https://thumbs.dreamstime.com/b/blue-euro-symbol-square-icon-d-rendering-illustration-153834473.jpg" className='w-[30px] h-[30px] rounded-full' alt="language" />
                        <span className='font-extralight text-white'><strong>EUR (€)</strong></span>
                    </button>
                </div>
            </div>
        </footer>
    )
}
