
import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import { useInView } from 'react-intersection-observer';
import styles from '../../animations.css'

const Experience = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0
  });

  return (
    <section id='experience'  ref={sectionRef} className={`${inView ? styles.fadeIn : ""}`}>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Webdevelopment</h3>
          <div className="experience_content">
            <article className='experience_details'>
                <AiFillCheckCircle className='experience_details_icons' />
              <div>              
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
                <AiFillCheckCircle className='experience_details_icons' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
                <AiFillCheckCircle className='experience_details_icons' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
                <AiFillCheckCircle className='experience_details_icons' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
                <AiFillCheckCircle className='experience_details_icons' />
              <div>
                <h4>Vue</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
{/* END of Front End */}
    
        <div className="experience_backend">
        <h3>UI/UX</h3>
        <div className="experience_content">
        <article className='experience_details'>
                <AiFillCheckCircle className='experience_details_icons' />
              <div>              
                <h4>Figma/AdobeXD</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
                <AiFillCheckCircle className='experience_details_icons' />
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
                <AiFillCheckCircle className='experience_details_icons' />
              <div>
                <h4>Adobe AI</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
                <AiFillCheckCircle className='experience_details_icons' />
              <div>
                <h4>Adobe AE</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience