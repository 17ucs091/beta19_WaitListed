import React, { Component, useState } from 'react';
import './InitialView.css';
import { Typography, Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9)
  }
}));

const InitialView = () => {
  const classes = useStyles();

  return (
    <div className="Card">
      <div className="upperContainer">
        <div className="profilePicture">
          <Avatar
            src="https://www.persofoto.de/apple-touch-icon-180x180.png"
            className={classes.large}
          />
        </div>
      </div>
      <div className="lowerContainer">
        <Typography variant="subtitle2">WaitListed </Typography>
        <br />
        <Typography variant="body1">Version Beta 3.0</Typography>
      </div>
      <div className="button">
        <Button
          style={{ marginTop: 100 }}
          variant="outlined"
          color="primary"
          component="span"
        >
          Attempt Now
        </Button>
      </div>
    </div>
  );
};

export default InitialView;
