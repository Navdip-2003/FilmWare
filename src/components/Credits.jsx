import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

function Credits({ id }) {
  const [credit, setCredit] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`).then((res) => {
      console.log(res.data.cast);
      setCredit(res.data.cast);
    }).catch(error => {
      console.error("Error fetching Images data: ", error);
    });
  }, [id]);

  const CardUI = ({ data }) => {
    return (
      <div className='flex-none m-4 md:h-max  w-[150px] bg-neutral-900 rounded-xl p-2'>
        {
          data.profile_path ? ( 
            <div className='md:h-[16vh] flex bg-cover bg-center rounded-xl' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.profile_path})` }}>
           </div>
          ) : (
            <div className='md:h-[16vh] flex items-center justify-center'>
              <i className="fa-solid fa-user text-4xl	" style={{color : '#ffffff'}}></i>
            </div>
          )
        }
       
        <div className='text-sm mt-2 flex flex-col font-semibold truncate ' style={{ userSelect: "none" }}>
          <span>{data.name}</span>
          <span className='text-xs leading-3 font-normal'>{data.character}</span>
        </div>
      </div>
    );
  }


  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-screen-xl w-full  flex flex-col text-xl font-medium'>
        <span>Top Billed Cast</span>
        <div className='flex flex-row overflow-x-scroll gap-3 mb-10' style={{ paddingRight: '16px', overflowY: 'hidden', scrollbarWidth: 'thin', scrollbarColor: '#555 #333' }}>
          {credit.slice(0 , 8).map((character, index) => (
            index !== 7 ?
            <CardUI key={index} data={character} /> : 
            <div className='flex flex-row gap-2 m-3 w-full items-center justify-center'>
                <p className='text-sm	leading-4	' style={{userSelect: "none" }}>View More</p>
                <i class="fa-solid fa-right-to-bracket" style={{color : "#ffffff"}}></i>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default Credits;
