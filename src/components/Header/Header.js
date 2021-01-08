import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 2),
        textAlign: "center",
        fontSize: "35px",
        fontFamily: "Permanent Marker",
        color: "green",
        textShadow: "1px 1px green"
    }
}))

export const Header = () => {
    const styles = useStyles();

    return <Typography className={styles.root} component="h1" variant="h4">React form</Typography>
}

export default Header;