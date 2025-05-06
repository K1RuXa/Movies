import React from "react";
import RateSwitch from "./RateSwitch";

const MovieItem = ({ movie }) => {
    const { title, overview, poster_path, popularity } = movie;
    const posterUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;

    return (
        <div className="movie-item">
            <img src={posterUrl} alt={title} />
            <div className="movie-info">
                <h2>{title}</h2>
                <p>{overview}</p>
                <RateSwitch popularity={popularity} />
            </div>
        </div>
    );
};

export default MovieItem;
