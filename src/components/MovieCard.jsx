import React from 'react';
import { useDispatch } from 'react-redux';
import { del } from '../redux/action';
import EditMovie from './EditMovie';
import StarRating from './StarRating';

const MovieCard = ({item}) => {
    const dispatch=useDispatch()
  return <div className="card1a">

<h1>{item.name}</h1>
<img src={item.image} alt="" className="ima"/>
<StarRating rating={item.rating}/>
<h2>{item.date}</h2>
<button onClick={()=>dispatch(del(item.id ))} className='button-12'>delete</button>
<EditMovie update={item}/>
  </div>;
};

export default MovieCard;
