import React from "react";
import useNavigation from "../hooks/useNavigation";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ image, title, id, release_date , rating }) => {
  // const { goToMovieDetails } = useNavigation();
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  }

  const navigate = new useNavigate();
  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="flex-col h-[50vh] m-2 my-4 w-[200px] hover:scale-105 duration-300 ">
      <div
        onClick={() => handleCardClick(id)}
        className=" relative  h-[40vh]  bg-cover bg-center rounded-xl "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${image})`,
        }}
      ></div>

      <p className="truncate bottom-0 left-0 right-0 pl-1 pt-2 text-white text-xs">
        {formatDate(release_date)}
      </p>
      <p className="truncate font-bold bottom-0 left-0 right-0 pl-1 text-white  rounded-b-xl">
        {title}
      </p>
      <div className="flex  h-[20px] items-center">
        <i className="fa-solid fa-star" style={{ color: '#FFD43B', fontSize: '1em' }}></i>
        <p className="pl-1 text-sm text-white">
          {rating.toFixed(1)}
        </p>
      </div>


    </div>

  );
};


export default MovieCard;
