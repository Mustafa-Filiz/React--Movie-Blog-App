import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const FEATURED_URL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c5fd6eb749e7402b687b8c200a3472c7';

const SEARCH_URL =
    'https://api.themoviedb.org/3/search/movie?api_key=c5fd6eb749e7402b687b8c200a3472c7&query=';

export const SearchContext = createContext();

function SearchContextProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { currentUser } = useContext(AuthContext);

    const getMovies = (api) => {
        axios.get(api).then((res) => setMovies(res.data.results));
    };

    useEffect(() => {
        getMovies(FEATURED_URL);
    }, []);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchTerm ) {
            getMovies(SEARCH_URL + searchTerm);
            setSearchTerm('');
        } else {
            alert('Please login to search a movie.');
        }
    };

    return (
        <SearchContext.Provider
            value={{
                movies,
                searchTerm,
                handleChange,
                handleSearch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;
