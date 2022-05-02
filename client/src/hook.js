import { useEffect, useState } from "react"

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