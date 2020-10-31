import React, { useEffect, useState } from 'react';
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
  const [violations, setViolations] = useState([]);

  useEffect(() => {
    // Prevent Ctrl+S, Ctrl+C & Ctrl+V
    document.onkeydown = function (e) {
      e = e || window.event; //Get event
      if (e.ctrlKey) {
        // TODO: keyCode is deprecated, use something better
        var c = e.which || e.keyCode; //Get key code
        if ([83, 67, 86].includes(c)) {
          e.preventDefault();
          e.stopPropagation();
          setViolations([
            ...violations,
            'Violation : Ctrl + S, Ctrl+C, Ctrl+V not allowed'
          ]);
        }
      }
    };

    // detect tab switching
    document.addEventListener('visibilitychange', (event) => {
      if (document.visibilityState !== 'visible') {
        setViolations([...violations, 'Violation : Tab switching not allowed']);
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
          {/* TODO : there would be logging section here */}
          <ul>
            {violations.map((violation, index) => (
              <li key={index}>{violation}</li>
            ))}
          </ul>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
