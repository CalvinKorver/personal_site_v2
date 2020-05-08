import { AppBar, Toolbar, Typography, Button, IconButton, Link as MatLink } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import Link from "next/link";

const useStyles = makeStyles({
    marginTop: {
        height: '40px',
        marginTop: '50px'
    },
    marginRight: {
        marginRight: '32px'
    },
    left: {
        float: 'left'
    },
    right: {
        float: 'right'
    },
    link: {
        color: 'black',
        '&:hover':
            {color: 'blue', cursor: 'pointer'}
    }
})

const Menu = () => {
    const classes = useStyles();
    return (
        <div className={classes.marginTop}>
                <Typography className={classes.left} variant="h4" >
                    CK
                </Typography>
                <Link href='/Contact'>
            <MatLink className={classes.link}>
                <Typography className={classes.right + " "} variant="h4" >
                    Contact
            </Typography>
                </MatLink>
                </Link>
            <Typography className={classes.right + " " + classes.marginRight} variant="h4" >
                Resume
            </Typography>
        </div>
    )
}

export default Menu