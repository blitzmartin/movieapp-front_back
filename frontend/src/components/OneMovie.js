import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const posterBg = {
    backgroundColor: '#282C34',
    width: '70%'
}


export default function OneMovie() {

    let params = useParams();

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
        <div className='oneMovieTile'>
                <h3>{movies.title}</h3>
                <img style={posterBg} src={movies.poster} alt='movie-poster' />
                <p>({movies.year})</p>
                <p><em>{movies.category}</em></p>
                <p>Rating: {movies.rating}</p>
                <p>{movies.plot}</p>
        </div>
    )
}