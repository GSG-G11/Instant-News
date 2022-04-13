import React from 'react';
import Proptypes from 'prop-types';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({
  name, title, url, urlToImage, publishedAt,
}) {
  return (
    <div className="blog-post">
      <div className="blog-post__img">
        <img
          src={urlToImage}
          alt={title}
        />
      </div>
      <div className="blog-post__info">
        <div className="blog-post__date">
          <span>{(new Date(publishedAt).toDateString())}</span>
          <span>{name}</span>
        </div>
        <h1 className="blog-post__title">{title}</h1>
        <Link to={url} className="blog-post__cta">Read More</Link>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired,
  urlToImage: Proptypes.string.isRequired,
  publishedAt: Proptypes.string.isRequired,
};

export default Card;
