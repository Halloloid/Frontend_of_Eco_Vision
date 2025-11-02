import axios from "axios"
const API_URL = "https://backend-of-eco-vison.onrender.com/auth"

export const signup = async(userData) =>{
    const res = await axios.post(`${API_URL}/signin`,userData)
    console.log(res.data.message)
    return res.data
}

export const login = async(userData) => {
    const res = await axios.post(`${API_URL}/Login`,userData)
    console.log(res.data.message)
    return res.data
}