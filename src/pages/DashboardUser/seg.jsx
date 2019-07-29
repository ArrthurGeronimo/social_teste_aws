import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },

  }),
);

export default function DashboardUser(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    nome: props.location.state.nome
});

  return (
    <div className={classes.root}>
      <h1>DashboardUser</h1>
      <p>{values.nome}</p>
    </div>
  );
}
