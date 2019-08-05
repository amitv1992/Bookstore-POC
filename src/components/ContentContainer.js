import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookContainer from './BookContainer';
import MessageContainer from './MessageContainer';

class ContentContainer extends Component {
  renderMesssageComponent() {
    if (this.props.state.isMessageComponentClicked) {
      return <MessageContainer title={this.props.state.title} />;
    }
    return null;
  }

  renderBookComponent() {
    if (this.props.state.isBooksComponentClicked) {
      return <BookContainer title={this.props.state.title} />;
    }
    return null;
  }

  render() {
    return (
      <>
        {this.renderBookComponent()}
        {this.renderMesssageComponent()}
      </>
    );
  }
}
const mapStateToProps = state => {
  console.info('STATE INFO FROM Book Container : ', state);
  return {
    state: state.appDataReducer
  };
};

export default connect(mapStateToProps)(ContentContainer);
