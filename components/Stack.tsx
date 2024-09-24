import Image from "next/image";
import { ExperinceCard } from "./ExperinceCard";
import SkillTag from "./SkillTag";
import { CardDescription, CardTitle } from "./ui/card";
import js from "../app/public/images/js.png";
import vs from "../app/public/images/vs.jpg";
import stm from "../app/public/images/stm.png";
import php from "../app/public/images/php.png";

const Stack = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-10">
      <ExperinceCard />
      <div className="grid grid-cols-1 grid-rows-2 gap-y-4 ">
        <div className="bg-neutral-950 border border-gray-800 rounded-md p-5 ">
          <CardTitle>Skills and Expertise</CardTitle>
          <SkillTag />
        </div>
        <div className="bg-neutral-950 rounded-md p-5 border border-gray-800">
          <CardTitle>Essential Stacks</CardTitle>
          <CardDescription className="mt-3">
            A comprehensive collect of usefull tools to support my workflow
          </CardDescription>
          <div className="flex items-center space-x-5 mt-3">
            <Image src={js} width={40} className="rounded-md"  alt="vs" />
            <Image src={vs} width={40} className="rounded-md"  alt="vs" />
            <Image src={php} width={40} className="rounded-md"  alt="vs" />
            <Image src={stm} width={40} className="rounded-md"  alt="stm" />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-800 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-15 rounded-md p-5">
        <CardTitle>Connects</CardTitle>
      </div>
    </div>
  );
};

export default Stack;
