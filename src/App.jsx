import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//General
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./components/home"
import Login from "./components/login"

//Tutors
import Tutors from "./components/tutors"
import TutorListReadOnly from './components/tutorlistreadonly'
import TutorProfileLearnerView from './components/tutorprofilelearnerview'
import TutorProfileTutorView from './components/tutorprofiletutorview'

import Learners from "./components/learners"
import AddTutor from "./components/addtutor"
import EditTutor from "./components/edittutor"

//Learners
import AddLearner from "./components/addlearner"
import LearnerProfileLearnerView from './components/learnerprofilelearnerview'
import EditLearner from "./components/editlearner"




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
          <Route path="/tutorprofiletutorview/:tutorId" element={<TutorProfileTutorView/>} />

          <Route path="/addtutor" element={<AddTutor/>} />
          <Route path="/tutorsignup" element={<AddTutor/>} />
          <Route path="/edittutor/:tutorId" element={<EditTutor/>} />


          <Route path="/admin/learnerlist" element={<Learners/>} />

          <Route path="/learnersignup" element={<AddLearner/>} />
          <Route path="/editlearner/:learnerId" element={<EditLearner/>} />

          <Route path="/learnerprofilelearnerview/:learnerId" element={<LearnerProfileLearnerView/>} />


          <Route path="/login" element={<Login/>} />

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
