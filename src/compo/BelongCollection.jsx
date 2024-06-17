import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

function BelongCollection({becoId}) {
  const [belongCollection, setCollection] = useState();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/collection/${becoId}
?api_key=${apiKey}`).then(function (res) {
      setCollection(res.data);
      console.log(res.data);
    }).catch(error => {
      console.error("Error fetching movie data: ", error);
    });
  }, []);
  return (
    <div>
      {
        belongCollection ? (
          <div>
            <div className='w-full flex justify-center my-5'>
              <div className='md:h-[40vh] h-full w-full max-w-screen-xl bg-cover bg-top ' style={{
                backgroundImage : `url(https://image.tmdb.org/t/p/original${belongCollection.backdrop_path})`
              }}>
                <div className='h-full flex bg-black w-full '>
                  <div className='flex  justify-left items-center '>
                    <div className='flex flex-col gap-3 m-5'>
                      <span className='text-2xl font-semibold		'>{belongCollection.name}</span>
                      <div className='max-w-max px-7 py-2 rounded-tl-lg  text-xl font-medium  bg-yellow-500 flex items-center justify-center	'>View The Collection</div>
                    </div>
                  
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )
      }
      
    </div>
  )
}

export default BelongCollection