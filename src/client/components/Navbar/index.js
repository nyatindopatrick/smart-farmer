import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
 
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className="farmNav" color='inherit' position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <span className="smart">SMART</span> <span className="farmer">FARMER</span>
          </Typography>
          <Link to='/'>
            <Button color='inherit'>Home</Button>
          </Link>          <Link to='/about'>
            <Button color='inherit'>About</Button>
          </Link>          <Link to='/services'>
            <Button color='inherit'>Services</Button>
          </Link>          <Link to='/events'>
            <Button color='inherit'>Events</Button>
          </Link>
          <Link to='/youthcorner'>
            <Button color='inherit'>Youth Corner</Button>
          </Link>
          <Link to='/register'>
            <Button color='inherit'>Register</Button>
          </Link>
          <Link to='/login'>
            <Button color='inherit'>Login</Button>
          </Link>
          <Link to='/contact'>
            <Button color='inherit'>Contact Us</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
