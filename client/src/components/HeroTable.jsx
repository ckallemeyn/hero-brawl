import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  avatar: {
    height: 40,
    width: 40
  },
});


function HeroTable(props) {
  const { classes, data } = props;

  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="center">Intelligence</TableCell>
              <TableCell align="center">Strength</TableCell>
              <TableCell align="center">Speed</TableCell>
              <TableCell align="center">Durability</TableCell>
              <TableCell align="center">Power</TableCell>
              <TableCell align="center">Combat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(data.length > 1) ? data.map((hero, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  <Avatar src={hero.image} className={classes.avatar} />
                </TableCell>
                <TableCell>{hero.name}</TableCell>
                <TableCell align="center">{hero.intelligence}</TableCell>
                <TableCell align="center">{hero.strength}</TableCell>
                <TableCell align="center">{hero.speed}</TableCell>
                <TableCell align="center">{hero.durability}</TableCell>
                <TableCell align="center">{hero.power}</TableCell>
                <TableCell align="center">{hero.combat}</TableCell>
              </TableRow>
            )) : null}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

HeroTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroTable);
