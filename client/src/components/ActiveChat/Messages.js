import React from 'react';
import { Box } from '@material-ui/core';
import moment from 'moment';
import {
  SenderBubble,
  OtherUserBubble
} from './index';

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');
        return message.senderId === userId ? (
          <SenderBubble
            key={message.id}
            message={message}
            time={time}
          />
        ) : (
          <OtherUserBubble
            key={message.id}
            message={message}
            time={time}
            otherUser={otherUser}
          />
        )
      })
      }
    </Box>
  );
};

export default Messages;
