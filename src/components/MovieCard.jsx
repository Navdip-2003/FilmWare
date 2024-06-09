import React, { useState } from "react";
import useNavigation from "../hooks/useNavigation";
import { showSuccessToast } from "../utils/toastUtils";


const MovieCard = ({ movieObj ,  index }) => {
  const { goToMovieDetails } = useNavigation();
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  }

  const { poster_path, title, id, release_date, vote_average } = movieObj;
  // const navigate = new useNavigate();
  // const handleCardClick = (id) => {
  //   navigate(`/movie/${id}`);
  // };

  const [saved  , saveClick] = useState(false)
  function handleSavedClick(e){
    e.stopPropagation();  
    console.log('Watch List Will be clicked')  
    saveClick( saved ? false : true)
    console.log(saved)
    showSuccessToast('Watchlist added successfully')
    
  }
  

  return (
    <div className="flex-col h-[50vh] m-4 my-4 w-[200px] hover:scale-105 duration-300 ">
      <div
        onClick={() => goToMovieDetails(id)}
        className=" relative  h-[40vh]  bg-cover bg-center rounded-xl "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
        }}> 
        
         <div onClick={(e)=> { handleSavedClick(e) }} className=" absolute m-1 flex right-0 h-11 w-10 , justify-center items-center rounded-lg bg-gray-900/30 " style={{fontSize : '1.5em'}}> 
          { !saved ? <i className="fa-regular fa-bookmark"></i> : <i className="fa-solid fa-bookmark"></i>}
         
         
         </div>
      </div>

      <p className="truncate bottom-0 left-0 right-0 pl-1 pt-2 text-white text-xs">
        {formatDate(release_date)}
      </p>
      <p className=" font-bold bottom-0 left-0 right-0 pl-1 text-white  rounded-b-xl">
        {title}
      </p>
      <div className="flex  h-[20px] items-center">
        <i className="fa-solid fa-star" style={{ color: '#FFD43B', fontSize: '1em' }}></i>
        <p className="pl-1 text-sm text-white">
          {Number(vote_average).toFixed(1)}
        </p>
      </div>


    </div>

  );
};


export default MovieCard;
