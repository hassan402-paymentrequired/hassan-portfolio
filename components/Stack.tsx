import { ExperinceCard } from "./ExperinceCard"
import SkillTag from "./SkillTag"
import { CardDescription, CardTitle } from "./ui/card"

const Stack = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-10">
            <ExperinceCard/>
        <div className="grid grid-cols-1 grid-rows-2 gap-y-4 ">
            <div className="bg-neutral-950 border border-gray-800 rounded-md p-5 ">
            <CardTitle>Skills and Expertise</CardTitle>
                <SkillTag/>
            </div>
            <div className="bg-neutral-950 rounded-md p-5 border border-gray-800">
            <CardTitle>Essential Stacks</CardTitle>
            <CardDescription className="mt-3">A comprehensive collect of usefull tools to support my workflow</CardDescription>
            <div className="flex items-center space-x-2">
                
            </div>
            </div>
        </div>

        <div className="bg-gray-800 border border-gray-800 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-15 rounded-md p-5">
        <CardTitle>Connects</CardTitle>
        </div>
    </div>
  )
}

export default Stack