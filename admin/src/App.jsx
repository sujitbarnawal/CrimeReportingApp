import Navbar from "./components/Navbar"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Home from "./pages/Home";

function App() {
  

  return (
   <>
    <div>
      <ToastContainer/>
      <Navbar/>
      <Home/>
    </div>
   </>
  )
}

export default App
