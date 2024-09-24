'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Modal = () => {
const [modalOpen, setModalOpen] = useState(false)

useEffect(() => {
    // setModalOpen(true)
}, [])

    
  return (
    <motion.div
       className={`absolute p-5 top-3 left-0 min-h-screen flex w-full ${modalOpen && 'hidden'}`}>
      <div className="container relative overflow-hidden mx-auto flex w-full    max-w-[1550px] rounded-[24px] shadow-[0_0_40px_0_rgba(0,0,0,0.5)]  bg-[#020407] z-10 p-2 ">
       
        <video autoPlay  className="w-full absolute inset-0" height="240" controls preload="none">
      <source src="https://laracasts.nyc3.cdn.digitaloceanspaces.com/assets/hello-world.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
    </video>
    
      <h2 className="text-[50px] uppercase text-white md:text-[9vw] lg:text-[8vw]  lg:text-left xl:text-[9vw] font-bold bg-black">
          The Web Artisan
        </h2>
        <div className="absolute top-4 left-2 flex space-x-2 px-4">
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setModalOpen(prev => !prev)}
             className="w-3 h-3 rounded-full bg-red-600 cursor-pointer"
             ></motion.button>
            <button className="w-3 h-3 rounded-full bg-yellow-600"></button>
            <button className="w-3 h-3 rounded-full bg-green-600"></button>
        </div>

        <div className="flex flex-col space-x-2 border leading-7 p-10 ml-32 font-bold">
                <p className="text-lime-300 text-lg">"menu" => [</p>
                <p>
                <span className="font-normal">// want to know me</span> <br/>
                "browse" => "About" ,
                </p>
                <span>
                <small className="font-normal">// want tp know me</small> <br/>
                "lessons" &rArr; "3091" ,
                </span>
            <p className="text-lime-300 text-lg"> ]</p>
        </div>

      </div>
    </motion.div>
  );
};

export default Modal;
