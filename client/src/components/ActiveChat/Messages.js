import React from 'react';
import { Box } from '@material-ui/core';
import moment from 'moment';
import {
  SenderBubbleWrapper,
  OtherUserBubbleWrapper
} from './index';
import { useBubbleFactory } from '../../hooks';

const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  const senderBubbleFactory = useBubbleFactory();
  const otherUserFactory = useBubbleFactory(true);

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');
        return message.senderId === userId ? (
          <SenderBubbleWrapper
            key={message.id}
            message={message}
            time={time}
            bubbleFactory={senderBubbleFactory}
          />
        ) : (
          <OtherUserBubbleWrapper
            key={message.id}
            message={message}
            time={time}
            otherUser={otherUser}
            bubbleFactory={otherUserFactory}
          />
        )
      })
      }
    </Box>
  );
};

export default Messages;
