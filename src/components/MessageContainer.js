import React from 'react';

class MessageContainer extends React.PureComponent {
  render() {
    return (
      <>
        <div className="content-container">
          <h2>{this.props.title}</h2>
        </div>
        <div className="inbox-container">
          <h2>No messages found in your inbox!</h2>
        </div>
      </>
    );
  }
}
export default MessageContainer;
