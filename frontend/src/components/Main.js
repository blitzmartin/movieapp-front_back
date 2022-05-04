import MovieTile from './MovieTile'
import React, { useState, useEffect } from 'react'
import '../Filtering.css'
import DropdownMenu from './DropdownMenu'
import Searchbar from './Searchbar'
//import movies from './movies'




export default function Main() {

    const categories = [
        "Category",
        "Drama",
        "Romantic",
        "Horror",
        "Animation",
        "Comedy",
        "Adventure"
    ];
    
    const sortBy = [
        "Sort by...",
        "Title",
        "Rating",
        "Year"
    ];

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/movies')
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            })
            .catch(err => console.log(err))
        return
    }, [])

    return (
        <>
         <div className='Filtering'>
            <Searchbar />
            <DropdownMenu options={categories} />
            <DropdownMenu options={sortBy} />
        </div>
        <div className='movieGrid'>
            {movies.map((item) => {
                return (
                    <MovieTile
                        key = {item._id}
                        movie = {item}
                    />
                )
            })}
        </div>
        </>

    )
}



// can use single attributes, attributes are equal to props attributes and item.property should be  equal to object (=item) property
/* function MovieGrid() {
    return (
        <div className='movieGrid'>
            {movies.map((item) => {
                return (
                    <MovieTile
                     movie.name = {item.title}    title is a key in the obj item, while name should be find in props.name 
                    />
                )
            })}
        </div>
    )
} */

