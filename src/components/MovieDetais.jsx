import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

function MovieDetails() {
  const { id } = useParams();
  const [movieObj, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`).then(function (res) {
      setMovie(res.data);
      console.log(res.data);
    });
  }, [id, apiKey]);

  return (
    <div className=''>
      {movieObj ? (
         <div className="relative w-full md:h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <img src='https://i.pinimg.com/originals/8b/0e/c1/8b0ec10270dbda2b15779da9745ea7a3.jpg' alt={`Title banner`} className="w-full h-full object-cover blur-sm" />
          </div>
          <div className="relative flex flex-row items-center h-full bg-black bg-opacity-50 p-4 rounded-lg">
            <img src='https://images-cdn.ubuy.co.in/634d0a48023cd2292277f3df-avengers-endgame-marvel-studios-framed.jpg' alt={`Movie poster`} className="mt-4 w-48 h-auto rounded-lg shadow-lg" />
            <h1 className="text-4xl font-bold">Title</h1>
            <p className="mt-2 text-lg">Release Date</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MovieDetails;
