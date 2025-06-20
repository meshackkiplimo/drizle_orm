import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RegisterPage from './pages/registerPage'
import LoginPage from './pages/loginPage'
import ContactPage from './pages/contactPage'
import { Toaster } from 'sonner'
import AboutPage from './pages/AboutPage'
import CarPage from './pages/CarPage'
import Verify from './components/auth/Verify'

function App() {
  return (

    
     
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>

         
          <Route path="/" element={<Hero />} />
          <Route path="/cars" element={<CarPage/>} />
       
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/verify" element={<Verify/>} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
