import fetchMovies from "../../api/Movie/fetchMovies";
import { useState, useEffect } from 'react'
import Movie from "./Movie";

export default function MovieList(props) {
    const { currentAccount, currentProfile } = props;
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = () => {
            fetchMovies()
                .then((response) => {
                    setMovies(response);
                })
                .catch(error => console.error(`Error: ${error}`));
        }
        getMovies();
    });

    return (
        <div>
            {movies.map((movie) => {
                return (
                    <div key={movie.movie_id}>
                        <Movie movie={movie} currentAccount={currentAccount} currentProfile={currentProfile} />
                    </div>
                )
            })}
        </div>
    )
}
