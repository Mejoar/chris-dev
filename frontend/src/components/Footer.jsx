import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/chris-dev-logo.svg'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-200 py-10'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
        {/*  info */}
        <div className='mb-6 md:mb-0'>
            <Link to='/' className='flex gap-3 items-center'>
              <img src={Logo} alt="Chris Dev Logo" className='w-12 h-12'/>
              <h1 className=' text-3xl font-bold'>Chris Dev</h1>
            </Link>
            <p className='mt-2'>Exploring the latest in web development, programming, and technology trends.</p>
            <p className='mt-2 text-sm'>Building the future, one line of code at a time</p>
            <p className='text-sm'>Email: mejoarwachira@gmail.com</p>
            <p className='text-sm'>Follow my tech journey</p>
        </div>
        {/* customer service link */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Quick Links</h3>
            <ul className='mt-2 text-sm space-y-2'>
                <li>Home</li>
                <li>Blogs</li>
                <li>About Us</li>
                {/* <li>Contact Us</li> */}
                <li>FAQs</li>
            </ul>
        </div>
        {/* social media links */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Follow Us</h3>
            <div className='flex space-x-4 mt-2'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitterSquare/>
                <FaPinterest/>
            </div>
        </div>
        {/* newsletter subscription */}
        <div>
            <h3 className='text-xl font-semibold'>Stay Connected</h3>
            <p className='mt-2 text-sm'>Subscribe for the latest tech tutorials, coding tips, and development insights</p>
            <form action="" className='mt-4 flex'>
                <input 
                type="email" 
                placeholder='Your email address'
                className='w-full p-2 rounded-l-md  text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500'
                />
                <button type='submit' className='bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700'>Subscribe</button>
            </form>
        </div>
      </div>
      {/* bottom section */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
        <p>&copy; {new Date().getFullYear()} <span className='text-blue-500'>Chris Dev</span>. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
