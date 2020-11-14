import React from "react";
import s from "./LoginForm.module.scss";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";
import { EyeVisionPass } from "../../../../icons/EyeVisionPass";
import { Formik, Field, Form } from "formik";

export const LoginForm = ({ onSubmit }) => {
  return (
    <div className={s.loginWrapper}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={onSubmit}
      >
        <Form className={s.formContainer}>
          <h1>Login</h1>
          <div className={s.formEmailInput}>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="Example@gmail.com"
              type="email"
            ></Field>
          </div>
          <div className={s.formPasswordInput}>
            <label htmlFor="password">Password</label>
            <div className={s.inputContainer}>
              <Field id="password" name="password"></Field>
              <EyeVisionPass className={s.eyeVisionPassIcon}></EyeVisionPass>
            </div>
            <Link className={s.resetPass} to={routes.resetPass}>
              Don’t remember password?
            </Link>
          </div>
          <button type="submit" className={s.formContinueButton}>
            Continue
          </button>
        </Form>
      </Formik>
      <div className={s.registerBlock}>
        <p>
          <span>I have no account,</span>{" "}
          <Link className={s.registerLink} to={routes.register}>
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};
