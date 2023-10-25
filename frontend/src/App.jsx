import { useState } from 'react'
import Home from './pages/Home'
import {BrowserRouter, Router, Route} from "react-router-dom"
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Router>
        <Route to="/" element={<Home />} />
    </Router>
    </BrowserRouter>
  )
}

export default App
