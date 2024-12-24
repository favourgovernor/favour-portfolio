import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Hiro} from './components/Hiro/Hiro'
import {About}  from './components/About/About'
//import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import  { Footer }  from './components/Footer/Footer'
//import Pricing from './components/Pricing/Pricing'
import Packages from './components/Packages/Packages'


function App() {
  return (
    <div>
      <Navbar />
      <Hiro />
      <About />
      <Packages />
   
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App