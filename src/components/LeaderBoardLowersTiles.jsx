import React from 'react'
import { CgProfile } from "react-icons/cg";

const LeaderBoardLowersTiles = ({user,points,index}) => {
  return (
    <div className='w-[1000px] bg-amber-50 py-4 px-8 border-2 border-gray-200 rounded-2xl hover:scale-110 duration-150 '>
      <div className='flex columns-2 justify-between'>
        <div className='flex columns-3 gap-5'>
          <div>
            <h1 className='text-2xl text-gray-500 font-medium'>{index}</h1>
          </div>
          <CgProfile className='text-3xl mt-0.5 text-gray-600'/>
          <div>
            <h1 className='text-2xl font-medium'>{user}</h1>
          </div>
        </div>
        <div>
          <h1 className='text-2xl text-green-400 font-medium'>{points}</h1>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoardLowersTiles