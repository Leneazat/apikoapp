import { Formik } from "formik";
import { observer } from "mobx-react";
import React from "react";
import Avatar from "react-avatar";
import { Header } from "../../components";
import { useStore } from "../../stores/createStore";
import {
  EditProfileContainer,
  EditProfileForm,
  EditProfileFormAvatarBlock,
  EditProfileFormAvatarBlockInput,
  EditProfileFormLabel,
  EditProfileFormLocationInput,
  EditProfileFormNameInput,
  EditProfileFormPhoneInput,
  EditProfileFormSubmitButton,
  EditProfileFormTitle,
} from "./EditProfile.styles";

const EditProfile = observer(() => {
  const store = useStore();

  async function onSubmit({ fullName, avatar, phone, location }) {
    await store.auth.editAccount.run({ fullName, avatar, phone, location });
  }

  return (
    <>
      <Header withSearchBar={false}></Header>
      <Formik
        initialValues={{
          fullName: "",
          avatar: "",
          phone: "",
          location: "",
        }}
        onSubmit={onSubmit}>
        <EditProfileContainer>
          <EditProfileForm>
            <EditProfileFormTitle>Edit Profile</EditProfileFormTitle>
            <EditProfileFormAvatarBlock>
              <Avatar
                name={store.viewer.user.fullName}
                round={true}
                size='100px'></Avatar>
              <EditProfileFormAvatarBlockInput
                type='file'
                id='avatar'
                name='avatar'
                placeholder='Upgrade Photo'
              />
            </EditProfileFormAvatarBlock>
            <EditProfileFormLabel>Full Name</EditProfileFormLabel>
            <EditProfileFormNameInput
              id='fullName'
              name='fullName'></EditProfileFormNameInput>
            <EditProfileFormLabel>Phone Number</EditProfileFormLabel>
            <EditProfileFormPhoneInput
              id='phone'
              name='phone'></EditProfileFormPhoneInput>
            <EditProfileFormLabel>Location</EditProfileFormLabel>
            <EditProfileFormLocationInput
              id='location'
              name='location'></EditProfileFormLocationInput>
            <EditProfileFormSubmitButton type='submit'>
              Save
            </EditProfileFormSubmitButton>
          </EditProfileForm>
        </EditProfileContainer>
      </Formik>
    </>
  );
});

export default EditProfile;
