import React, { Component } from 'react';
import { Paper, Button, Box, Grid } from '@material-ui/core';
import './TestView.css';
import Camera from '../Camera';
import Voice from '../Voice';
import StopIcon from '@material-ui/icons/Stop';
import FullScreen from '@material-ui/icons/AspectRatio';

const goFullScreen = () => {
  const element = document.body;
  var requestMethod =
    element.requestFullScreen ||
    element.webkitRequestFullScreen ||
    element.mozRequestFullScreen ||
    element.msRequestFullScreen;
  requestMethod.call(element);
};

const TestView = ({ violations }) => {
  return (
    <div className="backgroundView">
      <Grid
        container
        className="center"
        direction="row"
        spacing={3}
        alignItems="center"
        style={{ padding: '2%', height: '100vh' }}
      >
        <Grid item xs={7}>
          <div
            style={{
              height: '60vh',
              background: `rgb(${'240,240,250'})`
            }}
          >
            <Camera />
          </div>
        </Grid>
        <Grid item xs>
          <Grid xs>
            <div
              style={{
                height: '12vh',
                marginBottom: '4%'
              }}
            >
              <Voice />
            </div>
          </Grid>
          <Grid item xs>
            <Paper
              style={{
                height: '50vh',
                marginTop: '4%',
                background: `rgb(${'240,240,250'})`
              }}
            >
              <ul>
                {violations.map((violation, index) => (
                  <li key={index}>{violation}</li>
                ))}
              </ul>
            </Paper>
          </Grid>
          <Grid item xs>
            <div
              className="stopButton"
              style={{
                height: '10vh',
                padding: '10vh'
              }}
            >
              <div style={{ border: 'black', margin: '2px' }}>
                <Grid container xs>
                  <Grid item xs>
                    <Box border={1} borderColor="primary.main">
                      <StopIcon fontSize="large" />
                    </Box>
                  </Grid>
                  <Grid item xs>
                    <FullScreen fontSize="large" onClick={goFullScreen} />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TestView;
