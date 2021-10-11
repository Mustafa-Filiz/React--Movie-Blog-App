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
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { createUser } from '../auth/Firebase';

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
    nameContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btn: {
        marginTop: 20,
    },
});

const Register = () => {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const displayName = `${name} ${lastName}`.toUpperCase();
        createUser(email, password, displayName);
        history.push("/")
        // setName('');
        // setLastName('');
        // setEmail('');
        // setPassword('');
    };

    return (
        <Container className={classes.loginPage}>
            <Paper className={classes.loginFormContainer} elevation={10}>
                <Typography variant="h2" mb={4}>
                    Register
                </Typography>
                <form onSubmit={handleFormSubmit}>
                    <Box className={classes.nameContainer}>
                        <TextField
                            type="text"
                            variant="outlined"
                            label="First Name"
                            required
                            margin="dense"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            type="text"
                            variant="outlined"
                            label="Last Name"
                            required
                            margin="dense"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Box>
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
                        Register
                    </Button>
                </form>
                <Typography mt={3} variant="p">
                    Register with
                </Typography>
                <Box>
                    <IconButton size="large">
                        <GoogleIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Paper>
        </Container>
    );
};

export default Register;
