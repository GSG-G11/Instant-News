import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import axios from 'axios';
import Category from './Category';
import Searched from './Searched';

function Home({ data, setData }) {
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (search) {
      axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((res) => setData({ ...data, '/search': res.data.articles }));
    }
  }, [search]);
  return (
    <div>
      <input
        type="text"
        name="search"
        value={search}
        onChange={({ target: { value } }) => {
          setSearch(value);
        }}
      />
      {search ? <Searched data={data['/search']} /> : <Category data={data} setData={setData} />}
    </div>
  );
}
Home.propTypes = {
  data: Proptypes.shape({
    '/search': Proptypes.arrayOf(Proptypes.shape({
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

export default Home;
