import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NewsDetails from './NewsDetails';

function NewsPage({ data }) {
  const { category, index } = useParams();
  switch (category) {
    case 'general':
    case 'business':
    case 'entertainment':
    case 'health':
    case 'science':
    case 'sports':
    case 'technology':
    case 'search':
      return (<NewsDetails category={category} index={index} data={data} />);
    default:
      return (<div>404</div>);
  }
}

const ArrayItemPropTypes = PropTypes.shape({
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
});
NewsPage.propTypes = {
  data: PropTypes.shape({
    '/general': PropTypes.arrayOf(ArrayItemPropTypes),
    '/business': PropTypes.arrayOf(ArrayItemPropTypes),
    '/entertainment': PropTypes.arrayOf(ArrayItemPropTypes),
    '/health': PropTypes.arrayOf(ArrayItemPropTypes),
    '/science': PropTypes.arrayOf(ArrayItemPropTypes),
    '/sports': PropTypes.arrayOf(ArrayItemPropTypes),
    '/technology': PropTypes.arrayOf(ArrayItemPropTypes),
    '/search': PropTypes.arrayOf(ArrayItemPropTypes),
  }).isRequired,
};

export default NewsPage;
