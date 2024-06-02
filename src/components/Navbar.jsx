import React from 'react'
import Homelogo from '../asset/home.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex space-x-6 h-[7vh]  items-center pl-3 py-1 '>
        <div >
        <i className="fa-solid fa-backward hover:scale-105 duration-80" style={{ fontSize: '1.3em' }} ></i>
        </div>
        <Link to='/' className='text-blue-500 text-3xl font-bold' >Home</Link>
        <Link to='/watchlist' className='text-blue-500 text-3xl font-bold'>WatchList</Link>
    </div>
  )
}

export default Navbar


// https://api.themoviedb.org/3/movie/popular?api_key=909a8f617091d3842877f29b824c4b66&page=1