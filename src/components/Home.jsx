import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import axios from 'axios';
import Category from './Category';
import Searched from './Searched';
import './home.css';

function Home({ data, setData }) {
  const [search, setSearch] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    if (search) {
      axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}`, { signal })
        // eslint-disable-next-line no-console
        .then((res) => setData({ ...data, '/search': res.data.articles })).catch((error) => console.log(error.message));
    }
    return () => { controller.abort(); setData({ ...data, '/search': [{}] }); };
  }, [search]);
  return (
    <div>
      <div className="search-input-container">
        <input
          type="text"
          name="search"
          placeholder="Search For ..."
          value={search}
          onChange={({ target: { value } }) => {
            setSearch(value);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            position: 'absolute', height: '2rem', right: '1.5rem', top: '1rem',
          }}
        >
          <g data-name="Layer 2">
            <g data-name="search">
              <rect width="24" height="24" opacity="0" />
              <path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" />
            </g>
          </g>
        </svg>
      </div>
      {search ? <Searched data={data['/search']} search={search} /> : <Category data={data} setData={setData} />}
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
