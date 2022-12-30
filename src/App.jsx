import React from 'react'
import Home from './Pages/Home/Home'
import CurOption from './Pages/Curri&Cocurri/OptionScreen'
import RegOption from './Pages/Registration/RegistrationOption'
import StuReg from './Pages/Registration/StuReg'
import TeacherApp from './Pages/Registration/TeacherApp'
import Admission from './Pages/Admission/Admission'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Curri from './Pages/Curri&Cocurri/Curri'
import Cocurri from './Pages/Curri&Cocurri/cocurri'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/activites" element={<CurOption/>}/>
        <Route path="/joinus" element={<RegOption/>}/>
        <Route path="/studentregistration" element={<StuReg/>}/>
        <Route path="/teacherapplication" element={<TeacherApp/>}/>
        <Route path="/admissiondetails" element={<Admission/>}/>
        <Route path="/curriculum" element={<Curri/>}/>
        <Route path="/cocurri" element={<Cocurri/>}/>
        
      </Routes>
    </Router>
  )
}

export default App
