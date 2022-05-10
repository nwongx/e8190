import React, { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';

const SelectImgButton = ({ onChange }) => {
  const [imgs, setImgs] = useState([]);

  const onChangeHandler = (e) => {
    setImgs([...e.target.files]);
  }

  useEffect(() => {
    onChange(imgs);
  }, [imgs, onChange]);

  return (
    <label htmlFor="send-img-file">
      <input
        accept="image/*"
        id="send-img-file"
        multiple
        type="file"
        hidden
        onChange={onChangeHandler}
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