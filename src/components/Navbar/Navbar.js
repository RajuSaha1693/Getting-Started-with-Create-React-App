import React from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';
import useStyles from './styles';
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ backgroundColor: '#ea4f7a' }}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Query Us?
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
