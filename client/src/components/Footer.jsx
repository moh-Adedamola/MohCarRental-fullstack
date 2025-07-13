import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Footer = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'
        >
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 pb-6 border-borderColor border-b'
            >
                {/* Logo and Description Section */}
                <div className='lg:max-w-sm'>
                    <motion.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        src={assets.logo} 
                        alt="logo" 
                        className='h-8 md:h-9' 
                    />

                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='max-w-80 mt-3 text-sm leading-relaxed'
                    >
                        Premium Car Rental Service with a wide selection of luxury and everyday vehicles for all your driving needs.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='flex items-center gap-3 mt-6'
                    >
                        <a href="#" className='hover:opacity-70 transition-opacity'>
                            <img src={assets.facebook_logo} className='w-5 h-5' alt="Facebook" />
                        </a>
                        <a href="#" className='hover:opacity-70 transition-opacity'>
                            <img src={assets.instagram_logo} className='w-5 h-5' alt="Instagram" />
                        </a>
                        <a href="#" className='hover:opacity-70 transition-opacity'>
                            <img src={assets.twitter_logo} className='w-5 h-5' alt="Twitter" />
                        </a>
                        <a href="#" className='hover:opacity-70 transition-opacity'>
                            <img src={assets.gmail_logo} className='w-5 h-5' alt="Gmail" />
                        </a>
                    </motion.div>
                </div>

                {/* Links Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 lg:flex-1 lg:max-w-2xl'
                >
                    {/* Quick Links */}
                    <div>
                        <h2 className='text-base font-medium text-gray-800 uppercase mb-3'>Quick Links</h2>
                        <ul className='flex flex-col gap-1.5'>
                            <li><a href="#" className='hover:text-gray-700 transition-colors'>Home</a></li>
                            <li><a href="#" className='hover:text-gray-700 transition-colors'>Browse Cars</a></li>
                            <li><a href="#" className='hover:text-gray-700 transition-colors'>List Your Car</a></li>
                            <li><a href="#" className='hover:text-gray-700 transition-colors'>About Us</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h2 className='text-base font-medium text-gray-800 uppercase mb-3'>Resources</h2>
                        <ul className='flex flex-col gap-1.5'>
                            <li><a href="#" className='hover:text-gray-700 transition-colors'>Help Center</a></li>
                            <li><a href="#" className='hover:text-gray-700 transition-colors'>Terms Of Service</a></li>
                            <li><a href="#" className='hover:text-gray-700 transition-colors'>Privacy Policy</a></li>
                            <li><a href="#" className='hover:text-gray-700 transition-colors'>Insurance</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className='sm:col-span-2 lg:col-span-1'>
                        <h2 className='text-base font-medium text-gray-800 uppercase mb-3'>Contact</h2>
                        <ul className='flex flex-col gap-1.5'>
                            <li className='flex items-start gap-2'>
                                <span className='text-gray-400 mt-0.5'>📍</span>
                                <span>001, Herbert Macaulay Way<br />Yaba, Lagos</span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <span className='text-gray-400'>📞</span>
                                <a href="tel:+234123456789" className='hover:text-gray-700 transition-colors'>+234 123 456789</a>
                            </li>
                            <li className='flex items-center gap-2'>
                                <span className='text-gray-400'>✉️</span>
                                <a href="mailto:info@example.com" className='hover:text-gray-700 transition-colors'>info@example.com</a>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
            
            {/* Bottom Section */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='flex flex-col md:flex-row gap-4 items-center justify-between py-5'
            >
                <div className='flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left'>
                    <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
                    <span className='text-gray-400 hidden sm:inline'>•</span>
                    <span className='text-gray-400'>Developed by moh-adegbite</span>
                </div>
                
                <ul className='flex items-center gap-4 text-center'>
                    <li><a href="#" className='hover:text-gray-700 transition-colors'>Privacy</a></li>
                    <li className='text-gray-400'>|</li>
                    <li><a href="#" className='hover:text-gray-700 transition-colors'>Terms</a></li>
                    <li className='text-gray-400'>|</li>
                    <li><a href="#" className='hover:text-gray-700 transition-colors'>Cookies</a></li>
                </ul>
            </motion.div>
        </motion.div>
    )
}

export default Footer