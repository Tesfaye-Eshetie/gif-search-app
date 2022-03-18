import React from 'react';
import Gif from './Gif';

const GifList = ({ data }) => { 
  
  let gifs = data.map(gif =>
    <Gif url={gif.images.fixed_height.url} key={gif.id} />
  );
  
  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;
