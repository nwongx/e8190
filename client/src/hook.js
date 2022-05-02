import { useEffect, useState, useCallback } from "react"
import {
  TextBubble,
  ImgTextBubble,
  MultiImgBubble
} from "./components/ActiveChat"

export const TEXT_TYPE = "TEXT";
export const IMG_TYPE = "IMG";
export const IMG_TEXT_TYPE = "IMG_TEXT";
export const MULTI_IMG_TYPE = "MULTI_IMG";
export const UNSUPPORT_TYPE = "UNSUPPORT";

export const useBubbleType = ({ text, attachments }) => {
  const [type, setType] = useState(UNSUPPORT_TYPE);

  useEffect(() => {
    if (!text && !attachments) {
      setType(UNSUPPORT_TYPE);
    } else if (attachments.length === 0) {
      setType(TEXT_TYPE);
    } else if (attachments.length === 1) {
      if (text.length === 0) {
        setType(IMG_TYPE);
      } else {
        setType(IMG_TEXT_TYPE);
      }
    } else {
      if (text.length === 0) {
        setType(MULTI_IMG_TYPE);
      } else {
        setType(UNSUPPORT_TYPE);
      }
    }
  }, [text, attachments, setType])

  return type;
}

export const useBubbleFactory = (isOtherUser = false) => {
  const memoizedBubbleFactory = useCallback((bubbleType) => {
    switch (bubbleType) {
      case TEXT_TYPE:
        return ({ text }) => <TextBubble
          text={text}
          isOtherUser={isOtherUser}
        />;
      case IMG_TYPE:
        return ({ attachments }) => <ImgTextBubble
          url={attachments[0]}
          isOtherUser={isOtherUser}
        />
      case IMG_TEXT_TYPE:
        return ({ attachments, text }) => <ImgTextBubble
          url={attachments[0]}
          text={text}
          isOtherUser={isOtherUser}
        />
      case MULTI_IMG_TYPE:
        return ({ attachments }) => <MultiImgBubble
          urls={attachments}
          isOtherUser={isOtherUser}
        />
      default:
        return () => <></>
    }
  }, [isOtherUser])

  return memoizedBubbleFactory;
}