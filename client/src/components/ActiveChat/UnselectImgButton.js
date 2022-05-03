import React from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const UnselectImgButton = ({ onClick }) => {
  return (
    <IconButton
      color="secondary"
      aria-label="upload picture"
      component="span"
      onClick={onClick}
    >
      <DeleteIcon />
    </IconButton>
  )
}

export default UnselectImgButton;