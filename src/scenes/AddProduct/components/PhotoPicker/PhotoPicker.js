import { useFormikContext } from "formik";
import { observer } from "mobx-react";
import React, { useCallback, useRef, useState } from "react";
import Api from "../../../../api";
import {
  Photo,
  PhotoPickerLabel,
  PhotosContainer,
  PhotoUploadContainer,
  PhotoUploadPicContainer,
  PhotoUploadPicHorizontal,
  PohotoUploadPicVertical,
} from "./PhotoPicker.styles";

const PhotoPicker = () => {
  const inputRef = useRef();
  const { values, setFieldValue } = useFormikContext();
  const [isLoading, setLoading] = useState(false);

  const { photos } = values;

  const uploadImage = useCallback(async () => {
    try {
      setLoading(true);
      const res = await Api.Uploads.uploadImage(inputRef.current.files[0]);
      const image = res.data;
      setFieldValue("photos", [...photos, image]);
    } catch (error) {
      console.log("err while uploading photo:", { error });
    } finally {
      setLoading(false);
    }
  }, [photos, setLoading]);

  const onClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <PhotoPickerLabel>Photos</PhotoPickerLabel>
      <PhotosContainer>
        {photos.map((i) => (
          <Photo src={i} key={i} />
        ))}

        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <PhotoUploadContainer onClick={onClick}>
            <PhotoUploadPicContainer>
              <PhotoUploadPicHorizontal></PhotoUploadPicHorizontal>
              <PohotoUploadPicVertical></PohotoUploadPicVertical>
            </PhotoUploadPicContainer>
          </PhotoUploadContainer>
        )}

        <input
          style={{ display: "none" }}
          accept='.jpg, .png, .jpeg'
          type='file'
          ref={inputRef}
          onChange={uploadImage}></input>
      </PhotosContainer>
    </>
  );
};

export default observer(PhotoPicker);
