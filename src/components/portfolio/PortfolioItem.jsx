import parse from "html-react-parser";
import React from "react";
import { NavLink } from "react-router-dom";
import "./portfolio.css";

const PortfolioItem = ({ post }) => {
    return (
        <article key={post.id} className="portfolio_item">
            <div className="portfolio_item_image">
                <img src={post.acf?.img?.url} alt={post.title.rendered} />
            </div>
            <small>
                Status: <span>{parse(post.acf.progress)}</span>
            </small>
            <h3>{parse(post.title.rendered)}</h3>
            <div className="portfolio_item_cta">
                <a href={post.acf.githublink} className="btn" target="_blank">
                    Live Demo
                </a>
                <NavLink to={`projects/${post.slug}`} className="btn btn-primary">
                    Read More
                </NavLink>
            </div>
        </article>
    );
};

export default PortfolioItem;
