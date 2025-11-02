import React, { useState } from 'react'
import axios from 'axios'
import Say from '../const'
import { useNavigate } from 'react-router'
import Footer from '../components/Footer'
const Home = () => {
  const [image,setImage] = useState(null)
  const [prediction,setPrediction] = useState("")
  const [confidence,setConfidence] = useState("")
  const [pct,setpct] = useState(0)
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate()
  const Login = () =>{
    navigate('/Log-in')
  }
  const signup = () =>{
    navigate('/sign-in')
  }
  const leaderBoard = () =>{
    navigate('/Leader_Board')
  }
  const handelSubmit = async(e) =>{
    e.preventDefault()
    setLoading(true); 
    try {
      const formData = new FormData()
      formData.append('file',image)
      const token = localStorage.getItem("token")
      const response = await axios.post("https://backend-of-eco-vison.onrender.com/api/predict",formData,{
        headers:{"Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`}
      })
      setPrediction(response.data.data.predicted_class)
      setConfidence(response.data.data.confidence)
      setpct((response.data.data.confidence * 100).toFixed(2))
    } catch (error) {
      console.error("Error uploading file:", error)
    } finally{
      setLoading(false);
    }
  }
  return (
    <div className='min-h-screen min-w-screen'>
      <div className="font-display bg-background-light dark:bg-background-dark">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="flex h-full grow flex-col">
      <div className="flex flex-1 justify-center py-5">
      <div className="flex max-w-[1085px] flex-1 flex-col px-4">
        {/* Header */}
        <div className='columns-2 flex justify-between border-b-2 border-b-gray-100'>
          <div>
            <h1 className='text-3xl m-2 font-bold'>Waste Classifier</h1>
          </div>
          <div>
            <input type='button' className='bg-green-400 px-4 py-2 rounded m-4 font-medium' value="Leader Board" onClick={leaderBoard}/>
            <input type='button' className='bg-[#e4e4bd] px-4 py-2 rounded m-2  hover:bg-[#dedfa9] font-medium' value='Log in' onClick={Login}/>
            <input type='button' className='bg-[#38e07b] px-4 py-2 rounded m-2 font-medium' value='Sign up' onClick={signup}/>
          </div>
        </div>
        {/* Sub Header */}
        <div className='flex justify-center mt-5'>
          <div className='grid-rows-2'>
          <div className='flex justify-center'>
          <h1 className='text-4xl font-extrabold'>Classify Your Waste Instantly</h1>
          </div>
          <div className='flex justify-center mt-3'>
            <div className='grid-rows-2'>
            <div >
          <p className='text-gray-400'>Upload an image to identify the type of waste to dispose of it</p>
            </div>
            <div className='flex justify-center'>
              <p className='text-gray-400'>responsibly.</p>
            </div>
            </div>
          </div>
          </div>
        </div>
        {/* File Upload */}
        <div className='border-2 border-dashed border-gray-300 rounded-xl h-65 mt-4'>
          <div className='flex justify-center'>
            <div className='grid-rows-4'>
              <div className='flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-600 mt-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div className='flex justify-center'>
                <p className='text-gray-600 mt-5'>Your classification results will appear here once you upload an image.</p>
              </div>
              <div className="flex flex-col items-center mt-4">
  <label
    htmlFor="file-upload"
    className="cursor-pointer bg-linear-to-r from-green-400 to-blue-500 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:opacity-90 transition-all"
  >
    Upload Image
  </label>
  <input
    id="file-upload"
    type="file"
    accept="image/*"
    onChange={(e) => setImage(e.target.files[0])}
    className="hidden"
  />
</div>

              <div className='flex justify-center'>
               <input type='button' className='bg-green-400 px-4 py-2 rounded m-2 font-medium hover:bg-green-300 mt-1' onClick={handelSubmit} value={loading ? "Submiting.." : "Submit"} disabled={image == null} />
              </div>
            </div>
          </div>

        </div>
        <h1 className='text-3xl font-bold mt-5'>Classification Result</h1>
        {/* Card */}
          <div className='bg-amber-50 w-full h-full shadow-xl rounded-xl mt-4 p-2'>
            <div className='grid grid-cols-12 gap-6'>
              <div className='col-span-3'>
                {image && <img src={URL.createObjectURL(image)} className='w-full h-full object-cover rounded-bl-lg rounded-tl-lg'/>}
              </div>
              <div className='col-span-9'>
              {prediction && <div>
                  <h2 className='text-[20px] font-bold mt-3'>Prediction: {prediction}</h2>
                  <h3 className='text-[17px] font-medium mt-2 mb-2'>Confidence: {(confidence * 100).toFixed(2)}%</h3>
                  <div
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={pct}
                    className=" bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden max-w-[700px] mt-1.5"
                  >
                  <div
                    className="h-full  bg-linear-to-r from-[#00ff08] to-[#aefcb2] from-eco-primary to-eco-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${pct}%` }}
                  />
                  </div>
                  <ul className='mt-2 ms-4'>{Object.entries(Say[prediction]).map(([key, value]) => <li className='text-gray-500 text-[16px] p-0.2' key={key}>{key} : {value}</li>)}</ul>
                </div>}
              </div>
            </div>
          </div>
          <div className='ms-30 mb-7 mt-15 grid grid-cols-2 justify-center'>
            <div>
            <h1 className='text-3xl font-bold'>Check Out Our Top Contributers</h1>
            </div>
            <div>
            <input type='button' className='bg-green-400 px-4 py-2 rounded font-medium' value="Leader Board" onClick={leaderBoard}/>
            </div>
          </div>
          <p className='font-medium' >Want Your Name in Leader Board Signup and Earn eco points and show the World Your Contribution</p>
     <Footer />
      </div>
      </div>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Home