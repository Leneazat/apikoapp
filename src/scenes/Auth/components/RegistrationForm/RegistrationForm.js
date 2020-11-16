import React from "react";
import s from "./RegistrationForm.module.scss";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";
import { EyeVisionPass } from "../../../../icons/EyeVisionPass";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Should be 8 chars minimum."),
});

export const RegistrationForm = ({ onSubmit }) => {
  return (
    <div className={s.loginWrapper}>
      <Formik
        initialValues={{
          email: "",
          fullName: "",
          password: "",
          passwordAgain: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}>
        {({ errors, touched }) => (
          <Form className={s.formContainer}>
            <h1>Registration</h1>
            <div className={s.formEmailInput}>
              <label htmlFor='email'>Email</label>
              <Field
                id='email'
                name='email'
                placeholder='Example@gmail.com'
                type='email'></Field>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div className={s.formEmailInput}>
              <label htmlFor='fullName'>Full Name</label>
              <Field
                id='fullName'
                name='fullName'
                placeholder='Tony Stark'></Field>
              {errors.fullName && touched.fullName ? (
                <div>{errors.fullName}</div>
              ) : null}
            </div>
            <div className={s.formPasswordInput}>
              <label htmlFor='password'>Password</label>
              <div className={s.inputContainer}>
                <Field id='password' name='password'></Field>
                {errors.password && touched.password ? (
                  <div className={s.errorStyle}>{errors.password}</div>
                ) : null}
                <EyeVisionPass className={s.eyeVisionPassIcon}></EyeVisionPass>
              </div>
            </div>
            <div className={s.formPasswordInput}>
              <label htmlFor='passwordAgain'>Password Again</label>
              <div className={s.inputContainer}>
                <Field id='passwordAgain' name='passwordAgain'></Field>
                {errors.passwordAgain && touched.passwordAgain ? (
                  <div>{errors.passwordAgain}</div>
                ) : null}
                <EyeVisionPass className={s.eyeVisionPassIcon}></EyeVisionPass>
              </div>
            </div>
            <button
              type='submit'
              text='Register'
              className={s.formContinueButton}>
              Registration
            </button>
          </Form>
        )}
      </Formik>
      <div className={s.registerBlock}>
        <p>
          <span>I already have an account,</span>{" "}
          <Link className={s.registerLink} to={routes.login}>
            LOG IN
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
