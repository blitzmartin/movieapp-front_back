import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function OneMovie() {

    let params = useParams(); 
    params = JSON.stringify(params);  // {"id": "6256e5d30579e7ee7d6243f5"}
    console.log(params);
    params = JSON.parse(params);  // {id: 6256e5d30579e7ee7d6243f5}
    console.log(params);
    const URL = `/movies/${params.id}`;  // /movies/6256e5d30579e7ee7d6243f5
    console.log(URL);

    const [movies, setMovies] = useState([]); //CURLY BRACES ARE CORRECT??

    function getMovie() {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setMovies(data);
                console.log(data)
            })
            .catch(err => console.log(err))
        return
    }

    useEffect(() => {
        getMovie();
    }, [])


    return (
        <div className='movieTile'>
            <h3>{movies.title}</h3>
            <img style={{width: "30%"}} src={movies.poster} alt='movie-poster' />
            <p>({movies.year})</p>
            <p><em>{movies.category}</em></p>
            <p>{movies.rating}</p>
            <p>{movies.plot}</p>
        </div>
    )
}