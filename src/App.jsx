import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Tutors from "./components/tutors"
import Learners from "./components/learners"
import AddTutor from "./components/addtutor"
import EditTutor from "./components/edittutor"
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./components/home"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/tutorlist" element={<Tutors/>} />
          <Route path="/addtutor" element={<AddTutor/>} />
          <Route path="/tutorsignup" element={<AddTutor/>} />

          <Route path="/edittutor/:tutorId" element={<EditTutor/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
