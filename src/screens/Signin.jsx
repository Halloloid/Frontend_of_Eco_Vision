import React, { useState } from 'react'
import { signup } from '../functions/api'
import Footer from '../components/Footer';
import {useNavigate} from 'react-router'

const Signin = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const handelSignup = async(e) =>{
    e.preventDefault();
    const userData = {
      username,
      password
    }
    const result = await signup(userData);
    navigate("/")
    localStorage.setItem("token",result.token);
  }
  return (
    <div className='grid grid-cols-2 min-h-screen w-full'>
      <div className='h-full flex justify-center'>
        <div className='mt-40'>
        <h1 className='text-[40px] font-extrabold'>Create Your Account</h1>
        <p className='text-gray-500 mt-3 font-medium'>Start Classifying waste and help our planet</p>
      <form onSubmit={handelSignup}>
        <p className='mt-6 font-bold'>Username</p>
        <input className='bg-amber-50 border-2 border-gray-200 w-full rounded-sm mt-1.5 p-2' type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <p className='mt-6 font-bold'>Password</p>
        <input className='bg-amber-50 border-2 border-gray-200 w-full rounded-sm mt-1.5 p-2' type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className='bg-green-400 rounded-md p-3 mt-4 w-full font-medium ' type="submit" value="Sign Up" />
      </form>
        </div>
      </div>
      <div className='bg-green-200'>
          <div className='flex justify-center'>
          <img className="mt-15 w-120 h-full rounded-xl object-cover shadow-2xl"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdDNT33eW5A9qHhk-WkjdOeU3dShhWWFv3F8VeNv8YGaNyUU2mbPLS-yhiy54DrHNszPgzjcs9YLlwTgy984VoCSiSf3znvoP1C0nDFl9YRvn0jtBAwxMRHycrBfTKIhb1q1Go6nh2GZPA45B7T5QN23-AQnzfFBw7CV7U5JdS2TH94W27SX7xjIQWWFninOq-qeKwSualzWs30qxsuHIRDQDzBPLofaMFZcM2i3mScmRYPNHdyM7M_yNPMo7cWTnXKMdY22JqlUhC"/>
          </div>
          <div className='flex justify-center mt-10'>
          <h1 className='text-2xl font-bold'>Join a Community of Eco-Warriors</h1>
          </div>
          <p className='flex justify-center mt-2 text-gray-500'>Your contribution helps build a smarter, cleaner future for everyone.</p>
        </div>
    </div>
  )
}

export default Signin