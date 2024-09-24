import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TiUserOutline } from "react-icons/ti";
import { FaThemeco } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
  return (
    <div className="top-[40%] rotate-90 bg-transparent absolute -right-5 flex items-center justify-center p-3">
      <div className="flex p-2 h-full  bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 rounded-[2rem]">
        <ul className="flex md:space-x-3 space-x-2 w-full items-center justify-center">
          <li className="md:text-sm text-xs font-bold px-2 text-white">
            <Link href="#">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {" "}
                    <TiUserOutline size={20} />
                  </TooltipTrigger>
                  <TooltipContent className="top-2 -left-40 -rotate-90 absolute">
                    <p>home</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </li>
          <li className="md:text-sm text-xs font-bold px-2 text-white">
            <Link href="#">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {" "}
                         <FaThemeco size={20}/> 
                  </TooltipTrigger>
                  <TooltipContent className="top-2 -left-40 -rotate-90 absolute">
                    <p>service</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </li>
          <li className="md:text-sm text-xs font-bold px-2 text-white">
            <Link href="#">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {" "}
              <GrProjects size={20}/>
                  </TooltipTrigger>
                  <TooltipContent className="top-2 -left-40 -rotate-90 absolute">
                    <p>Project</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </li>
          <Button className="bg-lime-400 w-10 h-10 rounded-full text-black shadow-2xl shadow-lime-400 hover:bg-lime-700 group">
            <span className="group-hover:animate-ping">👋</span>
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
