import React from 'react'

function Pagination({ PageNo , PrevoiusPage , nextPage}) {
    
    return (
        <div className='h-[40px] my-3 text-white w-full flex items-center justify-center gap-10'>

                <div onClick={() => PrevoiusPage()}>
                    <i className="fa-solid fa-backward hover:scale-105 duration-80" style={{ fontSize: '1.3em' }} ></i>
                </div>
                <p className='text-white text-xl font-bold'>{PageNo}</p>
                <div onClick={() => nextPage()}><i className="fa-solid fa-forward hover:scale-105 duration-80" style={{ fontSize: '1.3em' }}></i>
                </div>
            </div>
    )
}

export default Pagination
