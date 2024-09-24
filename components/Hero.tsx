import React from 'react'
import { Particless } from './Particles'
import me from "../app/public/images/floating-robot_78370-3669-removebg-preview.png";
import Image from 'next/image';
import Modal from './Modal';


const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 '>
        <div className="flex p-10 flex-col mt-10">
            <p className='text-xs  mt-5 text-gray-500 font-semibold'>Hey there 👋!</p>
            <h4 className='md:text-5xl text-xl  font-[500] md:font-semibold text-white tracking-wider leading-[1.6]'>
                I&apos;m<span className='text-lime-400 tracking-wide'> Hassan </span>and 
                Welcome to my Digital playground, Where Ideas Come To Life.
            </h4>
            
<Modal />
            <p className='flex items-center space-x-2 text-gray-500 text-xs mt-5'>
                   <span className='w-2 h-2 rounded-full bg-lime-400 animate-ping'></span>
                <span>Avaliable for freelancing</span>
            </p>
        </div>

        <div className="">
          <Particless />
          <Image src={me} width={600} alt='me'/>
        </div>
    </div>
  )
}

export default Hero