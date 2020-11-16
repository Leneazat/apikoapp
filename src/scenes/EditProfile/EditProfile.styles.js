import { Field, Form } from "formik";
import styled from "styled-components";

export const EditProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;

export const EditProfileForm = styled(Form)`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
  border-radius: 7px;
  padding: 36px 58px 32px 58px;
`;

export const EditProfileFormTitle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  color: #282828;
  text-align: center;
`;

export const EditProfileFormAvatarBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const EditProfileFormAvatarBlockInput = styled.input`
  position: absolute;
  bottom: 0;
  opacity: 1;
  width: 104px;
  display: inline-block;
  background: #ffffff;
  border: 1px solid #349a89;
  box-sizing: border-box;
  border-radius: 3px;
`;

export const EditProfileFormNameInput = styled(Field)`
  background: #f9fafb;
  border: 1px solid #dedee0;
  box-sizing: border-box;
  border-radius: 5px;
  height: 58px;
  width: 377px;
`;

export const EditProfileFormLabel = styled.label`
  font-family: Helvetica;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #303030;
  margin-top: 16px;
  margin-bottom: 4px;
`;

export const EditProfileFormPhoneInput = styled(Field)`
  background: #f9fafb;
  border: 1px solid #dedee0;
  box-sizing: border-box;
  border-radius: 5px;
  height: 58px;
`;

export const EditProfileFormLocationInput = styled(Field)`
  background: #f9fafb;
  border: 1px solid #dedee0;
  box-sizing: border-box;
  border-radius: 5px;
  height: 58px;
`;

export const EditProfileFormSubmitButton = styled.button`
  background: #349a89;
  border-radius: 5px;
  outline: none;
  height: 58px;
  border: none;
  cursor: pointer;
  align-self: center;
  margin-top: 24px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.4px;
  color: #ffffff;
  width: 100%;
`;
