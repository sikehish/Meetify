import { useState } from 'react'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
