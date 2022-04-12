import React from 'react';
import Proptypes from 'prop-types';

function Card({
  name, title, url, urlToImage,
}) {
  return (
    <>
      <img src={urlToImage} alt={title} />
      <p>{name}</p>
      <p>{title}</p>
      <a href={url}>read more</a>
    </>
  );
}
Card.propTypes = {
  name: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired,
  urlToImage: Proptypes.string.isRequired,
};

export default Card;
