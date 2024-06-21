import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecoMovieCard from './RecoMovieCard';
import useNavigation from "../hooks/useNavigation";

const apiKey = process.env.REACT_APP_API_KEY;

function Recommendations({id}) {
  
  const [Movies, SetMovies] = useState([]);


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations
?api_key=${apiKey}`).then((res) => {
      SetMovies(res.data.results);
    }).catch(error => {
      console.error("Error fetching Images data: ", error);
    });
  }, [id]);


  return (
    <>{
      Movies ? (
        <div className='flex justify-center'>
          <div className='flex flex-col max-w-screen-xl	w-full'>
            <span className='text-xl font-medium m-3'>
              Recommendations
            </span>
            <div className='flex flex-row overflow-x-scroll gap-3 mb-10' style={{ paddingRight: '16px', overflowY: 'hidden', scrollbarWidth: 'thin', scrollbarColor: '#555 #333' }}>
                {
                  Movies.map((movie ,index) =>{
                    return <RecoMovieCard Movie={movie} key={index}/>
                  })
                }
            </div>
          </div>
        </div>
      ):(
        <div></div>
      )
    }
    </>
  )
}

export default Recommendations