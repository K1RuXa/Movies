import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';

const MoviePaginationAPI = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    const fetchMovies = async (page) => {
        try {
            const response = await axios.get(
                'https://api.themoviedb.org/3/movie/popular',
                {
                    params: {
                        api_key: '377d635b2cd3f91f3dbe5ea58c174b1c',
                        language: 'en-US',
                        page: page,
                    },
                }
            );

            if (response.data.results) {
                setMovies(response.data.results);
                setCurrentPage(response.data.page);
                setTotalPages(response.data.total_pages);
            } else {
                console.error('No movies found in response');
            }
        } catch (error) {
            console.error('Ошибка при загрузке фильмов:', error);
        }
    };

    useEffect(() => {
        fetchMovies(currentPage);
    }, [currentPage]);

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <h2>Популярные фильмы - Страница {currentPage}</h2>

            <div className="movie-list">
                {movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>

            <div className="pagination">
                {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => handlePageClick(i + 1)}
                        className={currentPage === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MoviePaginationAPI;