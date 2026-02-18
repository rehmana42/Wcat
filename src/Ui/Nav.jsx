"use client"
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const pathName=usePathname()

  useEffect(()=>{
    console.log(pathName)
  },[])
const linkStyle = (path) =>
  `relative font-semibold transition-colors duration-200
   after:content-[''] after:absolute after:left-0 after:-bottom-1
   after:h-[2px] after:transition-all after:duration-300
   ${pathName === path 
      ? 'text-blue-600 after:w-full after:bg-blue-600' 
      : 'text-gray-600 after:w-0 after:bg-blue-600 hover:after:w-full'
   }`

  return (
    <div className='w-full overflow-hidden'>
      {/* Navbar */}
      <div className='flex items-center justify-between px-6 py-4'>
        <h2 className='text-xl font-extrabold'>Wcat</h2>

        {/* Desktop Links */}
        <div className='hidden sm:flex flex-row items-center gap-8 '>
        <Link href="/" className={linkStyle('/')}>Home</Link>
<Link href="/why-us" className={linkStyle('/why-us')}>Why us</Link>
<Link href="/services" className={linkStyle('/services')}>Services</Link>
<Link href="/solution" className={linkStyle('/solution')}>Solutions</Link>
<Link href="/careers" className={linkStyle('/careers')}>Careers</Link>
<Link href="/contact" className={linkStyle('/contact')}>Contact</Link>

        </div>

        {/* Right buttons */}
        <div  className='flex items-center gap-3'>
          <Button className='w-24 font-bold text-xl h-10 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-600 text-white'>
            Login
          </Button>

          {/* Mobile menu toggle */}
          <MenuIcon
            className='sm:hidden cursor-pointer transition-all hover:scale-125 duration-150'
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div 
        className="sm:hidden w-full h-screen bg-white/20 backdrop-blur-md border border-white/30 rounded-b-xl flex flex-col items-center justify-center gap-6 z-50 fixed top-0 left-0 transition-all   duration-150">
          <Link href="/" className={linkStyle('/')} onClick={() => setOpen(false)}>Home</Link>
          <Link href="/why-us" className={linkStyle('/why-us')} onClick={() => setOpen(false)}>Why us</Link>
          <Link href="/services" className={linkStyle('/services')} onClick={() => setOpen(false)}>Services</Link>
          <Link href="/solution" className={linkStyle('/solution')} onClick={() => setOpen(false)}>Solutions</Link>
          <Link href="/careers" className={'/careers'} onClick={() => setOpen(false)}>Careers</Link>
          <Link href="/contact" className={'/contact'} onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  )
}

export default Nav
