import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import MyReport from "./pages/MyReport";
import Register from "./components/Register";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Register setShowLogin={setShowLogin} /> : <></>}
      <Router>
        <ToastContainer/>
        <div className="w-[80%] m-auto ">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home setShowLogin={setShowLogin} />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/my-reports" element={<MyReport />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
