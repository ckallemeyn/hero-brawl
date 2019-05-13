import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const styles = (theme) => ({
  root: {
    margin: theme.spacing.unit,
    height: '40em',
  },
  input: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class Battle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stats: [],
      heroSearch: '',
      Hero1: '',
      Hero2: ''
    }
  }

  // Func to get average PowerStat score from each hero

  // Func to randomize that powerstat to make the fight more random and less predictable


  // ***** CHANGE ONSUBMIT Func *****
  render() {
    const { heroSearch } = this.state;
    const { classes, fetchData } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <FormControl onSubmit={null}>
            <TextField
              id="outlined-with-placeholder"
              name='battleSearch'
              label="Find Heroes"
              placeholder="find a hero"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={fetchData}
            />
            <Button type="submit">
              <SearchIcon />
            </Button>
          </FormControl>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Battle);




/* Component should take user input
send that hero name to the server
server should make the API call and send back the Hero Data
Component should store that data in an array
Map through the array to create two Character cards or icons to battle
Hit battle button have a function that decides a victor
eventually add some cool animations for the two cards when the battle button is clicked */
