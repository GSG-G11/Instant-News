import React from 'react';
import Proptypes from 'prop-types';
import './Card.css';

function Card({
  name, title, url, urlToImage,
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
          <span>October 27 2019</span>
          <span>{name}</span>
        </div>
        <h1 className="blog-post__title">{title}</h1>
        <a href={url} className="blog-post__cta">Read More</a>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired,
  urlToImage: Proptypes.string.isRequired,
};

export default Card;
