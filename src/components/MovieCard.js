import { Card, CardMedia } from '@mui/material';
import React, { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';


const IMG_API = "https://image.tmdb.org/t/p/w1280"

const MovieCard = ({ movie }) => {
    // const { movies } = useContext(SearchContext);

    console.log(movie);

    return (
        <Card>
            <CardMedia
                component="img"
                alt={movie.title}
                height="140"
                image={IMG_API + movie.poster_path}

            />
        </Card>
    );
};

export default MovieCard;
