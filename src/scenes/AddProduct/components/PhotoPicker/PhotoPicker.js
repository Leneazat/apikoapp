import { useFormikContext } from "formik";
import { observer } from "mobx-react";
import React, { useEffect, useRef } from "react";
import { useStore } from "../../../../stores/createStore";
// import {} from "./PhotoPicker.styles";

const PhotoPicker = () => {
  const store = useStore();
  const { images, getImages } = store.uploads;

  const { setFieldValue } = useFormikContext();
  useEffect(() => {
    setFieldValue("photos", getImages());
  }, [images]);

  const ref = useRef();

  async function uploadImage() {
    await store.uploads.uploadImage.run(ref.current.files[0]);
  }

  return (
    <div>
      <input accept='.jpg' type='file' ref={ref} />{" "}
      <button onClick={uploadImage}>Send image to server</button>
      {store.uploads.images.map((i) => (
        <img src={i.url} width='200px' height='200px'></img>
      ))}
    </div>
  );
};

export default observer(PhotoPicker);
