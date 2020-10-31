import React, { Component } from 'react';
import { Paper, Typography, Avatar, Button, Grid } from '@material-ui/core';
import './TestView.css';
import Camera from '../Camera';
import Voice from '../Voice';
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
        spacing={3}
        style={{
          padding: '2%'
        }}
      >
        <Grid item xs={7}>
          <Paper
            style={{ height: '80vh', background: `rgb(${'240,240,250'})` }}
          >
            <Camera />
          </Paper>
        </Grid>
        <Grid item xs>
          <Grid xs>
            <Paper
              style={{
                height: '15vh',
                marginBottom: '4%',
                background: `rgb(${'240,240,250'})`
              }}
            >
              <Voice />
              <FullScreen fontSize="large" onClick={goFullScreen} />
            </Paper>
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
                marginTop: '4%',
                background: `rgb(${'240,240,250'})`
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                style={{ width: '12vh', height: '6vh', fontSize: '3vh' }}
              >
                Stop
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TestView;
