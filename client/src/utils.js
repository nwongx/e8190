const convertBufferToHex = (buffer) => {
  return [...new Uint8Array(buffer)]
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}
const convertStringToArrayBuffer = (str) => {
  const enc = new TextEncoder("utf-8");
  return enc.encode(str);
}

const createSignuature = async (timestamp, algo = "SHA-256") => {
  const serializedFormDataBuffer = convertStringToArrayBuffer(
    `timestamp=${timestamp}${process.env.REACT_APP_API_SECRET}`
  );
  const signatureBuffer = await window.crypto.subtle.digest(algo, serializedFormDataBuffer);
  return convertBufferToHex(signatureBuffer);
}

export const createFormData = async (img) => {
  const formData = new FormData();
  const timestamp = Math.floor(Date.now() / 1000);

  // order matters!
  formData.append("timestamp", timestamp);

  const signature = await createSignuature(timestamp);

  formData.append("file", img);
  formData.append("api_key", process.env.REACT_APP_API_KEY)
  formData.append("signature", signature);
  return formData;
}

export const optimizeImgUrl = (url) => {
  const splits = url.split("load/");
  if (splits.length !== 2) return url;
  return  `https://res.cloudinary.com/dsoagesap/image/upload/w_250/dpr_auto/q_auto/f_auto/${splits[1]}`
}

export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
