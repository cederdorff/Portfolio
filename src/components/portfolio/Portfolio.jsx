import React from 'react'
import './portfolio.css'
import { useInView } from 'react-intersection-observer'
import styles from '../../animations.css'
import PortfolioItem from './PortfolioItem.jsx'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: 'Crypto Currency Dashboard & Financial Visualization',
//     github: 'https://github.com',
//     demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: 'Charts templates & infographics in Figma',
//     github: 'https://github.com',
//     demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: 'Figma dashboard UI kit for data design web apps',
//     github: 'https://github.com',
//     demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
//   },
//   {
//     id: 4,
//     image: IMG4,
//     title: 'Maintaining tasks and tracking progress',
//     github: 'https://github.com',
//     demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
//   },
//   {
//     id: 5,
//     image: IMG5,
//     title: 'Charts templates & infographics in Figma',
//     github: 'https://github.com',
//     demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
//   },
//   {
//     id: 6,
//     image: IMG6,
//     title: 'Charts templates & infographics in Figma',
//     github: 'https://github.com',
//     demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
//   }
// ]

const Portfolio = ({ post }) => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0
  });

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        async function getData() {
            const response = await fetch("http://react-api.mathiasqm.dk/wp-json/wp/v2/posts?_embed&v=9999");
            const data = await response.json();
                        console.log(data);
            setPosts(data);
        }
        getData();
    }, []);

  return (
    <section id='portfolio'  ref={sectionRef} className={`${inView ? styles.fadeIn : ""}`}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      {posts.map(post => (
		        <PortfolioItem key={post.id} post={post} />
                ))}
      </div>
    </section>
  )
}

export default Portfolio