import Buttons from './Buttons'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


const posterBg = {
    padding: '0.7rem',
    backgroundColor: '#282C34'
}


function MovieTile({ movie }) {

    const params = useParams();

    return (
        <div className='movieTile'>
            <h3>{movie.title}</h3>
            <img style={posterBg} src={movie.poster} alt='movie-poster' />
            <Buttons />
            <p>({movie.year})</p>
            <p><em>{movie.category}</em></p>
            <p>{movie.rating}</p>
            <Link
                to={`/${movie._id}`}
            >Read more...</Link>
        </div>
    )
}

export default MovieTile

/* function MovieTile({movie}) {
    return(
        <div>
             <h3>{movie.title}</h3>
             <img src={movie.poster} alt='movie-poster'/>
             <Buttons />
             <p>{movie.year}</p>
             <p>{movie.category}</p>
             <p>{movie.rating}</p>
             <a href="#">Read more...</a>
        </div>         
    )
} */

/* function MovieTile(props) {
    return(
        <div>
             <h3>{props.movie.title}</h3>
             <img src={props.movie.poster} alt='movie-poster'/>
             <Buttons />
             <p>{props.movie.year}</p>
             <p>{props.movie.category}</p>
             <p>{props.movie.rating}</p>
             <a href="#">Read more...</a>
        </div>         
    )
} */
