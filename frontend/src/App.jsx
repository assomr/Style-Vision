import React from 'react'
import {Routes} from 'react-router-dom'
import Home from './pages/Home'
import Stylists from './pages/Stylists'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
       
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stylists' element={<Stylists />} />
        <Route path='/stylists/:speciality' element={<Stylists />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:stylId' element={<Appointment />} />
       </Routes>
    </div>
  )
}

export default App