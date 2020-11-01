import React, { Component } from 'react';
import { Paper, Button, Box, Grid, Typography } from '@material-ui/core';
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

const TestView = ({ violations, setViolations,testViewState}) => {
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
              background: 'rgb(240,240,250)'
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
              <Voice
                violations={violations}
                logSpeechViolations={setViolations}
              />
            </div>
          </Grid>
          <Grid item xs>
            <Paper
              style={{
                height: '50vh',
                background: `rgb(${'0,0,0'})`,
                padding: '2vh'
              }}
            >
              <Typography
                style={{ color: 'green', padding: '5px' }}
                variant="h4"
              >
                Logs
              </Typography>
              <div
                style={{
                  overflow: 'auto',
                  marginTop: '2px',
                  height: '90%'
                }}
              >
                {violations.map((violation, index) => (
                  <Typography align="Left" key={index} className="violations">
                    {'>'} {violation}
                  </Typography>
                ))}
              </div>
            </Paper>
          </Grid>
          <Grid item xs>
            <div
              className="stopButton"
              style={{
                height: '10vh',
                padding: '4vh'
              }}
            >
              <div>
                <Grid container xs>
                  <Grid item xs>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mt={0.5}
                    >
                      <FullScreen fontSize="large" onClick={goFullScreen} />
                    </Box>
                  </Grid>
                  <Grid item xs>
                    <Button variant="outlined" size="large" color="primary" onClick={()=>{testViewState(false);setViolations([]);}}>
                      FINISH
                    </Button>
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
