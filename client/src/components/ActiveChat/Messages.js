import React from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';
import SenderSingleImgBubble from './SenderSingleImgBubble';
import SenderMultiImgBubble from './SenderMutiImgBubble';
import SenderImgTextBubble from './SenderImgTextBubble';

const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          !message.attachments || message.attachments.length === 0 ?
            <SenderBubble key={message.id} text={message.text} time={time} /> :
            (
              message.attachments.length === 1 ?
                (
                  message.text.length === 0 ?
                    <SenderSingleImgBubble key={message.id} url={message.attachments[0]} time={time} /> :
                    <SenderImgTextBubble key={message.id} url={message.attachments[0]} time={time} text={message.text} />
                ) :
                <SenderMultiImgBubble key={message.id} urls={message.attachments} time={time} />
            )
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
