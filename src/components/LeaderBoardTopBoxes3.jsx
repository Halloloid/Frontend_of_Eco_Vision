import React from 'react'
import { GiAchievement } from "react-icons/gi";

const LeaderBoardTopBoxes3 = ({user,points}) => {
  return (
        <div className='w-[280px] h-[280px]  bg-amber-50 border-3 border-amber-700 rounded-2xl p-5 hover:scale-110 duration-300 '>
                <h1 className='flex justify-center text-4xl font-bold text-amber-700'>3</h1>
                <GiAchievement className='flex justify-center w-full mt-2 text-amber-700 text-8xl'/>
                <h1 className='flex justify-center mt-1.5 font-bold text-2xl'>{user}</h1>
                <h2 className='flex justify-center mt-1.5 text-gray-400'>{points} ecopoints</h2>
        </div>
  )
}

export default LeaderBoardTopBoxes3