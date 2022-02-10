import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const MovieList = () => {
    const {movies}=useSelector((state)=>state)
  return <div className='movieslist'>

{
    React.Children.toArray(movies.map(el=><MovieCard item={el}/>))
}

  </div>;
};

export default MovieList;
