import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './Pagination';

function Movies({ notify }) {
    const [movies, setMovies] = useState([]);
    const [pageno, setPageNo] = useState(1);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=909a8f617091d3842877f29b824c4b66&page=${pageno}`)
            .then(function (res) {
                setMovies(res.data.results);
            })
            .catch(error => {
                console.error("Error fetching Movies data: ", error);
            });
    }, [pageno]);

    const nextPage = () => {
        setPageNo(prevPage => prevPage + 1);
    };

    const previousPage = () => {
        if (pageno === 1) {
            setPageNo(1);
        } else {
            setPageNo(prevPage => prevPage - 1);
        }
    };

    return (
        <div className='p-5 w-full'>
            <div className='text-2xl font-bold m-5 text-center w-full text-white'>
                Trending Movies
            </div>
            <div className='flex justify-center'>
                <div className='max-w-screen-2xl	'>
                    <div className='flex flex-wrap justify-center'>
                        {movies.map((movieObj, index) => (
                            <MovieCard
                                movieObj={movieObj}
                                index={index}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Pagination PageNo={pageno} PrevoiusPage={previousPage} nextPage={nextPage} />
        </div>
    );
}

export default Movies;
