import { Card, CardHeader, CardMedia } from '@mui/material';
import React, { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { makeStyles } from '@mui/styles';


const IMG_URL = "https://image.tmdb.org/t/p/w1280"

const useStyles = makeStyles({
    cardComp : {
        height : 410,
        width : 250,
        backgroundColor : "primary"
    },
})

const MovieCard = ({ movie }) => {
    // const { movies } = useContext(SearchContext);
    // console.log(movie);

    const classes = useStyles();

    return (
        <Card className={classes.cardComp}>
            <CardMedia
                component="img"
                alt={movie.title}
                height="350"
                image={IMG_URL + movie.poster_path}
            />
            <CardHeader title={movie.title} titleTypographyProps={{fontSize : 16, fontWeight: 600}} />
        </Card>
    );
};

export default MovieCard;
