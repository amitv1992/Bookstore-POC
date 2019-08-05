import React, { Component } from 'react';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { connect } from 'react-redux';
import _ from 'underscore';
import BookCard from './BookCard';
import { fetchBookList } from '../actions/book';

class BookContainer extends Component {
  componentDidMount() {
    this.props.fetchBookList('health');
  }

  static renderBooks(fetchedBooks, filteredBooks) {
    if (!fetchedBooks.length && !filteredBooks.length) {
      return (
        <div className="book-card-container">
          <h1 className="loading-message"> Loading... Please wait</h1>
        </div>
      );
    }
    if (filteredBooks.length) {
      return (
        <div className="book-card-container">
          {filteredBooks.map(book => {
            return <BookCard book={book} />;
          })}
        </div>
      );
    }

    return (
      <div className="book-card-container">
        <h1 className="error-message"> Not found any book related with the searched query</h1>
      </div>
    );
  }

  render() {
    const { books, title, query } = this.props;
    const fetchedBooks = books && books.results && books.results.books ? books.results.books : [];

    const matchBooks = fetchedBooks.map(book => {
      if (book.title.toLowerCase().includes(query)) {
        return book;
      }
    });
    const searchFilteredResult = _.without(matchBooks, undefined);
    let resultant = query && searchFilteredResult.length ? searchFilteredResult : [];
    resultant = query ? resultant : fetchedBooks;
    return (
      <>
        <div className="content-container">
          <h2>{title}</h2>
          <button className="all-categories-button">
            <span>All Categories</span>
            <KeyboardArrowDown />
          </button>
        </div>
        {BookContainer.renderBooks(fetchedBooks, resultant)}
      </>
    );
  }
}
const mapStateToProps = state => {
  console.info('STATE INFO FROM Book Container : ', state);
  return {
    books: state.appDataReducer.books || [],
    query: state.appDataReducer.searchQuery
  };
};

const mapDispatchToProps = {
  fetchBookList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookContainer);
