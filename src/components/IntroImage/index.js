import Image from 'next/Image';
import { Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    topGrid: {
        display: 'flex',
        padding: theme.spacing(2),
        alignContent: 'center',
        justifyContent: 'center',
        color: "red",
        fontWeight: "bold",
        backgroundColor: "white",
        height: "30vh"

    }
}));

function IntroImage() {
    const classes = useStyles();
    return (
        <Hidden xsDown>
            <Grid item xs={4} className={classes.topGrid}>
                <Image
                    src='/images/Brett.jpg'
                    alt='photo of me'
                    objectFit="cover"
                    width="auto"
                    height="auto" />
            </Grid>
        </Hidden>

    )
}
export default IntroImage;