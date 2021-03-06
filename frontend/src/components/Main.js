import MovieTile from './MovieTile'
import React, { useState, useEffect } from 'react'
import '../Filtering.css'

export default function Main() {

    const categories = [
        "Category",
        "Drama",
        "Horror",
        "Animation",
        "Comedy",
        "Adventure"
    ];

 
    const [movies, setMovies] = useState([]);
    const [searchTitle, setSearchTitle] = useState('')
    const [category, setCategory] = useState('')
    const [allMovies, setAllMovies] = useState(movies)
    const [btnValue, setBtnValue] = useState("Search")

    function searchHandler() {

            if (searchTitle !== "") {
                const searchMovie = allMovies.filter((item) => item.title.toUpperCase() === searchTitle.toUpperCase());
                setMovies(searchMovie);
                setBtnValue("Reset");
            } else {
                setMovies(allMovies);
                setBtnValue("Search");
            }
      //  console.log(searchTitle)
        setSearchTitle("");
    }

    useEffect(() => {
        getAllMovies();
    }, [])

    function getAllMovies() {
        fetch('/movies')
            .then(res => res.json())
            .then(data => {
                setMovies(data);
                setAllMovies(data);
            })
            .catch(err => console.log(err))
        return
    }

    useEffect(() => {
        if (category !== "Category") {
            const filterByCategory = allMovies.filter((item) => item.category === category);
            setMovies(filterByCategory)
        } else {
            setMovies(allMovies);
        }
    }, [category])

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
                    <button className="searchBtn" onClick={searchHandler}>{btnValue}</button>
                </>

                <select className='options' onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((item) => <option value={item}>{item}</option>)}
                </select>
            </div>

            <div className='movieGrid'>
                {movies.map((item) => {
                    return (
                        <div>
                            <MovieTile
                                key={item._id}
                                movie={item}
                            />
                        </div>
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

