
import Link from 'next/link';

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';

const Footer = () => {
  return (
    
      <footer className='bg-black text-white px-6 py-10 md:px-16 max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0'>
          <div className='space-y-6'>
            <Link href="/">
              <h1 className='text-2xl font-bold font-serif'>RenoTzy</h1>
            </Link>
            <nav className='flex flex-col md:flex-row md:space-x-8 space-y-3 md:space-y-0 text-sm mt-5'>
              <Link href="/" className='hover:text-[#a3704f] transition'>Home</Link>
              <Link href="#about" className='hover:text-[#a3704f] transition'>About</Link>
              <Link href="#news" className='hover:text-[#a3704f] transition'>News</Link>
              <Link href="#pricing" className='hover:text-[#a3704f] transition'>Pricing</Link>
              <Link href="#faq" className='hover:text-[#a3704f] transition'>Faq</Link>
            </nav>
          </div>

          <div className='flex items-center space-x-6'>
            <a href="#" className='hover:text-[#a3704f] transition' >
              <Facebook size={20} />
            </a>
            <a href="#" className='hover:text-[#a3704f] transition' >
              <Instagram size={20} />
            </a>
            <a href="#" className='hover:text-[#a3704f] transition' >
              <Linkedin size={20} />
            </a>
            <a href="#" className='hover:text-[#a3704f] transition' >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className='mt-8 border-t border-white/10 pt-8'>
          <div className='text-center text-sm text-white/60'>
          &copy; {new Date().getFullYear()} RenoTzy. All rights reserved.
          </div>
        </div>
      </footer>
    
  )
}

export default Footer;
