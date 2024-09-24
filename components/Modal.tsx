import React from "react";

const Modal = () => {
  return (
    <section className="absolute p-5 top-3 left-0 min-h-screen flex w-full   ">
      <div className="container relative mx-auto flex w-full flex-1   max-w-[1550px] rounded-[24px] shadow-[0_0_40px_0_rgba(0,0,0,0.5)]  bg-[#020407] z-10 p-2 border">
        
      <h2 className="text-[50px] uppercase text-white md:text-[9vw] lg:text-[8vw]  lg:text-left xl:text-[9vw] font-bold">
          The Web Artisan
        </h2>
        <div className="absolute top-4 left-2 flex space-x-2 px-4">
            <button className="w-3 h-3 rounded-full bg-red-600 cursor-pointer"></button>
            <button className="w-3 h-3 rounded-full bg-yellow-600"></button>
            <button className="w-3 h-3 rounded-full bg-green-600"></button>
        </div>


      </div>
    </section>
  );
};

export default Modal;
