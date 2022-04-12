import React from 'react';
import Proptypes from 'prop-types';
import Card from './Card';

function Searched({ data }) {
  return (
    <>
      {data.map(({
        source: { name }, title, url, urlToImage,
      }) => <Card key={Date.now() + title} name={name} title={title} url={url} urlToImage={urlToImage || 'https://static01.nyt.com/images/2022/04/06/world/06virus-briefing-dc-infections-SWAP2/06virus-briefing-dc-infections-SWAP2-facebookJumbo.jpg'} />)}
    </>
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

};
export default Searched;
