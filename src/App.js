import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/home'
import Contact from "./pages/contact/contact"
import About from './pages/about/about'
import Plans from './pages/plans/plans'
import Trainers from './pages/trainers/trainers'
import Notfound from './pages/notfound/notfound'
import Gallery from './pages/gallery/gallery'
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route exact path='/' element={ <Home/>}/>
      <Route path="/about" element={ <About/>}/>
      <Route path="/plans" element={ <Plans/>}/>
      <Route path="/contact" element={ <Contact/>}/>
      <Route path="/trainers" element={<Trainers/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="*" element={<Notfound/>}/>
     </Routes>
    
  
    
     
     
     
     
    </BrowserRouter>
  )
}

export default App
