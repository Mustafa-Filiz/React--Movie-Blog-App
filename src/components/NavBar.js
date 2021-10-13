import React, { useContext, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { SearchContext } from '../contexts/SearchContext';
import { AuthContext } from '../contexts/AuthContext';
import { logOut } from '../auth/Firebase';

const Search = styled('form')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function NavBar() {
    const { searchTerm, handleChange, handleSearch } =
        useContext(SearchContext);

    const { currentUser } = useContext(AuthContext);

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                {currentUser ? (
                    <Button color="inherit">{currentUser.displayName}</Button>
                ) : (
                    <Link
                        style={{ color: 'black', textDecoration: 'none' }}
                        to="/login"
                    >
                        <Button color="inherit">Login</Button>
                    </Link>
                )}
            </MenuItem>
            <MenuItem>
                {currentUser ? (
                    <Link
                        style={{ color: 'black', textDecoration: 'none' }}
                        to="/"
                    >
                        <Button color="inherit" onClick={() => logOut()}>
                            Logout
                        </Button>
                    </Link>
                ) : (
                    <Link
                        style={{ color: 'black', textDecoration: 'none' }}
                        to="/register"
                    >
                        <Button color="inherit">Register</Button>
                    </Link>
                )}
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link
                        style={{ color: 'white', textDecoration: 'none' }}
                        to="/"
                    >
                        <img
                            src="https://fontmeme.com/permalink/211013/29e004cce047d4762da3555b4558a334.png"
                            alt="logo"
                        />
                    </Link>

                    <Search onSubmit={handleSearch}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            onChange={handleChange}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchTerm}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {currentUser ? (
                            <Button color="inherit">
                                {currentUser.displayName}
                            </Button>
                        ) : (
                            <Link
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                to="/login"
                            >
                                <Button color="inherit">Login</Button>
                            </Link>
                        )}
                        {currentUser ? (
                            <Link
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                to="/"
                            >
                                <Button
                                    color="inherit"
                                    onClick={() => logOut()}
                                >
                                    Logout
                                </Button>
                            </Link>
                        ) : (
                            <Link
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                to="/register"
                            >
                                <Button color="inherit">Register</Button>
                            </Link>
                        )}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}
