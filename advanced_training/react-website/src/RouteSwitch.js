import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}