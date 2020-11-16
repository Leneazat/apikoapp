import { Field, Form } from "formik";
import styled from "styled-components";

export const AddProductFormLabel = styled.label`
  font-family: Helvetica;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #303030;
  margin-bottom: 4px;
`;

export const AddProductFormInputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const AddProductFormWrapperForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 34px auto;
  background: #ffffff;
  box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
  border-radius: 7px;
  max-width: 70%;
`;

export const AddProductFormInput = styled(Field)`
  background: #f9fafb;
  border: 1px solid #dedee0;
  box-sizing: border-box;
  border-radius: 5px;
  height: 58px;
  padding: 16px 24px;
`;

export const AddProductFormForm = styled(Form)`
  min-width: 65%;
  display: flex;
  flex-direction: column;
`;

export const AddProductFormSubmit = styled.button`
  background: #349a89;
  border-radius: 5px;
  width: 377px;
  height: 58px;
  margin-top: 8px;
  margin-bottom: 32px;
  text-align: center;
  letter-spacing: 0.4px;
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  align-self: center;
  cursor: pointer;
`;

export const AddProductFormHeader = styled.h1`
  font-family: Helvetica;
  font-size: 22px;
  line-height: 25px;
  color: #282828;
  margin: 32px 0 24px 0;
  text-align: center;
`;
