import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
        flexGrow: 1,
        "& a" : {
            color: "#fff",
            textDecoration: "none",
        }
    },
    appBar : {
        backgroundColor: "#C01C10",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
      title: {
        flexGrow: 1,
    },
    content: {
        background: "#F5E9DA",
        width: "100%",
        height: "-webkit-fill-available",
        display: "grid",
        alignContent: "center",
        textAlign: "center",
        '& h2' : {
            opacity: "0.5",
        }
    }

}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Home Page
          </Typography>
          <Link to={`/login`}>
            <Button color="inherit">Login</Button>
          </Link>
          <Link to={`/register`}>
            <Button color="inherit">Register</Button>
          </Link>     
        </Toolbar>
        </AppBar>
        <div className={classes.content}>
            <Typography variant="h1" component="h2" gutterBottom>
                Site
            </Typography>
        </div>
    </div>
  );
}
