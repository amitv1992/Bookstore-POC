import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListAlt from '@material-ui/icons/ListAlt';
import Layers from '@material-ui/icons/Layers';
import Message from '@material-ui/icons/Message';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { connect } from 'react-redux';
import {
  modifyBookCategoryName,
  updateWrapperTitle,
  switchOnOrOffMessageComponent
} from '../actions/book';

const drawerWidth = 240;

class Navigation extends React.PureComponent {
  useStyles = makeStyles(theme => ({
    root: {
      flex: 2,
      marginTop: '64px',
      backgroundColor: '#fff'
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      borderRight: 0
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    }
  }));

  constructor(props) {
    super(props);
    this.classes = this.useStyles.bind(this);
  }

  renderCategories() {
    return this.props.book_categories.map((category, index) => {
      return (
        <ListItem
          button
          key={index}
          onClick={e => this.props.modifyBookCategoryName(category.list_name_encoded)}
        >
          <ListItemText primary={category.display_name} />
        </ListItem>
      );
    });
  }

  handleOnClick = e => {
    const componentName = e.target.textContent;
    this.props.updateWrapperTitle(componentName);
    this.props.switchOnOrOffMessageComponent(componentName);
  };

  render() {
    return (
      <div className={this.classes.root}>
        <CssBaseline />
        <Drawer
          className={this.classes.drawer}
          variant="permanent"
          classes={{
            paper: `menu-container ${this.classes.drawerPaper}`
          }}
          anchor="left"
        >
          <div className={this.classes.toolbar}>
            <h1 className="store-title" onClick={e => this.handleOnClick(e)}>
              Books
            </h1>
          </div>
          <span className="title">Menu </span>
          <List className="category">
            <ListItem button key="My Books" onClick={e => this.handleOnClick(e)}>
              <ListItemIcon>
                <Layers />
              </ListItemIcon>
              <ListItemText primary="My Books" />
            </ListItem>
            <ListItem button key="Favourite Books" onClick={e => this.handleOnClick(e)}>
              <ListItemIcon>
                <FavoriteBorder />
              </ListItemIcon>
              <ListItemText primary="Favourite Books" />
            </ListItem>
            <ListItem button key="My Categories" onClick={e => this.handleOnClick(e)}>
              <ListItemIcon>
                <ListAlt />
              </ListItemIcon>
              <ListItemText primary="My Categories" />
            </ListItem>
            <ListItem button key="My messages" onClick={e => this.handleOnClick(e)}>
              <ListItemIcon>
                <Message />
              </ListItemIcon>
              <ListItemText primary="My messages" />
            </ListItem>
          </List>
          <div className="book-type-Container book-type-Container-margin">
            <span className="title">Books Types</span>
            <List className="category">{this.renderCategories()}</List>
          </div>
        </Drawer>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.info('STATE INFO FROM Navigation : ', state.appDataReducer.book_categories);

  const bookCategories = state.appDataReducer.book_categories;

  return {
    book_categories: (bookCategories && bookCategories.results) || []
  };
};
const mapDispatchToProps = {
  modifyBookCategoryName,
  updateWrapperTitle,
  switchOnOrOffMessageComponent
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
