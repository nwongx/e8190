import React, { useCallback, useState } from 'react';
import { FormControl, FilledInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SelectImgButton, UnselectImgButton } from './index';
import axios from "axios";
import { createFormData, optimizeImgUrl } from '../../utils';

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },
}));

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

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [selectedImgs, setSelectedImgs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const memoizedHandleChange = useCallback((event) => {
    setText(event.target.value);
  }, [setText]);

  const memoizedUnselectHandleChange = useCallback(() => {
    setSelectedImgs([]);
  }, [setSelectedImgs])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;

    try {
      setIsLoading(true);
      let urls = [];
      if (selectedImgs.length > 0) {
        const res = await uploadSignedImgs(selectedImgs);
        urls = res.map(({ data }) => optimizeImgUrl(data.secure_url));
      }
      // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
      const reqBody = {
        text: formElements.text.value,
        recipientId: otherUser.id,
        conversationId,
        sender: conversationId ? null : user,
        attachments: urls
      };
      await postMessage(reqBody);
    } catch (e) {
      // error handling
    } finally {
      setSelectedImgs([]);
      setIsLoading(false);
      setText('');
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          disabled={isLoading}
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={memoizedHandleChange}
          endAdornment={
            selectedImgs.length === 0 ?
              <SelectImgButton onChange={setSelectedImgs} /> :
              <UnselectImgButton onClick={memoizedUnselectHandleChange} />
          }
        />
      </FormControl>
    </form>
  );
};

export default Input;
