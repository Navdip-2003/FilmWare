import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useNavigation from '../hooks/useNavigation';

const apiKey = process.env.REACT_APP_API_KEY;

function Credits({ id }) {
  const {goToProfile} = useNavigation();
  const [credit, setCredit] = useState([]);
  

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`).then((res) => {
      setCredit(res.data.cast);
    }).catch(error => {
      console.error("Error fetching Images data: ", error);
    });
  }, []);

  const CardUI = ({ data }) => {
    return (
      <div onClick={()=>{goToProfile(data.id)}} className='flex-none m-4 md:h-max  w-[150px] bg-neutral-900 rounded-xl p-2 hover:scale-105 duration-300'>
        {
          data.profile_path ? ( 
            <div className='min-h-[150px] md:h-[16vh]  flex bg-cover bg-center rounded-xl' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.profile_path})` }}>
           </div>
          ) : (
            <div className='min-h-100px md:h-[16vh] flex items-center justify-center'>
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
    <div className='w-full flex  justify-center'>
      <div className='max-w-screen-xl w-full  flex flex-col text-xl font-medium'>
        <span>Top Billed Cast</span>
        <div className='flex flex-row overflow-x-scroll gap-3 ' style={{ paddingRight: '16px', overflowY: 'hidden', scrollbarWidth: 'thin', scrollbarColor: '#555 #333' }}>
          {credit.slice(0 , 8).map((character, index) => (
            index !== 7 ?
            <CardUI data={character} key={index} /> : 
            <div key={index} className='flex flex-row gap-2 m-3 w-full items-center justify-center'>
                <p className='text-sm	leading-4	' style={{userSelect: "none" }}>View More</p>
                <i className="fa-solid fa-right-to-bracket" style={{color : "#ffffff"}}></i>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default Credits;
