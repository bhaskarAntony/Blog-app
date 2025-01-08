import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/notFound/NotFound'
import About from './pages/about/About'
import ContactUs from './pages/contactus/ContactUs'
import './App.css'

function App() {
  return (
    <div className='app'>
       <header>
        <h1>LOGO</h1>

        <ul>
            <li><a href="/">Home</a></li>  
            <li><a href="/about">About</a></li>  
            <li><a href="/contact">Contact us</a></li>  
            <li><a href="/services">Services</a></li>  
        </ul>
       </header>
      <hr />
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          {/* if page is not found we can display any component  */}
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App