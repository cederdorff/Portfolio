import React from 'react'
import CV from '../../assets/cv.pdf'

const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Downlaod CV</a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
  )
}

export default Cta