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
	nameContainer:{
		display: 'flex',
		justifyContent : "space-between",
		alignItems: "center"
	},
    btn: {
        marginTop: 20,
    },
});

const Register = () => {
    const classes = useStyles();

    return (
        <Container className={classes.loginPage}>
            <Paper className={classes.loginFormContainer} elevation={10}>
                <Typography variant="h2" mb={4}>
                    Register
                </Typography>
                <form>
                    <Box className={classes.nameContainer}>
                        <TextField
                            type="text"
                            variant="outlined"
                            label="First Name"
                            required
                            margin="dense"
                            
                        />
                        <TextField
                            type="text"
                            variant="outlined"
                            label="Last Name"
                            required
                            margin="dense"
                            
                        />
                    </Box>
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
                    <IconButton size="large">
                        <GitHubIcon fontSize="large" />
                    </IconButton>
                    <IconButton size="large">
                        <FacebookIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Paper>
        </Container>
    );
};

export default Register;
