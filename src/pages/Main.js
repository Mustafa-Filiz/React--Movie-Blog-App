import { Grid } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import MovieCard from '../components/MovieCard';
import { AuthContext } from '../contexts/AuthContext';
import { SearchContext } from '../contexts/SearchContext';

const Main = () => {
    // const [movies, setMovies] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');
    // const { currentUser } = useContext(AuthContext);
    const { movies } = useContext(SearchContext);

    // const getMovies = (api) => {
    //     axios.get(api).then((res) => setMovies(res.data.results));
    // };

    // useEffect(() => {
    //     getMovies(FEATURED_API);
    // }, []);

    // const handleChange = (e) => {
    //     setSearchTerm(e.target.value);
    // };

    // const handleSearch = (e) => {
    //     e.preventDefault();

    //     if (searchTerm && currentUser) {
    //         getMovies(SEARCH_API + searchTerm);
    //         setSearchTerm('');
    //     } else {
    //         alert('Please login to search a movie.');
    //     }
    // };

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
