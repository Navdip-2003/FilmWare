import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MovieCard from './MovieCard';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

function MovieDetais() {
  const { id } = useParams();
  const [movieObj , setMovie] = useState()

  useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/1010581?api_key=909a8f617091d3842877f29b824c4b66`).then(function(res){
        setMovie(res.data.results)
      })
}, [])
  return (
    <div className="relative w-full h-[50vh]">
    <div
      className="absolute inset-0 bg-cover bg-center filter blur-mg"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1000_and_h450_multi_faces/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg)` }}
    ></div>
    <div className="absolute inset-0 flex flex-row justify-center items-center text-white p-4 bg-black bg-opacity-2">
      <div
        className="h-[45vh] w-[250px]  bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/w46Vw536HwNnEzOa7J24YH9DPRS.jpg)` }}
      ></div>
     <div className='flex flex-col'>
        <p>{movieObj.name}</p>
     </div>
    </div>
  </div>
  )
}

export default MovieDetais
