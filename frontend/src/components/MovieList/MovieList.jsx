import fetchMovies from "../../api/Movie/fetchMovies";
import { useState, useEffect } from 'react'
import Movie from "./Movie";

export default function MovieList(props) {
    const { currentAccount } = props;
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
                    <Movie movie={movie} />
                )
            })}
        </div>
    )
}
