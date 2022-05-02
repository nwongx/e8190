import React from "react";

const SenderImgBubble = ({ url, hasText }) => {
  return (
    <img
        style={{
          display: "block",
          width: "100%",
          height: "100%", 
          objectFit: "cover",
          borderRadius: `10px 10px 0 ${hasText ? "0px" : "10px"}`,
        }}
        src={url}
        alt="img-message"
      />
  )
}

export default SenderImgBubble;