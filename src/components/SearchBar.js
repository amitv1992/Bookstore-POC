import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Notifications from '@material-ui/icons/Notifications';
import modifySearchQuery from '../actions/search-bar';

const userName = 'Amit Varshney';
const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto'
    }
  },
  searchIcon: {
    color: '#9B9B9B',
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: '#9B9B9B',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 500,
      '&:focus': {
        width: 500
      }
    }
  },
  avatar: {
    margin: 10
  }
});

function updateSearchQuery(props, e) {
  if (e.key === 'Enter') {
    const sanitizeUserInput = e.target.value.trim().toLowerCase();
    if (sanitizeUserInput) {
      props.modifySearchQuery(sanitizeUserInput);
    } else {
      props.modifySearchQuery('');
    }
  }
  if (e.target.value === '') {
    props.modifySearchQuery('');
  }
}

function SearchBar(props) {
  const { classes } = props;
  return (
    <div id="search-bar-container" className={classes.root}>
      <AppBar position="static" className="bar">
        <Toolbar className="inner-bar">
          <div className={`bar-container ${classes.search}`}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              onKeyDown={ref => updateSearchQuery(props, ref)}
              onChange={ref => updateSearchQuery(props, ref)}
            />
          </div>
          <IconButton aria-label="share" className="notification-icon">
            <Notifications />
          </IconButton>
          <Typography className={`user-name ${classes.title}`} variant="h7" color="inherit" noWrap>
            {userName}
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
            className={classes.avatar}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.info('STATE INFO FROM SEARCH BAR : ', state);
  return { state };
};
const mapDispatchToProps = {
  modifySearchQuery
};
const styledComponent = withStyles(styles)(SearchBar);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledComponent);
