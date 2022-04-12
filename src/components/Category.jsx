import React, { useEffect } from 'react';
import axios from 'axios';
import Proptypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Card from './Card';

function Category({ data, setData }) {
  let location = useLocation();
  location = location.pathname === '/' ? '/general' : location.pathname;
  useEffect(() => {
    if (data[location].length === 0) {
      axios.get(`https://newsapi.org/v2/top-headlines?category=${location.slice(1)}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((res) => setData({ ...data, [location]: res.data.articles }));
    }
  }, [location]);
  return (
    <>
      <p>{location}</p>
      {data[location]?.map(({
        source: { name }, title, url, urlToImage,
      }) => <Card key={title} name={name} title={title} url={url} urlToImage={urlToImage || 'https://static01.nyt.com/images/2022/04/06/world/06virus-briefing-dc-infections-SWAP2/06virus-briefing-dc-infections-SWAP2-facebookJumbo.jpg'} />)}
    </>
  );
}
Category.propTypes = {
  data: Proptypes.shape({
    '/': Proptypes.arrayOf(Proptypes.shape({
      source: Proptypes.shape({
        id: Proptypes.string,
        name: Proptypes.string,
      }),
      author: Proptypes.string,
      title: Proptypes.string,
      description: Proptypes.string,
      url: Proptypes.string,
      urlToImage: Proptypes.string,
      publishedAt: Proptypes.string,
      content: Proptypes.string,
    })),
  }).isRequired,
  setData: Proptypes.func.isRequired,
};

export default Category;
