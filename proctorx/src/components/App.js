import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Voice from './Voice';

const useStyles = makeStyles((theme) => ({
  fullview: {
    height: '100vh'
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper className={classes.fullview}>xs=6</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.fullview}>
          <Voice />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
