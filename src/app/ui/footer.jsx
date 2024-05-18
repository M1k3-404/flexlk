import Link from 'next/link';
import { PiCopyright } from 'react-icons/pi';
import { MdOutlineEmail } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
    return(
        <div className="w-full bg-[#1d1d1d] grid grid-cols-3 border-t-1 rounded-t-lg">
            {/* Company Introduction */}
            <div className="col-span-3 lg:col-span-1 lg:border-r-1 border-[#bdbdbd] mt-10">
                <div className="lg:w-[75%] text-center md:text-left">
                    <p className="px-6 pb-4 font-semibold text-2xl md:text-4xl text-white">Flex</p>
                    <p className="px-6 pb-10 text-xs lg:pb-20 md:text-sm">At Flex, we combine cutting-edge social media and brand marketing with the power of the latest technology to craft immersive experiences.  Our friendly team of experts stays ahead of the curve, utilizing the latest tech to bring your brand vision to life.</p>
                    <div className='lg:flex items-center mx-6 mb-4 hidden'>
                        <PiCopyright color='#bdbdbd' className='mx-1' />
                        <p className="text-[#bdbdbd]">flex 2024</p>
                    </div>
                </div>
            </div>

            {/* Sitemap and Contacts */}
            <div className="col-span-3 lg:col-span-2 mt-10 grid grid-cols-subgrid">
                {/* Sitemap */}
                <div className='col-span-3 md:col-span-1 my-auto'>
                    <p className="text-center text-md pb-6 text-[#bdbdbd]">explore</p>
                    <div className='px-5 pb-10 flex flex-row justify-between md:px-10 md:grid md:justify-items-between md:text-center md:justify-center md:gap-2'>
                            <Link className='text-xs md:text-sm' href="#">About us</Link>
                            <Link className='text-xs md:text-sm' href="#">Services</Link>
                            <Link className='text-xs md:text-sm' href="#">Projects</Link>
                            <Link className='text-xs md:text-sm' href="#">Blog</Link>
                            <Link className='text-xs md:text-sm' href="#">Careers</Link>
                            <Link className='text-xs md:text-sm' href="#">Contact Us</Link>
                    </div>
                </div>

                {/* Contacts & Socials */}
                <div className='col-span-3 md:col-span-2 lg:col-span-1 my-auto'>
                    {/* Contacts */}
                    <p className="text-center text-md pb-6 text-[#bdbdbd]">contacts</p>
                    <div className='w-full grid justify-items-center gap-3 px-10 pb-10'>
                        <Link className='text-xs md:text-sm flex align-items-center' href="#">
                            <MdOutlineEmail size={18} className='mx-3' />
                            muthula.alwis@gmail.com
                        </Link>
                        <Link className='text-xs md:text-sm flex align-items-center' href="#">
                            <IoCallOutline size={18} className='mx-3' />
                            +94 717428128
                        </Link>
                    </div>

                    {/* Socials */}
                    <p className="text-center text-md pb-6 text-[#bdbdbd]">socials</p>
                    <div className='flex justify-center pb-10'>
                        <Link className='text-lg mx-2' href="#">
                            <FaInstagram />
                        </Link>
                        <Link className='text-lg mx-2' href="#">
                            <FaLinkedinIn />
                        </Link>
                        <Link className='text-lg mx-2' href="#">
                            <FaFacebookF />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile: Copyrights */}
            <div className='col-span-3 mx-auto lg:hidden'>
                <div className='flex items-center mx-6 mb-4'>
                    <PiCopyright color='#bdbdbd' className='mx-1' />
                    <p className="text-[#bdbdbd] text-xs">flex 2024</p>
                </div>
            </div>
        </div>
    )
}