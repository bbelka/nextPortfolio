import Link from 'next/Link';
import { Container, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        flexGrow: 1,
        margin: "0 auto",
        display: "flex",
    },
    container: {
        height: "100vh",
        justifyContent: "center",
        alignContent: "center"

    },
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.primary,
    }

}));

function HomePage() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <div className={classes.root}>
                <Grid container className={classes.container} >
                    <Grid item xs={8}>
                        <Paper className={classes.paper} elevation={7}>
                            Brett Belka. Full-stack developer
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default HomePage;