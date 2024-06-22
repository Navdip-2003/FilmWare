import React from 'react'
import useNavigation from '../hooks/useNavigation';

function CreditForCard({credit}) {
    const {goToProfile } = useNavigation();

    return (
        <>
            <div className='w-[22vw] h-[30vh] min-w-[300px] rounded-xl  text-indigo-500  flex items-center gap-3 bg-white'>
                {
                    credit.profile_path ? (
                        <div className='w-[10vw] min-w-[150px] h-full bg-cover bg-center rounded-l-xl  ' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${credit.profile_path})` }}></div>
                    ) : (
                        <div className='w-[10vw] min-w-[150px] h-full flex items-center justify-center'>
                        <i className="fa-solid fa-user text-5xl	" style={{color : '#ffffff'}}></i>
                        </div>
                    )
                }
                

                <div className='flex flex-col justify-center h-full m-2 '>
                    <div onClick={()=>goToProfile(credit.id)} className='text-xl hover:underline '>{credit.name}</div>
                    <div className='text-slate-500 font-medium mb-2 '>{credit.character}</div>
                    <div className=' text-white font-medium'>{credit.known_for_department}</div>
                    <div className='text-slate-500 text-xs'>Gender : {credit.gender == 2 ? "Male" : "Female"}</div>
                    <div className='text-slate-500 text-xs'>Popularity : {credit.popularity}</div>
                </div>
            </div>
        </>
    )
}

export default CreditForCard
