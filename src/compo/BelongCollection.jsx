import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

function BelongCollection({becoId}) {
  const [belongCollection, setCollection] = useState();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/collection/${becoId}
?api_key=${apiKey}`).then(function (res) {
      setCollection(res.data);
      // console.log(res.data);
    }).catch(error => {
      console.error("Error fetching movie data: ", error);
    });
  }, [becoId]);
  return (
    <div>
      {
        belongCollection ? (
          <div>
            <div className='w-full flex justify-center my-5'>
              <div className='md:h-[35vh]  max-w-screen-xl  h-full w-full bg-cover rounded-xl bg-no-repeat	 ' style={{
                backgroundImage : `url(https://image.tmdb.org/t/p/original${belongCollection.backdrop_path})`
              }}>
                <div className='h-full flex bg-black bg-opacity-50  w-full '>
                  <div className='flex  justify-left items-start '>
                    <div className='w-full flex flex-col gap-3 m-5 mt-4	'>
                      <span className='text-2xl font-semibold	'>{belongCollection.name}</span>
                      <div className='max-w-max px-3 py-1 rounded-tl-lg  text-lg font-medium  bg-green-900 flex   hover:scale-105 duration-300	'>View The Collection</div>
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