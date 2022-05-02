import React from 'react';
import { Box } from '@material-ui/core';
import moment from 'moment';
import {
  SenderBubbleWrapper,
  OtherUserBubbleWrapper
} from './index';

const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');
        return message.senderId === userId ? (
          <SenderBubbleWrapper
            key={message.id}
            message={message}
            time={time}
          />
        ) : (
          <OtherUserBubbleWrapper
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
