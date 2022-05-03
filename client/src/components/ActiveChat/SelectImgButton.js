import React, { useCallback, useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';

const SelectImgButton = ({ onChange }) => {
  const [imgs, setImgs] = useState([]);

  const memoizedOnChangeHandler = useCallback((e) => {
    setImgs([...e.target.files]);
  }, [setImgs])

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