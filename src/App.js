import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import GifList from './components/GifList';

export default function App() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => performSearch(), []);

  const performSearch = async(query = 'dog')=> {
    try {
      const {data} = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=12&api_key=n9Ckrer7sonqSKbjISSzcG1qxwDAzGPl`);
      setGifs(data.data);
      console.log(data)
      setLoading(false);
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
        {
          (loading) 
          ? <p>loading ...</p>
          : <GifList data={gifs} />
        }
      </div>
    </div>
  )
}
