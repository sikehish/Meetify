import { useState } from 'react'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
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
        <Route path="/login" element={!state.user ?  <Login /> : <Navigate to="/" replace={true} />} /> 
        <Route path="/signup" element={!state.user ?  <Signup /> : <Navigate to="/" replace={true} />} /> 
        <Route path="/profile" element={state.user ?  <Profile /> : <Navigate to="/" replace={true} />} /> 
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  )
}

export default App
