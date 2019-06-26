import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Inbox = ({ messages }) => {

  return (
    <div>
      {Object.keys(messages).map(messageId => {
        let message = messages[messageId];
        return <Message name={message.name}
          email={message.email}
          subject={message.subject}
          message={message.message}
          formattedTime = {message.formattedTime}
          messageId={messageId}
          key = {messageId} />;
      })}
    </div>
  );
};

Inbox.propTypes = {
  messages: PropTypes.object
};

const mapStateToProps = state => {
  return {
    messages: state.messageList
  };
};

export default connect(mapStateToProps)(Inbox);
