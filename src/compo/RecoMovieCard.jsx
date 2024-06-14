import React from 'react'
import useNavigation from "../hooks/useNavigation";

function RecoMovieCard({ Movie }) {
    const { goToMovieDetails } = useNavigation();
    function formatDate(inputDate) {
      const date = new Date(inputDate);
      const options = { day: '2-digit', month: 'short', year: 'numeric' };
      return date.toLocaleDateString('en-GB', options);
    }
 
    return (
        <div className='flex flex-col' onClick={() => goToMovieDetails(Movie.id)}>
            <div className='md:h-[25vh] w-[200px] bg-cover bg-ceter rounded-xl m-3' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${Movie.poster_path})` }}>
            </div>
            <p className="truncate bottom-0 left-0 right-0 pl-1 pt-2 text-white text-xs">
                {formatDate(Movie.release_date)}
            </p>
            <p className=" font-bold bottom-0  right-0 pl-1 text-white  rounded-b-xl">
                {Movie.title}
            </p>
            <div className="flex  h-[20px] items-center">
                <i className="fa-solid fa-star" style={{ color: '#FFD43B', fontSize: '1em' }}></i>
                <p className="pl-1 text-sm text-white">
                    {Number(Movie.vote_average).toFixed(1)}
                </p>
            </div>
            <span className='md:h-[2vh]'></span>
        </div>
    )
}

export default RecoMovieCard