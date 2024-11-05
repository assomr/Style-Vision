import React from 'react'
import {Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
       
       <Routes>
        <Route path='/' eleùent={<Home />} />
       </Routes>
    </div>
  )
}

export default App