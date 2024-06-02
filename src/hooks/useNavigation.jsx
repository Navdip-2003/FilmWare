// src/hooks/useNavigation.js
import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate('/');
  const goToWatchlist = () => navigate('/watchlist');
  const goToMovieDetails = (id) => navigate(`/movie/${id}`);

  return {
    goToHome,
    goToWatchlist,
    goToMovieDetails,
  };
};

export default useNavigation;
