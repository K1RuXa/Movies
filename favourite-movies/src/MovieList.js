import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movie }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const API_KEY = '377d635b2cd3f91f3dbe5ea58c174b1c';
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            })
            .catch((error) => {
                console.error('Помилка при завантаженні фільмів:', error);
            });
    }, []);

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </div>
    );
};


export default MovieList;
