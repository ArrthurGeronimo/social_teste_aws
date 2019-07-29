import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Logo from './../../assets/logo.png';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar : {
      backgroundColor: "#C01C10",
      '& img' : {
        width: "80px",
        height: "auto",
      },
      '& a': {
        display: "block",
        margin: "0px auto",
      }
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
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
          <Link to={`/`}>
            <img src={Logo} alt="Logo" />
          </Link>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <Container maxWidth="lg">
            <Typography variant="h3" component="h3" gutterBottom>
              Novo
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
              </Grid>
              <Grid item xs={6}>
                  <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={6}>
                  <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
              </Grid>
          </Container>
        </div>
    </div>
  );
}
