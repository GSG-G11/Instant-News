import React from 'react';
import Proptypes from 'prop-types';
import ReactLoading from 'react-loading';
import Card from './Card';
import './home.css';

function Searched({ data, search }) {
  return (
    <div>
      {(data.length === 1 && !data[0].url) ? (
        <div style={{
          position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        }}
        >
          <ReactLoading
            type="spokes"
            color="#4facfe"
          />
        </div>
      ) : null}
      { data.length >= 1 && data[0].url ? data.map(({
        source, title, urlToImage, publishedAt,
      }, index) => <Card key={Date.now() + title} name={source?.name} title={title} url={`/search/${index}`} urlToImage={urlToImage || 'https://static01.nyt.com/images/2022/04/06/world/06virus-briefing-dc-infections-SWAP2/06virus-briefing-dc-infections-SWAP2-facebookJumbo.jpg'} publishedAt={publishedAt} />) : null}
      {(data.length === 0
        ? (
          <div className="no-content">
            No Result For
            {' '}
            <span style={{ color: '#4facfe' }}>
              {search}
            </span>
          </div>
        ) : null
      )}
    </div>
  );
}
Searched.propTypes = {
  data: Proptypes.arrayOf(Proptypes.shape({
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
  })).isRequired,
  search: Proptypes.string.isRequired,
};
export default Searched;
