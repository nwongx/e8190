import React from 'react';
import { Box } from '@material-ui/core';
import moment from 'moment';
import { SenderBubbleWrapper } from './index';

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
          <div key={message.id}></div>
        )
      })
      }
    </Box>
  );
};

// const Messages = (props) => {
//   const { messages, otherUser, userId } = props;
//   return (
//     <Box>
//       {messages.map((message) => {
//         const time = moment(message.createdAt).format('h:mm');

//         return message.senderId === userId ? (
//           !message.attachments || message.attachments.length === 0 ?
//             <SenderTextBubble key={message.id} text={message.text} time={time} /> :
//             (
//               message.attachments.length === 1 ?
//                 (
//                   message.text.length === 0 ?
//                     <SenderImgTextBubble key={message.id} url={message.attachments[0]} time={time} /> :
//                     <SenderImgTextBubble key={message.id} url={message.attachments[0]} time={time} text={message.text} />
//                 ) :
//                 <SenderMultiImgBubble key={message.id} urls={message.attachments} time={time} />
//             )
//         ) : (
//           !message.attachments || message.attachments.length === 0 ?
//           <OtherUserBubble key={message.id} text={message.text} time={time}  otherUser={otherUser}/> :
//           (
//             message.attachments.length === 1 ?
//               (
//                 message.text.length === 0 ?
//                   <OtherUserSingleImgBubble  key={message.id} url={message.attachments[0]} time={time} otherUser={otherUser}/> :
//                   <OtherUserImgTextBubble key={message.id} url={message.attachments[0]} time={time} text={message.text} otherUser={otherUser}/>
//               ) :
//               <OtherUserMultiImgBubble key={message.id} urls={message.attachments} time={time} otherUser={otherUser}/>
//           )
//         );
//       })}
//     </Box>
//   );
// };

export default Messages;
