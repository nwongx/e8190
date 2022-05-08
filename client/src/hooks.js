import { useEffect, useState, useCallback } from "react"
import { makeStyles } from "@material-ui/styles";
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

export const useFormData = (
  inputs,
  onSubmit,
) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData({
      onSubmit,
      inputs
    })

  }, [inputs, onSubmit])

  return formData;
}

export const useBubbleType = (message) => {
  const [type, setType] = useState(UNSUPPORT_TYPE);

  useEffect(() => {
    const { text, attachments } = message || {};
    if (!text && !attachments) {
      setType(UNSUPPORT_TYPE);
      return;
    }
    if ((!text || text.length === 0) && attachments) {
      if (attachments.length === 0) {
        setType(UNSUPPORT_TYPE);
      } else if (attachments.length === 1) {
        setType(IMG_TYPE);
      } else {
        setType(MULTI_IMG_TYPE);
      }
      return;
    }
    if (text.length > 0 && attachments) {
      if (attachments.length === 0) {
        setType(TEXT_TYPE);
      } else if (attachments.length === 1) {
        setType(IMG_TEXT_TYPE);
      } else {
        setType(UNSUPPORT_TYPE);
      }
      return;
    }
    if (text.length === 0) {
      setType(UNSUPPORT_TYPE);
      return;
    } else {
      setType(TEXT_TYPE);
    }
  }, [message, setType])

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

const useTextStyles = makeStyles(() => ({
  textColor: {
    color: "#91A3C0"
  },
  otherUserTextColor: {
    color: '#FFFFFF',
  },
}))

export const useUserTextStyles = (isOtherUser) => {
  const classes = useTextStyles();

  if (isOtherUser) {
    return classes.otherUserTextColor;
  }
  return classes.textColor;
}

const useBubbleStyles = makeStyles(() => ({
  bubble: {
    background: '#F4F6FA',
  },
  otherUserBubble: {
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
  },
}))

export const useUserBubbleStyles = (isOtherUser) => {
  const classes = useBubbleStyles();
  if (isOtherUser) {
    return classes.otherUserBubble;
  }
  return classes.bubble;
}

const useBorderStyles = makeStyles(() => ({
  textBorderRadius: {
    borderRadius: '10px 10px 0 10px',
  },
  otherUsertextBorderRadius: {
    borderRadius: '0 10px 10px 10px',
  },
  imgBorderRadius: {
    borderRadius: '0 0 0 10px',
  },
  otherUserImgBorderRadius: {
    borderRadius: '0 0 10px 10px',
  }
}))

export const useUserBorderStyles = (isOtherUser, hasImg) => {
  const classes = useBorderStyles();

  if (isOtherUser) {
    return hasImg ?
      classes.otherUserImgBorderRadius :
      classes.otherUsertextBorderRadius;
  }

  return hasImg ?
    classes.imgBorderRadius :
    classes.textBorderRadius;
}



