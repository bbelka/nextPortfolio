import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    introTextGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    introText: {
        textAlign: "center"
    }

}));

function IntroGrid() {
    const classes = useStyles();
    return (
        <Grid item xs={8} sm={8} className={classes.introTextGrid}>
            <Grid container>
                <Grid item xs={12} sm={12} md={3} className={classes.introText}>
                    <h1>Brett Belka</h1>
                </Grid>
                <Grid item xs={12} sm={12} md={9} className={classes.introText}>
                    <p>
                        Full-stack developer, lifelong learner and seeker of new skills, armed with a logic-heavy Philosophy degree and working knowledge of law, who is aiming to utilize their web-development, analytical, and interpersonal communications skills to be the motivated self-starter and problem solver that you seek in a Jr. Developer.
                            </p>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default IntroGrid;