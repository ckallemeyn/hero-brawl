import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import HeroCard from './HeroCard.jsx';
import Grid from '@material-ui/core/Grid'

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: '34%',
    width: 400,
    alignItems: 'center',
    display: 'flex',
    zIndex: 2,
  },
  input: {
    width: '20em',
  },
  textField: {
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    padding: 10,
  },
  container: {
    flexGrow: 1,
    height: '40em',
    width: '30em,'
  },
  background: {
    MarginTop: theme.spacing.unit * 3,
    height:'50em',
  }

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
    const { classes, fetchData, collectHero,
      battleSearch, battleList } = this.props;
    return (
      <Paper id="battleBackground" className={classes.background}>
        <Paper elevate={4} className={classes.root}>
          <TextField className={classes.textField}
            id="outlined-with-placeholder"
            name='battleSearch'
            label="Find Heroes"
            value={battleSearch}
            placeholder="find a hero"
            margin="normal"
            variant="outlined"
            onChange={fetchData}
            />
          <IconButton className={classes.button}
            type="submit"
            onClick={collectHero}
            >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Grid container justify="center" spacing={16} className={classes.container}>
            {(battleList.length >= 1 ) ? battleList.map((hero, i) => (
              <Grid key={i} item>
                <HeroCard name={hero.name} img={hero.image.url} key={i} />
              </Grid>
            )) : null}
        </Grid>
      </Paper>
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
