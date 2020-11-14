import React from "react";
import s from "./ResetPass.module.scss";

export const ResetPass = () => {
  return (
    <div className={s.loginWrapper}>
      <form className={s.formContainer}>
        <h1>Restore Password</h1>
        <div className={s.formEmailInput}>
          <label>Email</label>
          <input placeholder="Example@gmail.com"></input>
        </div>
        <button className={s.formContinueButton}>Continue</button>
      </form>
    </div>
  );
};
