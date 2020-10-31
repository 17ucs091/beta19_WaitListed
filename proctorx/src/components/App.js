import React, { useEffect } from 'react';
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

  useEffect(() => {
    // Prevent Ctrl+S, Ctrl+C & Ctrl+V
    document.onkeydown = function (e) {
      e = e || window.event; //Get event
      if (e.ctrlKey) {
        var c = e.which || e.keyCode; //Get key code
        if ([83, 67, 86].includes(c)) {
          console.log('Ctrl + S, Ctrl+C, Ctrl+V not allowed');
          e.preventDefault();
          e.stopPropagation();
        }
      }
    };

    // detect tab switching
    document.addEventListener('visibilitychange', (event) => {
      if (document.visibilityState === 'visible') {
        console.log('tab is active');
      } else {
        console.log('tab is inactive');
      }
    });
  });

  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper className={classes.fullview}>xs = 6</Paper>
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
