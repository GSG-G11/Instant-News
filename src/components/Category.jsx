import React, { useEffect } from 'react';
import axios from 'axios';
import Proptypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Card from './Card';

function Category({ data, setData }) {
  let location = useLocation();
  location = location.pathname === '/' ? '/general' : location.pathname;
  useEffect(() => {
    if (data[location].length === 1) {
      axios.get(`https://newsapi.org/v2/top-headlines?category=${location.slice(1)}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((res) => setData({ ...data, [location]: res.data.articles }));
    }
  }, [location]);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data[location].length === 1 ? (
        <div style={{
          position: 'fixed', top: '50%', left: '50%',
        }}
        >
          <ReactLoading
            type="spokes"
            color="#4facfe"
          />
        </div>
      ) : data[location]?.map(({
        source, title, urlToImage, publishedAt,
      }, index) => <Card key={Date.now() + title} name={source?.name} title={title} url={`${location}/${index}`} urlToImage={urlToImage || 'https://static01.nyt.com/images/2022/04/06/world/06virus-briefing-dc-infections-SWAP2/06virus-briefing-dc-infections-SWAP2-facebookJumbo.jpg'} publishedAt={publishedAt} />)}
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
