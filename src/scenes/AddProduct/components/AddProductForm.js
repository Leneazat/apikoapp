import React from "react";
import { Formik } from "formik";
import {
  AddProductFormLabel,
  AddProductFormInputBlock,
  AddProductFormWrapperForm,
  AddProductFormInput,
  AddProductFormSubmit,
  AddProductFormHeader,
  AddProductFormForm,
} from "./AddProductForm.styles";
import PhotoPicker from "./PhotoPicker/PhotoPicker";

const AddProductForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        title: "",
        location: "",
        description: "",
        photos: [],
        price: 0,
      }}
      onSubmit={onSubmit}>
      <AddProductFormWrapperForm>
        <AddProductFormForm>
          <AddProductFormHeader>Add Product</AddProductFormHeader>
          <AddProductFormInputBlock>
            <AddProductFormLabel>Title</AddProductFormLabel>
            <AddProductFormInput
              id='title'
              name='title'
              placeholder='For example: Iron man suit'
              type='title'></AddProductFormInput>
          </AddProductFormInputBlock>
          <AddProductFormInputBlock>
            <AddProductFormLabel>Location</AddProductFormLabel>
            <AddProductFormInput
              id='location'
              name='location'
              placeholder='For example: Los Angeles, CA'></AddProductFormInput>
          </AddProductFormInputBlock>
          <AddProductFormInputBlock>
            <AddProductFormLabel>Description</AddProductFormLabel>
            <AddProductFormInput
              id='description'
              name='description'
              placeholder='For example: Iron man suit'></AddProductFormInput>
          </AddProductFormInputBlock>
          <PhotoPicker />
          {/* <AddProductFormInputBlock>
            <AddProductFormLabel>Photos</AddProductFormLabel>
            <AddProductFormInput
              id='photos'
              name='photos'
              placeholder=''></AddProductFormInput>
          </AddProductFormInputBlock> */}
          <AddProductFormInputBlock>
            <AddProductFormLabel>Price</AddProductFormLabel>
            <AddProductFormInput
              id='price'
              name='price'
              placeholder='For example: 300$'></AddProductFormInput>
          </AddProductFormInputBlock>
          <AddProductFormSubmit type='submit'>Submit</AddProductFormSubmit>
        </AddProductFormForm>
      </AddProductFormWrapperForm>
    </Formik>
  );
};

export default AddProductForm;
