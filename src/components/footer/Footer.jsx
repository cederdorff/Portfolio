import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mathias Quist Michaelsen</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mathias-quist-michaelsen-329590125/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/MathiasQM" target="_blank"><BsGithub/></a>
        <a href="https://dribbble.com/MatQuist" target="_blank"><BsDribbble/></a>
      </div>
      <small>&copy; All rights reserved - Mathias Quist Michaelsen</small>
    </footer>
  )
}

export default Footer