import {
  Grid,
  Divider,
  Typography,
  Paper,
  TextField,
  Button,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { sendquery } from '../../actions/queries';
const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  subject: '',
  query: '',
};
const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(sendquery(formData));

    console.log('CLEAR');
    setFormData({ ...initialState });
    console.log(initialState);
  };
  const clear = () => {
    console.log('CLEAR');
    setFormData(initialState);
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" align="center">
        Enter the Details
      </Typography>
      <Divider />
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              required
              name="firstName"
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <TextField
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              required
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <TextField
              name="phone"
              label="Phone"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              required
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              name="subject"
              onChange={handleChange}
            />
            <TextField
              name="query"
              placeholder="Enter Your Query"
              multiline
              rows={8}
              fullWidth
              variant="outlined"
              style={{ lineHeight: '1.14em' }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} direction="row" justify="center">
          <Grid item xs={8} md={6}>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Submit
            </Button>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={clear}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};
export default Form;
