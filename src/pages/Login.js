import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
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
import React from 'react';

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

    return (
        <Container className={classes.loginPage}>
            <Paper className={classes.loginFormContainer} elevation={10}>
                <Typography variant="h2" mb={8}>
                    Login
                </Typography>
                <form>
                    <TextField
                        type="email"
                        variant="outlined"
                        label="E-mail"
                        required
                        margin="dense"
                        fullWidth
                    />
                    <TextField
                        type="password"
                        variant="outlined"
                        label="Password"
                        required
                        margin="dense"
                        fullWidth
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
                <Typography mt={3} variant="p">Login with</Typography>
                <Box>
                    <IconButton size="large">
                        <GoogleIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;
