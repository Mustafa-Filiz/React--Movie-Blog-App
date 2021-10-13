import GoogleIcon from '@mui/icons-material/Google';
import {
    Button,
    Container,
    IconButton,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { googleProvider, logIn } from '../auth/Firebase';

const useStyles = makeStyles({
    loginPage: {
        margin: 0,
        padding: '50px 100px',
        backgroundImage: 'url(https://picsum.photos/1600/900)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxWidth: '100%',
        height: '91vh',
        display: 'flex',
        justifyContent: 'center',
    },
    loginFormContainer: {
        width: 450,
        padding: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    btn: {
        marginTop: 20,
    },
});

const Login = () => {
    const classes = useStyles();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        logIn(email, password);
        history.push('/');
    };

    const handleGoogleLogin = () => {
        googleProvider();
        history.push('/');
    };

    return (
        <Container className={classes.loginPage}>
            <Paper className={classes.loginFormContainer} elevation={10}>
                <Typography variant="h2" mb={8}>
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        type="email"
                        variant="outlined"
                        label="E-mail"
                        required
                        margin="dense"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        type="password"
                        variant="outlined"
                        label="Password"
                        required
                        margin="dense"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        className={classes.btn}
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                    >
                        Login
                    </Button>
                </form>
                <Typography mt={3} variant="p">
                    Login with
                </Typography>
                <Box>
                    <IconButton size="large" onClick={handleGoogleLogin}>
                        <GoogleIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;
