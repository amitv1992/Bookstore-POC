import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import '../styles/styles.scss';
import SearchBar from './SearchBar';
import fetchBookCategories from '../actions/navigation';
import { fetchBookList, switchOnOrOffMessageComponent } from '../actions/book';
import Navigation from './Navigation';
import ContentContainer from './ContentContainer';

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchBookCategories();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    /**
     * prevent multiple API calls for same book category clicked
     */
    if (
      nextProps.state.bookCategoryName &&
      nextProps.state.bookCategoryName !== this.props.state.bookCategoryName
    ) {
      console.info('Book Api got called...');
      this.props.fetchBookList(nextProps.state.bookCategoryName);
    }
  }

  render() {
    return (
      <div id="main-content-wrapper">
        <div id="panel-wrapper">
          <Navigation />
        </div>
        <div id="content-wrapper">
          <SearchBar />
          <ContentContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.info('STATE INFO FROM APP COMPONENT: ', state);
  return { state: state.appDataReducer };
};

const mapDispatchToProps = {
  fetchBookList,
  fetchBookCategories,
  switchOnOrOffMessageComponent
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
