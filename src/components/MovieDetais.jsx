import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;
const photoUrl = process.env.REACT_APP_PHOTO_URL;

function MovieDetails() {
  const { id } = useParams();
  const [movieObj, setMovie] = useState(null);
  const [Images, setImage] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/${id}?api_key=${apiKey}`).then(function (res) {
      setMovie(res.data);
    }).catch(error => {
      console.error("Error fetching movie data: ", error);
    });
    axios.get(`${apiUrl}/${id}/images?api_key=${apiKey}`).then(function (res) {
      setImage(res.data.backdrops);
    }).catch(error => {
      console.error("Error fetching Images data: ", error);
    });
  }, []);

  return (
    <div className=''>
      {movieObj ? (
        <div className="relative w-full md:h-[70vh]  overflow-hidden">
          <div className="absolute inset-0">
            {
              Images.length !== 0 ? (
                <img src={`https://image.tmdb.org/t/p/w1000_and_h450_multi_faces${Images[1].file_path}`} alt={`Title banner`} className="w-full h-full object-cover " />
              ) : (
                <p>Not BG Image</p>
              )
            }
          </div>
          <div className="relative flex h-full bg-black bg-opacity-80 ">
            <div className='flex-row flex w-full justify-center items-center'>
              {movieObj.poster_path ? (
                <img src={`${photoUrl}${movieObj.poster_path}`} alt={`${movieObj.title} poster`} className="mt-4 w-200px md:h-[50vh] rounded-lg shadow-lg" />
              ) : (
                <p>No poster available</p>
              )}
              <div className="ml-4">
                <h1 className="text-4xl font-bold">{movieObj.title}</h1>
                <p className="mt-2 text-lg">{movieObj.release_date}</p>
              </div>
            </div> 
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MovieDetails;
