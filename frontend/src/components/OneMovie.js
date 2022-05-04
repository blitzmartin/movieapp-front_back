import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function OneMovie() {

    let params = useParams(); //should get the id
    params = JSON.stringify(params);
    params = JSON.parse(params);
    console.log(params);
    // now params is {"id":"6256e5d30579e7ee7d6243ec"}
    console.log(`/movies/${params.id}`); 
    
    const [movie, setMovies] = useState({}); //CURLY BRACES ARE CORRECT??

    useEffect((params) => {
        fetch(`/movies/${params}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data);  //NOT WORKING, BUT GETTING THE RIGHT JSON IN LOCALHOST:5000
            })
            .catch(err => console.log(err))
        return
    }, [])


    return(
        <div className='movieTile'>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt='movie-poster' />
            <p>({movie.year})</p>
            <p><em>{movie.category}</em></p>
            <p>{movie.rating}</p>
            <p>{movie.plot}</p>
        </div>
    )    
}