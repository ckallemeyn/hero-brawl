import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  card: {
    width: '25em',
    height: '25em',
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    marginLeft: '50%',
    width: 60,
    height: 60,
  }
}

function HeroCard(props) {
  const { classes, name, img } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Avatar src={img} className={classes.bigAvatar} />
        <Typography align='center' variant='h5' gutterBottom >
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(HeroCard)