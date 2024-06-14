import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RecoMovieCard from './RecoMovieCard';

const apiKey = process.env.REACT_APP_API_KEY;

function Credit_Movie({creditid}) {
    const [creditMovies, setCreditMovies] = useState([]);
  
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/${creditid}/movie_credits?api_key=${apiKey}`).then((res) => {
            setCreditMovies(res.data.cast);
            console.log(res.data.cast)
        }).catch(error => {
          console.error("Error fetching Images data: ", error);
        });
      }, []);
      
  return (
    <div>
      {
        creditMovies ? (
          <div>
          <div className='text-2xl my-5'>Credit Movie</div>
          <div className='flex flex-row overflow-x-scroll gap-3 mb-10' style={{ paddingRight: '16px', overflowY: 'hidden', scrollbarWidth: 'thin', scrollbarColor: '#555 #333' }}>
              {creditMovies.slice(0 , 8).map((Movie, index) => (
                index !== 7 ?
                <RecoMovieCard Movie={Movie}/> : 
                <div key={index} className='flex flex-row gap-2 m-3 w-full items-center justify-center'>
                    <p className='text-sm	leading-4	' style={{userSelect: "none" }}>View More</p>
                    <i className="fa-solid fa-right-to-bracket" style={{color : "#ffffff"}}></i>
                </div>
              ))}
              
            </div>
        </div>
        ) : (
          <div>Loading data ...</div>
        )
      }

    </div>
  )
}

export default Credit_Movie