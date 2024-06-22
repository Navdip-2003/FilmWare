import React from 'react'
import { useLocation } from 'react-router-dom';
import CreditForCard from './CreditForCard';

function CreditAll() {
  const location = useLocation();
  const { credits } = location.state || []; // Default to an empty array if state is undefined

  return (
    <div className='flex justify-center'>
      {
        credits ? (
          
          <div className='max-w-screen-xl   w-full h-full m-3'>
            <div className='font-bold	text-2xl	'>Credits</div>
            <div className='my-4 '>
              <div className='text-xl mb-6	'>Cast by Department</div>
                <div className='flex flex-wrap justify-center gap-5'>
                  {credits.cast.map((movieObj, index) => (
                                <CreditForCard
                                    credit={movieObj}
                                    key={index}
                                />
                            ))}
                </div>
              <div className='text-xl mb-6	'>Crew by Department</div>
                <div className='flex flex-wrap justify-center gap-5'>
                  {credits.crew.map((movieObj, index) => (
                                <CreditForCard
                                    credit={movieObj}
                                    key={index}
                                />
                            ))}
                </div>
              </div>
          </div>
       ):(
          <></>
       )
      }
    </div>
  )
}

export default CreditAll