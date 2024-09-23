import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div  className="w-full h-20 bg-transparent fixed flex items-center justify-center p-3">
      <div className="flex px-2 h-full bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 rounded">
        <ul className='flex md:space-x-5 space-x-2 w-full items-center justify-center'>
          <li className='md:text-sm text-xs font-bold px-2 text-white'><Link href='#'>Home</Link></li>
          <li className='md:text-sm text-xs font-bold px-2 text-white'><Link href='#'>Contact</Link></li>
          <li className='md:text-sm text-xs font-bold px-2 text-white'><Link href='#'>Project</Link></li>
          <Button className='bg-lime-400 text-black shadow-2xl shadow-lime-400 hover:bg-lime-700 group'>Say Hello <span className='group-hover:animate-ping'>👋</span></Button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar