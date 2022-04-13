import React from 'react';
import Proptypes from 'prop-types';
import Card from './Card';

function Searched({ data, search }) {
  return (
    <div>
      {data.length === 0 ? (
        <h2>
          {`No result for ${search}`}
        </h2>
      ) : data.map(({
        source, title, urlToImage, publishedAt,
      }, index) => <Card key={Date.now() + title} name={source?.name} title={title} url={`/search/${index}`} urlToImage={urlToImage || 'https://static01.nyt.com/images/2022/04/06/world/06virus-briefing-dc-infections-SWAP2/06virus-briefing-dc-infections-SWAP2-facebookJumbo.jpg'} publishedAt={publishedAt} />)}
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
