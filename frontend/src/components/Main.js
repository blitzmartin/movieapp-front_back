import MovieTile from './MovieTile'
import React, { useState, useEffect } from 'react'
import '../Filtering.css'

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
    const [searchTitle, setSearchTitle] = useState('')
    const [category, setCategory] = useState('')
    const [sortItem, setSortItem] = useState('')

    function searchHandler() {
        console.log(searchTitle)
        setSearchTitle("");
      }

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
                <>
                    <input
                        className='search'
                        type="text"
                        placeholder="Search movie..."
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />
                    <button className="searchBtn" onClick={searchHandler}>Search</button>
                </>

                <select className='options' onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((item) => <option value={item}>{item}</option>)}
                </select>
                <select className='options' onChange={(e) => setSortItem(e.target.value)}>
                    {sortBy.map((item) => <option value={item}>{item}</option>)}
                </select>
            </div>

            <div className='movieGrid'>
                {movies.map((item) => {
                        return (
                            <MovieTile
                                key={item._id}
                                movie={item}
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

