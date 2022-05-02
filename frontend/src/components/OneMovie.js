export default function OneMovie({movie}) {
    return(
        <div>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt='movie-poster' />
            <p>({movie.year})</p>
            <p><em>{movie.category}</em></p>
            <p>{movie.rating}</p>
            <p>{movie.plot}</p>
        </div>
    )    
}