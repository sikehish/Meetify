import { useState } from 'react'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import { ToastContainer } from 'react-toastify'
import {  useAuthContext } from './context/AuthContext'
import Profile from "./pages/Profile"

function App() {

  const {state, dispatch}= useAuthContext()

  console.log(state)

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        {!state.user && <Route path="/login" element={<Login />} />}
        {!state.user && <Route path="/signup" element={<Signup />} />}
        {state.user && <Route path="/profile" element={<Profile />} />}
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  )
}

export default App
