import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({notify}) {

    const [movies, setmovies] = useState([])
    const [pageno, setpageno] = useState(1)


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=909a8f617091d3842877f29b824c4b66&page=${pageno}`).then(function (res) {
            setmovies(res.data.results)
        })
    }, [pageno])

    const nextPage = () =>{
        setpageno((prepage)=> prepage + 1)
    }
    const PrevoiusPage = () =>{
        if(pageno === 1){
            setpageno(1)
        }else{
            setpageno((prepage)=> prepage - 1)
        }
    }

    return (
        <div className='p-5'>
            <div className='text-2xl font-bold m-5 text-center w-full text-white'>
                Trending Movies
            </div>
            <div className='flex flex-wrap justify-around'>
                {movies.map((movieObj , index) => {
                    return <MovieCard
                                movieObj = {movieObj}
                                index = {index}
                                key={index}
                            />
                })}
            </div>

             <Pagination PageNo={pageno} PrevoiusPage={PrevoiusPage} nextPage={nextPage}/>

        </div>
    )
}

export default Movies
