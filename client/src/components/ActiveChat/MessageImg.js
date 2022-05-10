import React from "react";

const MessageImg = ({ url, hasText, isOtherUser }) => {
  const borderRadius = isOtherUser ?
    `0 10px ${hasText ? "0 0" : "10px 10px"}` :
    `10px 10px 0 ${hasText ? "0px" : "10px"}`;

  return (
    <img
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius,
      }}
      src={url}
      alt=""
    />
  )
}

export default MessageImg;
