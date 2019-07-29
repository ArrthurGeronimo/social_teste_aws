import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
      display: "block",
      margin: "0px auto",
    },
    cardHeader: {
        backgroundColor: "#000000",
        color: "#fff",
    },
    cardHeaderSpan: {
        color: "#fff",
        opacity: "0.5",
    },
    cardHeaderIconButton:{
        backgroundColor: "#fff",
        "&:hover, &:focus": {
            backgroundColor: "#fff",
            opacity: "0.5",
        }
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton hover className={classes.cardHeaderIconButton} aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader={
            <span className={classes.cardHeaderSpan}>September 14, 2016</span>
        }
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
    </Card>
  );
}
