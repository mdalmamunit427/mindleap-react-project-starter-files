
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import WorkingStep from './components/WorkingStep'

function App() {


  return (
    <div className='font-primary overflow-x-hidden'>
     <Navbar/>
     <Hero/>
     <Services/>
    <About/>
    <WorkingStep/>
    <Pricing/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
