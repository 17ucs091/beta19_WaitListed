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
        <Grid item sm style={{ paddingRight: '2%', height: '500px' }}>
          <Paper style={{ height: '80vh' }}>left Pane</Paper>
        </Grid>
        <Grid comtainer sm>
          <Grid sm>
            <Paper style={{ height: '20vh' }}>right upper</Paper>
          </Grid>
          <Grid item sm>
            <Paper style={{ height: '50vh' }}>rigth bottom</Paper>
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
