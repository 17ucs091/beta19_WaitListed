import React, { Component } from 'react';
import { Paper, Typography, Avatar, Button, Grid } from '@material-ui/core';
import './TestView.css';
const TestView = () => {
  return (
    <div className="backgroundView">
      <Grid
        container
        style={{
          padding: '2%'
        }}
      >
        <Grid item sm style={{ marginRight: '2%', width: '60%' }}>
          <Paper style={{ height: '80vh' }}>left Pane</Paper>
        </Grid>
        <Grid item sm>
          <Grid sm>
            <Paper style={{ height: '15vh', marginBottom: '4%' }}>
              right upper
            </Paper>
          </Grid>
          <Grid item sm>
            <Paper style={{ height: '50vh', marginTop: '4%' }}>
              rigth bottom
            </Paper>
          </Grid>
          <Grid item sm>
            <Button>Stop</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TestView;
