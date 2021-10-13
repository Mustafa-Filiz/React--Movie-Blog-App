import {
    Card,
    CardHeader,
    CardMedia,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

const IMG_URL = 'https://image.tmdb.org/t/p/w1280';

const useStyles = makeStyles({
    cardComp: {
        position: 'relative',
        height: 410,
        width: 250,
        backgroundColor: 'primary',
    },
    overview: {
        fontSize: 12,
        position: 'absolute',
        bottom: 60,
        backgroundColor: 'white',
    },
});

const MovieCard = ({ movie }) => {
    const [overview, setOverview] = useState(false);

    const classes = useStyles();

    return (
        <Card
            className={classes.cardComp}
            onMouseOver={() => setOverview(!overview)}
            onMouseOut={() => setOverview(!overview)}
            raised
        >
            <CardMedia
                component="img"
                alt={movie.title}
                height="350"
                image={IMG_URL + movie.poster_path}
            />
            <Typography className={classes.overview} variant="p">
                <Typography variant="h6">{overview && "Overview"}</Typography>
                {overview && movie.overview}
            </Typography>
            <CardHeader
                title={movie.title}
                titleTypographyProps={{ fontSize: 16, fontWeight: 600 }}
            />
        </Card>
    );
};

export default MovieCard;
