import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from "react";
import { UserContext } from "../App";

const btnDiv = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#282c34',
    paddingBottom: '0.5rem',
    paddingLeft: '0.2rem',
    marginBottom: '0.5rem'
}

const btn = {
    padding: '0.5rem',
    backgroundColor: 'red',
    color: 'white',
    margin: '0.5rem',
    borderRadius: '5px'
}



const posterBg = {
    padding: '0.7rem',
    backgroundColor: '#282C34'
}


function MovieTile({ movie }) {
    const [btnLogo, setBtnLogo] = useState("fa-regular fa-heart")
    const [value, setValue] = useState(false)
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    function handleClick() {
        if (value === false) {
            setBtnLogo("fa-solid fa-heart")
            console.log(user);
            console.log(movie._id);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: user,
                    movieid: movie._id
                })
            };
            fetch("/user/addfavorite", requestOptions)
                .then(res => {
                    if (res.status === 200) {
                        navigate('/user', { replace: true });
                    }
                });
        } else if (value === true) {
            setBtnLogo("fa-regular fa-heart")
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: user,
                    movieid: movie._id
                })
            };
            fetch("/user/deletefavorite", requestOptions)
                .then(res => {
                    if (res.status === 200) {
                        navigate('/user', { replace: true });
                    }
                });
        }
        setValue(!value)


    }

    return (
        <div className='movieTile'>
            <h3>{movie.title.length > 12
                ? `${(movie.title).substr(0, 12)}...`
                : movie.title
            }
            </h3>
            <img style={posterBg} src={movie.poster} alt='movie-poster' />
            <div style={btnDiv}>
                <button onClick={handleClick} style={btn}><i className={btnLogo}></i></button>
            </div>
            <p>({movie.year})</p>
            <p><em>{movie.category}</em></p>
            <p>{movie.rating}</p>
            <Link
                to={`/movies/${movie._id}`}
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
