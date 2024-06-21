import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard';
import Percentage from './Percentage';
import like from '../asset/like.png'
import Credits from './Credits';
import FieldSeparator from '../compo/FieldSeparator';
import BelongCollection from '../compo/BelongCollection';
import Recommendations from '../compo/Recommendations';



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
  }, [id]);

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  }


  return (
    <div>
    <div className=''>
      {movieObj ? (
        <div className="relative w-full md:h-[70vh]  overflow-hidden">
          <div className="absolute inset-0">
            {
              Images.length !== 0 ? (
                <img src={`https://image.tmdb.org/t/p/original${Images[0].file_path}`} alt={`Title banner`} className="w-full h-full object-cover " />
              ) : (
                <p>Not BG Image</p>
              )
            }
          </div>
          <div className="relative flex w-full h-full bg-black bg-opacity-70 flex justify-center items-center ">
            <div className='flex flex-row m-4 max-w-screen-xl w-full h-full   bg-white-900  justify-center items-center'>
              {movieObj.poster_path ? (
                <div className=' md:w-[15vw] md:h-[35vh] bg-cover	 '>
                  <img src={`${photoUrl}${movieObj.poster_path}`} alt={`${movieObj.title} poster`} className=" rounded-lg shadow-lg" />

                </div>
              ) : (
                <p>No poster available</p>
              )}
              
              <div className="flex flex-col md:w-[80vw] ml-8">
                <h1 className="text-4xl font-medium text-2xl">{`${movieObj.title} (${movieObj.release_date.split('-')[0]})`}</h1>

                <div className='flex items-center bg-white-900/60 gap-6 h-[60px]'>
                  <div className='flex h-full items-center gap-1 '>
                    <div className=' w-[60px]'>
                      <Percentage value = {movieObj.vote_average*10}/>
                    </div>
                    
                      <pre className='text-base	 font-sans  font-semibold leading-4'>{'User\nScore'}</pre>
                    
                    
                  </div>
                  <div className='flex gap-2 items-center'>
                    <i className="fa-solid fa-thumbs-up text-2xl" style={{color: "#ffffff"}}></i>
                    <p className='text-lg		'>{movieObj.vote_count}</p>
                  </div>
                  
                  
                </div>
               
               
                <div className='flex mt-2 flex-row items-centers'>
                  <p className="text-base">{formatDate(movieObj.release_date)}{}</p>
                  <span className='text-base ml-4  '> 
                    {movieObj.genres.map((genresData)=>{
                        return `•  ${genresData.name} `
                    })}
                  </span>
                
                </div>
                
                <p className="mt-2 text-lg italic font-bold-100 text-base text-gray-200	">{movieObj.tagline}</p>
                {
                  movieObj.overview ? (
                    <div>
                      <p className="mt-2 text-xl leading-3 mt-5	 font-semibold	">Overview</p>
                    <p className="mt-2 text-lg font-sans font-normal">{movieObj.overview}</p>
                    </div>
                  ) : <div></div>
                }
               
              </div>
            </div> 
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      <Credits id = {id}/>      
      {
        movieObj && movieObj.belongs_to_collection !== null ? (
          <div>
            <FieldSeparator />
            <BelongCollection  becoId={movieObj.belongs_to_collection.id}/>
          </div>
          
        ) : (
          <div></div>
        )
      }
      <>
        <FieldSeparator />
        <Recommendations id={id} />
      </>

      
      
    </div>

  );
}

export default MovieDetails;
