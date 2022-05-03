const serializeFormData = (formData) => {
  const excludeKeys = [
    "file",
    "cloud_name",
    "api_key",
    "signature"
  ];
  let serializedFormData = "";
  for (const [k, v] of formData.entries()) {
    if (!excludeKeys.includes(k)) {
      serializedFormData += `${k}=${v}&`;
    }
  }
  return serializedFormData.slice(0, -1);
};

const convertBufferToHex = (buffer) => {
  return [...new Uint8Array(buffer)]
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}
const convertStringToArrayBuffer = (str) => {
  const enc = new TextEncoder("utf-8");
  return enc.encode(str);
}

const createSignuature = async (formData, algo = "SHA-256") => {
  const serializedFormData = serializeFormData(formData);
  const serializedFormDataBuffer = convertStringToArrayBuffer(
    serializedFormData +
    process.env.REACT_APP_API_SECRET
  );
  const signatureBuffer = await window.crypto.subtle.digest(algo, serializedFormDataBuffer);
  return convertBufferToHex(signatureBuffer);
}

export const createFormData = async (img) => {
  const formData = new FormData();
  const timestamp = Math.floor(Date.now() / 1000);

  formData.append("timestamp", timestamp);

  const signature = await createSignuature(formData);

  formData.append("file", img);
  formData.append("api_key", process.env.REACT_APP_API_KEY)
  formData.append("signature", signature);
  return formData;
}