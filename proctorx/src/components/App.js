import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import InitialView from './ExamView/InitialView';
import TestView from './ExamView/TestView';

const useStyles = makeStyles((theme) => ({
  fullview: {
    height: '100vh'
  }
}));

const App = () => {
  const classes = useStyles();
  const [violations, setViolations] = useState([]);
  const [testView, setTestView] = useState(false);

  useEffect(() => {
    // Prevent Ctrl+S, Ctrl+C & Ctrl+V
    document.onkeydown = function (e) {
      e = e || window.event; //Get event
      if (e.ctrlKey) {
        var c = e.code; //Get key code
        if (['KeyS', 'KeyC', 'KeyV'].includes(c)) {
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

    // full screen detection - chrome
    document.addEventListener('webkitfullscreenchange', function () {
      // full screen disabled
      if (!document.fullscreenElement) {
        setViolations([
          ...violations,
          'violation : Exiting Full Screen not allowed'
        ]);
      }
    });
  });

  return (
    <Fragment>
      {!testView ? (
        <InitialView testViewState={setTestView} />
      ) : (
        <div style={{ background: `rgb(${'240,240,250'})` }}>
          <TestView violations={violations} setViolations={setViolations} />
        </div>
      )}
    </Fragment>
  );
};

export default App;
