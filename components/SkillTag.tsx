import React from 'react'
import { Badge } from './ui/badge'

const SkillTag = () => {
  return (
    <div className='w-full items-center space-x-4 flex h-full justify-center'>
    
    <Badge className='py-2 px-6 text-sm tracking-wider'>Java</Badge>
    <Badge  className='py-2 px-6 text-sm tracking-wider'>Node.js</Badge>
    <Badge  className='py-2 px-6 text-sm tracking-wider'>PHP</Badge>
    </div>
  )
}

export default SkillTag