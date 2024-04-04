import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes"
import Navbar from "./components/Navbar"
export default function App() {
  return (
   
    <BrowserRouter>
     <Navbar/>
     <Routes/>
     
    </BrowserRouter>

  )
}