import React from 'react'
import {CiTrophy} from 'react-icons/ci'

const LeaderBoradTopBoxe1 = ({user,points}) => {
  return (
    <div className='w-[280px] h-[280px]  bg-amber-50 border-3 border-amber-300 rounded-2xl drop-shadow-2xl drop-shadow-amber-200 p-5 hover:scale-110 duration-300'>
        <h1 className='flex justify-center text-4xl font-bold text-amber-300'>1</h1>
        <CiTrophy className='flex justify-center w-full mt-2 text-amber-300 text-8xl'/>
        <h1 className='flex justify-center mt-1.5 font-bold text-2xl'>{user}</h1>
        <h2 className='flex justify-center mt-1.5 text-gray-400'>{points} ecopoints</h2>
    </div>
  )
}

export default LeaderBoradTopBoxe1