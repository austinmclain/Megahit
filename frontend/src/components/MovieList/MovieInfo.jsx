import { useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchMovie from "../../api/Movie/fetchMovie";
import { useState } from "react";
import fetchGenres from "../../api/Genre/fetchGenres";

export default function MovieInfo() {
    const { id } = useParams();
    const [movie, setMovie] = useState('');
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const loadMovieInfo = () => {
            fetchMovie(id)
                .then((response) => {
                    setMovie(response);
                })
                .catch(error => console.error(`Error: ${error}`));
        }
        const loadGenres = () => {
            fetchGenres(id)
                .then((response) => {
                    setGenres(response);
                })
                .catch(error => console.error(`Error: ${error}`));
        }
        loadMovieInfo();
        loadGenres();
    });

    const title = movie.movie_title;
    const year = movie.movie_year;
    const runtime = movie.movie_runtime;
    const rating = movie.pg_rating;

    return (
        <div className='movie'>
            <h1>{title}</h1>
            <hr></hr>
            <h3>Genre:
                {genres.map((genre) => {
                    return (
                        <span> {genre}</span>
                    )
                })}
            </h3>
            <h3>Year: {year}</h3>
            <h3>Runtime: {runtime} Minutes</h3>
            <h3>Rating: {rating}</h3>
        </div>
    )
}
