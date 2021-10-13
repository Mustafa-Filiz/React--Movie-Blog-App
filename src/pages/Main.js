import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import MovieCard from '../components/MovieCard';
import { SearchContext } from '../contexts/SearchContext';

const Main = () => {
    const { movies } = useContext(SearchContext);

    return (
        <Grid
            container
            columnSpacing={4}
            rowSpacing={3}
            sx={{ margin: 0, justifyContent: 'center', maxWidth: '100%' }}
        >
            {movies?.map((movie) => {
                return (
                    <Grid item key={movie.id} >
                        <MovieCard movie={movie} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default Main;
