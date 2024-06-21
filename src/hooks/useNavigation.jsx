// src/hooks/useNavigation.js
import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate('/');
  const goToWatchlist = () => navigate('/watchlist');
  const goToMovieDetails = (id) => navigate(`/movie/${id}`);
  const goToProfile = (id) => navigate(`/profile/${id}`);
  const goToCreditAll = (id ,array) => navigate(`/movie/${id}/creditall` , {state : { credits : array }});

  return {
    goToHome,
    goToWatchlist,
    goToMovieDetails,
    goToProfile,
    goToCreditAll
  };
};

export default useNavigation;
