import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//General
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./components/home"

//Tutors
import Tutors from "./components/tutors"
import TutorListReadOnly from './components/tutorlistreadonly'
import TutorProfileLearnerView from './components/tutorprofilelearnerview'
import Learners from "./components/learners"
import AddTutor from "./components/addtutor"
import EditTutor from "./components/edittutor"

//Learners
import AddLearner from "./components/addlearner"



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
         
          <Route path="/" element={<Home/>} />
          <Route path="/admin/tutorlist" element={<Tutors/>} />
          <Route path="/tutorlist" element={<TutorListReadOnly/>} />
          <Route path="/tutorprofilelearnerview/:tutorId" element={<TutorProfileLearnerView/>} />
          <Route path="/addtutor" element={<AddTutor/>} />
          <Route path="/tutorsignup" element={<AddTutor/>} />
          <Route path="/edittutor/:tutorId" element={<EditTutor/>} />

          <Route path="/addlearner" element={<AddLearner/>} />


        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
