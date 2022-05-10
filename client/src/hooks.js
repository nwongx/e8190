import { useEffect, useState } from "react"
export const TEXT_TYPE = "TEXT";
export const IMG_TYPE = "IMG";
export const IMG_TEXT_TYPE = "IMG_TEXT";
export const MULTI_IMG_TYPE = "MULTI_IMG";
export const MULTI_IMG_TEXT_TYPE = "MULTI_IMG_TEXT";
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
        setType(MULTI_IMG_TEXT_TYPE);
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
