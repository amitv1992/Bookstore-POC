import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/ShareOutlined';

class BookCard extends React.PureComponent {
  render() {
    const { book } = this.props;
    if (book) {
      return (
        <div className="book-card">
          <img className="book-image" src={book.book_image} alt="book" />
          <div className="book-description-wrapper">
            <div className="book-description">
              <h2 className="book-title">{book.title}</h2>
              <p className="book-synopsis">{book.description}</p>
            </div>
            <div className="book-actions">
              <button
                className="read-more-button"
                onClick={() => window.open(`${book.amazon_product_url} , '_blank'`)}
              >
                Read More
              </button>
              <IconButton aria-label="share" style={{ marginRight: '10px' }}>
                <ShareIcon />
              </IconButton>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default BookCard;

BookCard.defaultProps = {
  book: []
};
BookCard.propTypes = {
  book: PropTypes.node
};
