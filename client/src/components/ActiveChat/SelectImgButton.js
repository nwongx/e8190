import React, { useCallback, useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import axios from "axios";
import SnackbarError from '../SnackbarError';
import { createFormData } from '../../utils';

/**
 * other Approaches
 * 1. create a new axios instance (waste for an api)
 * 2. adding checking to existing interceptors (do not want to modify existing code)
 */
axios.interceptors.request.use(async function (config) {
  delete config.headers['x-access-token'] //preventing cors error
  return config;
}, null, {
  runWhen: (config) => /^https:\/\/api.cloudinary.com/.test(config.url)
})


const uploadSignedImgs = async (imgs) => {
  const formDatas = await Promise.all(imgs.map(async (img) => await createFormData(img)))

  return await Promise.all(formDatas.map((formData) => {
    return axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      formData
    )
  }))
}

const SelectImgButton = ({ onChange }) => {
  const [imgs, setImgs] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const memoizedOnChangeHandler = useCallback((e) => {
    setImgs([...e.target.files]);
  }, [setImgs])

  useEffect(() => {
    const imgsChangeEffect = async () => {
      if (imgs && imgs.length > 0) {
        try {
          const res = await uploadSignedImgs(imgs);
          const urls = res.map(({ data }) => data.secure_url);
          onChange(urls);
        } catch (e) {
          setErrorMessage('Something went wrong, please try again');
          setSnackBarOpen(true);
        }
      }
    }
    imgsChangeEffect();
  }, [imgs, onChange]);

  return (
    <label htmlFor="send-img-file">
      {snackBarOpen && (
        <SnackbarError
          setSnackBarOpen={setSnackBarOpen}
          errorMessage={errorMessage}
          snackBarOpen={snackBarOpen}
        />
      )}
      <input
        accept="image/*"
        id="send-img-file"
        multiple
        type="file"
        hidden
        onChange={memoizedOnChangeHandler}
      />
      <IconButton
        color="secondary"
        aria-label="upload picture"
        component="span"
      >
        <PhotoLibraryOutlinedIcon />
      </IconButton>
    </label>
  )
}

export default SelectImgButton;