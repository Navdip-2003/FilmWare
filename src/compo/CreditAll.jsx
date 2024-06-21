import React from 'react'
import { useLocation } from 'react-router-dom';

function CreditAll() {
  const location = useLocation();
  const { credits } = location.state || []; // Default to an empty array if state is undefined

  return (
    <div className='flex justify-center'>
      {
        credits ? (
          
          <div className='max-w-screen-xl  bg-red-900 w-full h-full m-3'>
            <div className='font-bold	text-2xl	'>Credits</div>
            <div className='my-4 '>
              <h2 >Cast by Department</h2>
              <div className=''>
                <div className='w-[15vw] h-[22vh] min-w-[100px] min-h-[150px]  bg-blue-900'>

                </div>
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