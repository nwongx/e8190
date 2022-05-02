import React from "react";

const OtherUserImgBubble = ({ url, hasText }) => {
  return (
    <img
        style={{
          display: "block",
          width: "100%",
          height: "100%", 
          objectFit: "cover",
          borderRadius: `0 10px ${hasText ? "0" : "10px"} ${hasText ? "0" : "10px"}`,
        }}
        src={url}
        alt="img-message"
      />
  )
}

export default OtherUserImgBubble;