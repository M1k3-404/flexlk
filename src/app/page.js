"use client";

import Image from 'next/image';
import bgImageSmall from '../media/Rectangle-sm.png';
import def from '../media/default.jpg';
import cafe from '../media/cafe.jpg';
import apparel from '../media/apparel.jpg';
import resort from '../media/resort.jpg';
import digital from '../media/digital.jpg';
import travel from '../media/travel.jpg';
import entertainment from '../media/entertainment.jpg';
import hospitality from '../media/hospitality.jpg';
import crafts from '../media/crafts.jpg';
import web from '../media/web.jpg';
import mobile from '../media/mobile.jpg';
import ar from '../media/ar.jpg';
import { Accordion, AccordionItem, Button, Chip, Input, ScrollShadow, Textarea } from '@nextui-org/react';
import { BsMouse } from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowDropdown, IoIosArrowUp } from 'react-icons/io';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Testimonial from './ui/homepage/testimonial';
import Blog from './ui/homepage/blog';
import Link from 'next/link';
import { MdOutlineEmail } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
// import ModelViewer from './ui/modelViewer';

export default function Home() {
  {/* Client Logo Slider Configuration */}
  const [clientsSliderSettings] = useState({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
  })

  {/* Testimonials Slider Configuration */}
  const [testimonialsSliderSettings] = useState({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
  })

  {/* Email Input Settings */}
  const [email, setEmail] = useState("");

  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email])

  {/* Contact Slider Settings */}
  const [isContacts, setIsContacts] = useState(false);

  {/* Specialization Image Settings */}
  const [isSpecial, setIsSpecial] = useState("default");

  var specialImage = def;
  switch(isSpecial) {
    case "cafe":
      specialImage = cafe;
      break;
    case "apparel":
      specialImage = apparel;
      break;
    case "resort":
      specialImage = resort;
      break;
    case "digital":
      specialImage = digital;
      break;
    case "travel":
      specialImage = travel;
      break;
    case "entertainment":
      specialImage = entertainment;
      break;
    case "hospitality":
      specialImage = hospitality;
      break;
    case "crafts":
      specialImage = crafts;
      break;
    case "web":
      specialImage = web;
      break;
    case "mobile":
      specialImage = mobile;
      break;
    case "ar":
      specialImage = ar;
      break;
    default:
      specialImage = def;
  }

  return (
    <div className="w-full min-h-screen 2xl:px-80">
      {/* Header Section */}
      <div className="h-screen max-h-[1024px] radial-bg">
        {/* <ModelViewer /> */}
        {/* Header Title */}
        {/* <div className='pt-64 md:pt-60 lg:pt-60 xl:pt-80 min-[2048px]:pt-60 2xl:pt-80 w-[75%]'>
          <p className="relative text-4xl md:text-7xl lg:text-6xl xl:text-8xl z-40 text-left font-thin px-5 md:px-20 md:pt-10">We narrate brand stories worth luxury</p>
        </div> */}

        {/* xl:Header Specialties */}
        {/* <div className='mt-8 w-[50%] mx-20 hidden xl:block'>
          <Chip className='mr-1 mt-2' size='lg' >Social Media Marketing</Chip>
          <Chip className='mx-1 mt-2' size='lg' >Brand Marketing</Chip>
          <Chip className='mx-1 mt-2' size='lg' >Content Creation</Chip>
          <Chip className='mx-1 mt-2' size='lg' >Web Development</Chip>
          <Chip className='mx-1 mt-2' size='lg' >Mobile Solutions</Chip>
          <Chip className='mx-1 mt-2' size='lg' >Research & Devlopment</Chip>
          <Chip className='mx-1 mt-2 text-white' size='lg' variant='bordered'>Augmented Reality (AR)</Chip>
          <Chip className='mx-1 mt-2 text-white' size='lg' variant='bordered'>Blockchain</Chip>
          <Chip className='mx-1 mt-2 text-white' size='lg' variant='bordered'>+</Chip>
        </div> */}

        {/* md:Header Specialties */}
        {/* <div className='mt-8 w-[50%] mx-20 hidden md:block xl:hidden'>
          <Chip className='mr-1 mt-2' size='md' >Social Media Marketing</Chip>
          <Chip className='mx-1 mt-2' size='md' >Brand Marketing</Chip>
          <Chip className='mx-1 mt-2' size='md' >Content Creation</Chip>
          <Chip className='mx-1 mt-2' size='md' >Web Development</Chip>
          <Chip className='mx-1 mt-2' size='md' >Mobile Solutions</Chip>
          <Chip className='mx-1 mt-2' size='md' >Research & Devlopment</Chip>
          <Chip className='mx-1 mt-2 text-white' size='md' variant='bordered'>Augmented Reality (AR)</Chip>
          <Chip className='mx-1 mt-2 text-white' size='md' variant='bordered'>Blockchain</Chip>
          <Chip className='mx-1 mt-2 text-white' size='md' variant='bordered'>+</Chip>
        </div> */}

        {/* sm:Header Specialties */}
        {/* <div className='mt-1 w-[75%] mx-5 md:hidden'>
          <Chip className='mx-1 mt-2 text-xs' size='sm' >Social Media Marketing</Chip>
          <Chip className='mx-1 mt-2' size='sm' >Brand Marketing</Chip>
          <Chip className='mx-1 mt-2' size='sm' >Content Creation</Chip>
          <Chip className='mx-1 mt-2' size='sm' >Web Development</Chip>
          <Chip className='mx-1 mt-2' size='sm' >Mobile Solutions</Chip>
          <Chip className='mx-1 mt-2' size='sm' >Research & Devlopment</Chip>
          <Chip className='mx-1 mt-2 text-white' size='sm' variant='bordered'>Augmented Reality (AR)</Chip>
          <Chip className='mx-1 mt-2 text-white' size='sm' variant='bordered'>Blockchain</Chip>
          <Chip className='mx-1 mt-2 text-white' size='sm' variant='bordered'>+</Chip>
        </div> */}

        {/* Header Tail */}
        {/* <div className='relative pt-56 lg:pt-44 xl:pt-64 px-5 md:px-10 z-40 flex'>
          <BsMouse size={36} color='#d4d4d8' className='mx-auto hidden xl:block' />
          <BsMouse size={28} color='#d4d4d8' className='mx-auto hidden lg:block xl:hidden' />
          <IoIosArrowDropdown size={36} color='#d4d4d8' className='mx-auto hidden md:block lg:hidden' />
          <p className='absolute font-thin text-sm md:text-normal xl:text-xl tracking-widest self-end right-5 md:right-10'>Stories. Worth. Luxe</p>
        </div> */}
      </div>

      {/* Stats Section */}
      <div className='w-full grid grid-cols-2 sm:flex py-10 justify-evenly'>
        {/* Clients */}
        <div className='col-span-1 sm:w-[25%] mx-2 sm:mx-0 p-8 lg:p-16 pb-0 border border-white rounded-lg hover:bg-white/90 hover:text-black hover:border-0'>
          <p className='text-5xl lg:text-6xl xl:text-8xl font-bold'>20+</p> 
          <p className='text-md sm:text-xl text-center xl:text-right pt-5 sm:pt-10 pb-5'>Clients</p>
        </div>

        {/* Projects */}
        <div className='col-span-1 sm:w-[25%] mx-2 sm:mx-0 p-8 lg:p-16 pb-0 border border-white rounded-lg hover:bg-white/90 hover:text-black hover:border-0'>
          <p className='text-5xl lg:text-6xl xl:text-8xl font-bold'>187+</p> 
          <p className='text-md sm:text-xl text-center xl:text-right pt-5 sm:pt-10 pb-5'>Projects</p>
        </div>

        {/* Stats Description */}
        <div className='col-span-2 sm:w-[40%] mx-2 sm:mx-0 mt-4 sm:mt-0 pt-4 lg:pt-0 xl:pt-8 flex flex-col items-end'>
          <p className='text-3xl lg:text-5xl 2xl:text-7xl text-right font-bold'>Crafting immersive brand experience.</p>
          <p className='mt-6 text-sm lg:text-md 2xl:text-xl text-right'>We craft unforgettable brand experiences that go beyond promotion, building deeper connections for your customers.</p>
        </div>
      </div>

      {/* Clients Logo Section */}
      <div className='w-full 2xl:bg-black bg-[#0c0c0c] py-8'>
        <Slider {...clientsSliderSettings}>
          <BsMouse size={36} color='#ff0000' className='grayscale hover:grayscale-0' />
          <BsMouse size={36} color='#00ff00' className='grayscale hover:grayscale-0' />
          <BsMouse size={36} color='#0000ff' className='grayscale hover:grayscale-0' />
          <BsMouse size={36} color='#f902ac' className='grayscale hover:grayscale-0' />
          <BsMouse size={36} color='#2983ab' className='grayscale hover:grayscale-0' />
          <BsMouse size={36} color='#d3c20d' className='grayscale hover:grayscale-0' />
        </Slider>
      </div>

      {/* Services Section */}
      <div className='services-bg w-full px-6 py-10 sm:py-20 grid grid-cols-3 gap-2 sm:gap-6 bg-fixed'>
        <div className='col-span-2 p-6 rounded-xl bg-[#0c0c0c]/95 backdrop-blur'>
          <p className='text-base sm:text-3xl font-light'>Social Media Marketing</p>
          <p className='mt-3 hidden sm:block font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='col-span-1 p-6 rounded-xl bg-[#0c0c0c]/95 backdrop-blur sm:hidden' />
        <div className='col-span-1 px-4 sm:px-6 p-6 rounded-xl bg-[#0c0c0c]/95 backdrop-blur'>
          <p className='text-md sm:text-3xl font-light'>Content Creation</p>
          <p className='mt-3 hidden sm:block font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='col-span-2 sm:col-span-1 p-6 rounded-xl bg-[#0c0c0c]/95 backdrop-blur'>
          <p className='text-md sm:text-3xl font-light'>Brand Marketing</p>
          <p className='mt-3 hidden sm:block font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='col-span-3 sm:col-span-2 p-6 rounded-xl flex justify-center bg-[#0c0c0c]/95 backdrop-blur'>
          <p className='md:text-7xl lg:text-8xl xl:text-9xl font-semibold uppercase my-auto'>Services</p>
        </div>
        <div className='col-span-2 p-6 rounded-xl bg-[#0c0c0c]/95 backdrop-blur'>
          <p className='text-md sm:text-3xl font-light'>Software Solutions</p>
          <p className='mt-3 hidden sm:block font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='col-span-1 p-6 rounded-xl bg-[#0c0c0c]/95 backdrop-blur sm:hidden' />
        <div className='col-span-1 p-6 rounded-xl bg-[#0c0c0c]/95 backdrop-blur sm:hidden' />
        <div className='col-span-2 sm:col-span-1 p-6 rounded-xl bg-[#0c0c0c]/95 backdrop-blur'>
          <p className='text-md sm:text-3xl font-light'>Consultancy</p>
          <p className='mt-3 hidden sm:block font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      {/* Specialization Section */}
      <div className='w-full my-24 flex'>
        <div className='w-full md:w-[40%] min-[2048px]:w-[55%] 2xl:w-[50%] px-10'>
          <p className='text-4xl xl:text-6xl' onMouseOver={() => setIsSpecial("default")}>Our Specialization</p>
          <p className='mt-4 xl:text-lg'>If you fall under any of these, you're our ideal client, but worry not we can do a lot more than that.</p>
          <div className='mt-8'>
            <Accordion variant='light' defaultExpandedKeys={["1"]}>
              <AccordionItem key={1} aria-label='Social Media Marketing' title='Social Media Marketing' >
                <div className='w-full px-10 grid grid-cols-1 gap-1 divide-y'>
                  <p className='text-lg xl:text-xl pt-4 font-extralight' onMouseOver={() => setIsSpecial("cafe")}>Cafes, Pubs & Restaurants</p>
                  <p className='text-lg xl:text-xl pt-4 font-extralight' onMouseOver={() => setIsSpecial("apparel")}>Clothing & Apparel</p>
                  <p className='text-lg xl:text-xl pt-4 font-extralight' onMouseOver={() => setIsSpecial("resort")}>Resorts, Hotels & Villas</p>
                  <p className='text-lg xl:text-xl pt-4 font-extralight' onMouseOver={() => setIsSpecial("digital")}>Digital Industries</p>
                  <p className='text-lg xl:text-xl pt-4 font-extralight' onMouseOver={() => setIsSpecial("travel")}>Tourism</p>
                  <p className='text-lg xl:text-xl pt-4 font-extralight' onMouseOver={() => setIsSpecial("entertainment")}>Entertainment</p>
                  <p className='text-lg xl:text-xl pt-4 font-extralight' onMouseOver={() => setIsSpecial("hospitality")}>Hospitality</p>
                  <p className='text-lg xl:text-xl pt-4 font-extralight' onMouseOver={() => setIsSpecial("crafts")}>Handmande Crafts & Artisan</p>
                </div>
              </AccordionItem>
              <AccordionItem key={2} aria-label='Software Solutions' title='Software Solutions'>
                <div className='w-full px-10 grid grid-cols-1 gap-1 divide-y'>
                  <p className='text-lg xl:text-xl pt-4 font-extralight' onMouseOver={() => setIsSpecial("web")}>Website Design</p>
                  <p className='text-lg xl:text-xl pt-4 font-extralight' onMouseOver={() => setIsSpecial("mobile")}>Mobile Solutions</p>
                  <p className='text-lg xl:text-xl pt-4 font-extralight' onMouseOver={() => setIsSpecial("ar")}>Augmented Reality(AR)</p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className='hidden md:w-[60%] min-[2048px]:w-[45%] 2xl:w-[50%] mt-10 px-10 md:grid grid-cols-6 gap-4'>
          <div className='relative col-span-6 min-[2048px]:col-span-5 min-[2048px]:col-start-1 2xl:col-span-5 2xl:col-start-2 aspect-square p-6 rounded-lg bg-[#0c0c0c] overflow-hidden'>
            <Image 
              src={specialImage}
              alt='Flex' 
              fill
              className='absolute'
            />
          </div>
        </div>  
      </div>

      {/* Testimonials & Blog Section */}
      <div className='w-full my-20 grid grid-cols-5 p-4 gap-6'>

        {/* Testimonials */}
        <div className='col-span-5 xl:col-span-3 p-8 md:p-16 bg-[#0c0c0c] rounded-lg'>
          <div className='h-full'>
            <p className='text-4xl xl:text-6xl mb-16'>Testimonials</p>
              <Slider {...testimonialsSliderSettings}>
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />            
              </Slider>
          </div>
        </div>

        {/* Blog */}
        <div className='col-span-5 xl:col-span-2 xl:row-span-2 p-8 md:p-16 rounded-lg'>
          <p className='mb-10 text-4xl xl:text-6xl'>Blog</p>
          <ScrollShadow hideScrollBar size={20} visibility='none' className='aspect-[1/2] md:aspect-video grid grid-cols-2 gap-4 xl:gap-0 xl:aspect-square'>
            <Blog />
            <Blog />
            <Blog />
          </ScrollShadow>
        </div>

        <div className='hidden min-[2048px]:block col-span-3 px-8 mt-5'>
          <p className='text-4xl 2xl:text-7xl font-light'>"Believe in what our clients say about us"</p>
        </div>
      </div>

      {/* lg:CTA Section */}
      <div className='hidden lg:block w-full px-10 pb-20'>
        <p className='text-4xl'>Ready to start your journey?</p>
        <div className='w-full mt-10 flex relative'>

          {/* Contact Details */}
          <div className='w-[50%] p-10 px-20 border-r-1 border-white flex flex-col items-center justify-center'>
            <div>
              <p className='text-4xl'>Get in touch</p>
              <div className='mt-6'>
                <div className='flex'>
                  <MdOutlineEmail size={18} className='my-auto mr-3' />
                  <Link href={"#"}>
                    <p className=''>muthula.alwis@gmail.com</p>
                  </Link>
                </div>
                <div className='mt-3 flex'>
                  <IoCallOutline size={18} className='my-auto mr-3' />
                  <Link href={"#"}>
                    <p className=''>+94 717428128</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='bg-white aspect-square p-10 rounded-full absolute top-[50%] -translate-y-1/2 -translate-x-1/2 left-[50%]'>
            <div className='w-full h-full relative'>
              <p className='text-black absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-lg'>or</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className='w-[50%] p-10 px-20 border-l-1 border-white'>
            <p className='text-2xl'>Let's Discuss</p>
            <p className='mt-1 font-extralight'>Send us a message. We'll shortly be in touch with you</p>
            <div className='mt-6 rounded-lg p-10 pt-5 bg-[#0c0c0c]'>
              <Input 
                type='text' 
                label='Name' 
                variant='underlined'
                className='group[data-has-value=true]' 
                style={{color: 'white'}} 
              />
              <Input 
                type='email' 
                label='Email' 
                variant='underlined' 
                isInvalid={isInvalid} 
                errorMessage={isInvalid && "Please enter a correct email."} 
                value={email}
                onValueChange={(e) => setEmail(e.target.value)} 
                className='mt-3 group[data-has-value=true]' 
                style={{color: 'white'}} 
              />
              <Input 
                type='number' 
                label='Phone Number' 
                variant='underlined' 
                className='mt-3 group[data-has-value=true]' 
                style={{color: 'white'}} 
              />
              <Textarea 
                type='text' 
                label='Message' 
                variant='underlined'
                defaultValue="Hi, I'd like to get your services." 
                className='mt-3 group[data-has-value=true]' 
                style={{color: 'white'}} 
              />
              <Button className='mt-8 px-10' variant='shadow'>Send Message</Button>
            </div>
          </div>
        </div>
      </div>

      {/* sm:CTA Section */}
      <motion.div className='lg:hidden w-full px-5 pr-0 md:px-10 pb-20'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.3 }}
        }}
      >
        <p className='text-4xl'>Ready to start your journey?</p>
        <div className='w-[90%] mt-10 relative'>
          {
            isContacts ?

            // Contact Form
            <motion.div className='p-10 pl-0 pr-5 md:p-10 md:px-20 border-r-1 border-white'
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 }}}}
              initial="hidden"
              animate="visible"
            >
              <p className='text-2xl'>Let's Discuss</p>
              <p className='mt-1 font-extralight'>Send us a message. We'll shortly be in touch with you</p>
              <div className='mt-6 rounded-lg p-10 pt-5 bg-[#0c0c0c]'>
                <Input 
                  type='text' 
                  label='Name' 
                  variant='underlined'
                  className='group[data-has-value=true]' 
                  style={{color: 'white'}} 
                />
                <Input 
                  type='email' 
                  label='Email' 
                  variant='underlined' 
                  isInvalid={isInvalid} 
                  errorMessage={isInvalid && "Please enter a correct email."} 
                  value={email}
                  onValueChange={(e) => setEmail(e.target.value)} 
                  className='mt-3 group[data-has-value=true]' 
                  style={{color: 'white'}} 
                />
                <Input 
                  type='number' 
                  label='Phone Number' 
                  variant='underlined' 
                  className='mt-3 group[data-has-value=true]' 
                  style={{color: 'white'}} 
                />
                <Textarea 
                  type='text' 
                  label='Message' 
                  variant='underlined'
                  defaultValue="Hi, I'd like to get your services." 
                  className='mt-3 group[data-has-value=true]' 
                  style={{color: 'white'}} 
                />
                <Button className='mt-8 px-10' variant='shadow'>Send Message</Button>
              </div>
            </motion.div>

            :

            // Contact Details
            <motion.div className='p-10 pl-0 pr-5 md:p-10 md:px-20 border-r-1 border-white flex flex-col items-center justify-center'
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 }},
              }}
              initial="hidden"
              animate="visible"
            >
              <div>
                <p className='text-2xl md:text-4xl'>Get in touch</p>
                <div className='mt-6'>
                  <div className='flex'>
                    <MdOutlineEmail size={18} className='my-auto mr-3' />
                    <Link href={"#"}>
                      <p className='text-xs md:text-md'>muthula.alwis@gmail.com</p>
                    </Link>
                  </div>
                  <div className='mt-3 flex'>
                    <IoCallOutline size={18} className='my-auto mr-3' />
                    <Link href={"#"}>
                      <p className='text-xs md:text-md'>+94 717428128</p>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          }

          {/* Divider */}
          <Button isIconOnly variant='shadow' className='bg-white p-5 md:p-8 rounded-full absolute top-[50%] -translate-y-1/2 -translate-x-1/2 left-[100%] overflow-hidden' onClick={() => setIsContacts(!isContacts)}>
            <div className='w-full h-full relative'>
              {
                isContacts ? 
                <IoIosArrowUp size={20} color='black' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' /> :
                <IoIosArrowDown size={20} color='black' className='absolute top-1/2 left-1/2 -translate-y-1/3 -translate-x-1/2' />
              }
            </div>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}