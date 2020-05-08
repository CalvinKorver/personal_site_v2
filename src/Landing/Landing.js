import { Grid, Typography, makeStyles, Hidden } from "@material-ui/core"
import Menu from './Menu'
const useStyles = makeStyles({
    main: {
        height: '75vh',
        position: 'relative'
    },
    bottomSpanLeft: {
        maxWidth: '75%',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    bottomSpanRight: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    name: {
        left: '-46px'
    },
    left: {
        float: 'left'
    },
    right: {
        float: 'right'
    }
})

const Landing = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item sm={1}></Grid>
            <Grid item xs={12} sm={10}>
                <Menu />
                <div className={classes.main}>
                    <Hidden mdUp>
                    <span className={classes.bottomSpanLeft}>
                            <Typography className={classes.bottomText + ' ' + classes.left + ' ' + classes.name} align='left' variant="h1" >
                                Calvin Korver
                    </Typography>
                        </span>
                    </Hidden>
                   
                    <Hidden smDown>
                        <span className={classes.bottomSpanLeft}>
                            <Typography className={classes.bottomText + ' ' + classes.left + ' ' + classes.name} align='left' variant="h1" >
                                Calvin Korver
                    </Typography>
                        </span>
                        <span className={classes.bottomSpanRight}>
                            <Typography className={classes.bottomText + ' ' + classes.right} variant="h2" align='right'>
                                Builder<br />Engineer<br />Creator
                    </Typography>
                        </span>
                    </Hidden>

                </div>
            </Grid>
            <Grid item sm={1}></Grid>
        </Grid>
    )
}

export default Landing