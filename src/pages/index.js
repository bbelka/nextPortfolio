import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import IntroGrid from '../components/IntroGrid';
import IntroImage from '../components/IntroImage';

const useStyles = makeStyles((theme) => ({

    container: {
        backgroundColor: "salmon",
        justifyContent: "center"
    }
}));

function HomePage() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <div >
                <Grid container className={classes.container} >
                    <IntroImage />
                    <IntroGrid />
                </Grid>
            </div>
        </>
    )
}

export default HomePage;