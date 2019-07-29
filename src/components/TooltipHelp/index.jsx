import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Help from '@material-ui/icons/Help';

const useStyles = makeStyles(theme => ({
    help:{
      color: "#880000",
      fontSize: "15pt",
      paddingTop: "10pt",
    }
  }));

export default function TransitionsTooltips(props) {
    const classes = useStyles();
    const [values] = React.useState({
      text: props.text,
  });
  return (
      <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={values.text}>
        <Help className={classes.help} />
      </Tooltip>
  );
}
