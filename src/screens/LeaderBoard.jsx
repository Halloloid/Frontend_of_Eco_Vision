import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LeaderBoradTopBoxe1 from '../components/LeaderBoradTopBoxes'
import LeaderBoardTopBoxes2 from '../components/LeaderBoardTopBoxes2'
import LeaderBoardTopBoxes3 from '../components/LeaderBoardTopBoxes3'
import LeaderBoardLowersTiles from '../components/LeaderBoardLowersTiles'

const LeaderBoard = () => {
  const [topUsers,setTopUsers] = useState([])
  const [users,setUsers] = useState([])
  const [points,setPoints] = useState([])

  useEffect(() => {
    const fetchTopUsers = async() =>{
      try {
        const res = await axios.get("http://localhost:3000/api/leaderBoard")
        setTopUsers(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTopUsers()
    
  },[])
  useEffect(()=>{
    if(topUsers.length > 0){
      setUsers(topUsers.map(user => user.username))
      setPoints(topUsers.map(pt => pt.ecopoints))
    }
  },[topUsers])
  return (
    <div>
      <div className='mt-20'>
      <h1 className='flex justify-center text-5xl font-bold'>LeaderBoard</h1>
      <p className='flex justify-center mt-3 text-gray-500'>See who's making the biggest impact this week!</p>
      <div className='gird grid-cols-3 gap-6 flex justify-center mt-7'>
      <LeaderBoardTopBoxes2 user={users[1]} points={points[1]}/>
      <LeaderBoradTopBoxe1 user={users[0]} points={points[0]}/>
      <LeaderBoardTopBoxes3 user={users[2]} points={points[2]}/>
      </div>
      <div className='grid grid-rows-7 gap-1.5 justify-center mt-12'>
        {(topUsers.length > 3) && <LeaderBoardLowersTiles user={users[3]} points={points[3]} index={4}/>}
        {(topUsers.length > 4) && <LeaderBoardLowersTiles user={users[4]} points={points[4]} index={5}/>}
        {(topUsers.length > 5) && <LeaderBoardLowersTiles user={users[5]} points={points[5]} index={6}/>}
        {(topUsers.length > 6) && <LeaderBoardLowersTiles user={users[6]} points={points[6]} index={7}/>}
        {(topUsers.length > 7) && <LeaderBoardLowersTiles user={users[7]} points={points[7]} index={8}/>}
        {(topUsers.length > 8) && <LeaderBoardLowersTiles user={users[8]} points={points[8]} index={9}/>}
        {(topUsers.length > 9) && <LeaderBoardLowersTiles user={users[9]} points={points[9]} index={10}/>}
      </div>
      </div>
    </div>
  )
}

export default LeaderBoard