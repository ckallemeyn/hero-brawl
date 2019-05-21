import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    height: '30em',
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    width: '20em',
    marginTop: theme.spacing.unit * 3,
    marginLeft: '38%',
    overflowX: 'auto',
    marginBottom: theme.spacing.unit * 3
  },
  margin: {
    width:'92%',
    marginTop: theme.spacing.unit * 3,
    marginLeft: '12px',
  },
  button: {
    marginLeft: '15em',
    margin: theme.spacing.unit * 3,
  }
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
});

function SignInForm(props) {
  const { classes, fetchData, signInUser } = props;

  return (
    <div className={classes.root}>
    <Paper className={classes.paper}>
      <FormControl className={classes.margin}>
        <MuiThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            name="username"
            label="username"
            id="signInUsername"
            required={true}
            onChange={fetchData}
          />
        </MuiThemeProvider>
        <MuiThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            name="password"
            label="password"
            id="signInPassword"
            required={true}
            type="password"
            onChange={fetchData}
          />
        </MuiThemeProvider>
      </FormControl>
      <Button
          className={classes.button}
          variant="contained"
          type="submit"
          color="secondary"
          onClick={signInUser}> Submit </Button>
    </Paper>
    </div>
  );
}

SignInForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignInForm);