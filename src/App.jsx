import {Routes,Route} from "react-router"
import Home from "./screens/Home"
import Signin from "./screens/Signin"
import Login from "./screens/Login"
import LeaderBoard from "./screens/LeaderBoard"

const App = () => {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/Log-in" element={<Login/>}/>
        <Route path="/Leader_Board" element={<LeaderBoard/>}/>
      </Routes>
    </div>
  )
}

export default App