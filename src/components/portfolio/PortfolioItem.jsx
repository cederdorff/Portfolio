import React from 'react'
import parse from "html-react-parser";
import './portfolio.css'
import {NavLink} from 'react-router-dom'

const PortfolioItem = ({ post }) => {
    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }
    
  return (
    <article key={post.id} className='portfolio_item'>
        <div className="portfolio_item_image">
        <img src={post.acf?.img?.url} alt={post.title.rendered} />
        </div>
        <small>Status: <span>{parse(post.acf.progress)}</span></small>
        <h3>{parse(post.title.rendered)}</h3>
        <div className="portfolio_item_cta">
        <a href={post.acf.githublink} className='btn' target='_blank'>Live Demo</a>
        <NavLink to="/ReadMore" className='btn btn-primary'>Read More</NavLink>
    </div>
  </article>
  )
}

export default PortfolioItem