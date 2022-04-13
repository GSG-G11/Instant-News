import React from 'react';
import PropTypes from 'prop-types';
import './details.css';

function NewsDetails({ category, index, data }) {
  const {
    source = {},
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  } = data[`/${category}`][index];
  const { name } = source;
  return (
    <main className="section-container">
      <section className="news-page-container">
        <div className="title"><span>{title}</span></div>
        <div className="about-title-container">
          <div className="source-logo">
            <img src="" alt="" className="logo" />
          </div>
          <div className="source-date-container">
            <div className="source">
              By
              {' '}
              <span>{author}</span>
              ,
              {' '}
              <span>{name}</span>
            </div>
            <div className="date"><span>{(new Date(publishedAt)).toUTCString()}</span></div>
          </div>
        </div>
        <figure className="related-img-container">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt={title} title={description} className="url-to-img" />
          </a>
          <figcaption>
            <span>{description}</span>
          </figcaption>
        </figure>
        <article className="content">
          <span>
            {content}
            {' '}
          </span>
          <span>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <span>Read More</span>
            </a>
          </span>
        </article>

      </section>
    </main>
  );
}

NewsDetails.propTypes = {
  category: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  data: PropTypes.shape({
    '/': PropTypes.arrayOf(PropTypes.shape({
      source: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }),
      author: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      urlToImage: PropTypes.string,
      publishedAt: PropTypes.string,
      content: PropTypes.string,
    })),
  }).isRequired,

};

export default NewsDetails;
