import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function OneMovie() {

    let params = useParams(); //should get the id
    params = JSON.stringify(params);
    console.log(params);
    params = JSON.parse(params);
    console.log(params);
    const URL = `/movies/${params.id}`;
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