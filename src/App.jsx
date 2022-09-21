import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
// import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ClientBar from './components/clientbar/ClientBar'
import ReadMore from './components/portfolio/ReadMore'
import { Routes, Route, Navigate } from "react-router-dom";


const App = () => {

  return (
    <>
        <Header id="header"/>
        <Nav />
            <Routes>
                <Route path="/ReadMore" element={<ReadMore />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        <ClientBar />
        <About id="about" />
        <Portfolio id="portfolio"/>
        <Experience id="experience"/>
        <Testimonials id="testimonials"/>
        <Contact id="contact"/>
        <Footer />
    </>
  )
}

export default App