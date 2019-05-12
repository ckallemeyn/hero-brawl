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

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginBottom: theme.spacing.unit
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
});

function LoginForm(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <Paper>
      <FormControl className={classes.margin}>
        <MuiThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label="first name"
            id="firstName"
            required={true}
            />
        </MuiThemeProvider>
        <MuiThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label="last name"
            id="lastName"
            required={true}
            />
        </MuiThemeProvider>
        <MuiThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label="username"
            id="username"
            required={true}
            />
        </MuiThemeProvider>
        <MuiThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label="password"
            id="password"
            required={true}
            type="password"
            />
        </MuiThemeProvider>
      </FormControl>
    </Paper>
    </div>
  );
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);