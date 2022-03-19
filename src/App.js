import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import GifList from './components/GifList';

export default function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => performSearch, []);

  const performSearch = async(query)=> {
    try {
      const {data} = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`);
      setGifs(data.data);
    } catch (err) {
        console.log('Error fetching and parsing data', err);
      }
  }

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">Gif Search App</h1>
          <SearchForm onSearch={performSearch} />      
        </div>   
      </div>    
      <div className="main-content">
        <GifList data={gifs} />
      </div>
    </div>
  )
}
