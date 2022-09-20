import React from 'react'
import './header.css'
import Cta from './Cta'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
// import { useInView } from 'react-intersection-observer';
// import styles from '../../animations.css'

const Header = () => {
  // const { ref: sectionRef, inView: sectionIsVisible } = useInView();
  // ref={sectionRef} className={`${styles.fadeIn} ${sectionIsVisible ? styles.fadeIn : ''}`}
  return (
    <header>
      <div className="container header_container">
          <h5>Hello I am</h5>
          <h1>Mathias Quist Michaelsen</h1>
          <h5 className='text-light'>Front-End Developer</h5>
          <HeaderSocials />
          <Cta />
          <div className="me">
            <img src={ME} alt="" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header