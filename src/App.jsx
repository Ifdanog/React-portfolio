import NavBar from './components/NavBar'
import Home from './components/Home'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Testimonial from './components/Testimonial'
import Pricing from './components/Pricing'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-dark-white'>
      <NavBar />
      <Home />
      <hr />
      <Features />
      <hr />
      <Portfolio />
      <hr />
      <Resume />
      <hr />
      <Testimonial />
      <hr />
      <Pricing />
      <hr />
      <Contacts />
      <hr />
      <Footer />
    </div>
  )
}

export default App
