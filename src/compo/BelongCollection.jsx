import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

function BelongCollection({becoId}) {
  const [belongCollection, setCollection] = useState(null);

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
            <div className='w-full flex justify-center'>
              <div className='md:h-[20vh] max-w-screen-xl bg-cover bg-center' style={{
                backgroundImage : `url(https://image.tmdb.org/t/p/original${belongCollection.backdrop_path})`
              }}>
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