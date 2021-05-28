import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/signup/signup.component";
import "./auth.styles.scss";

function SignInAndSignUp() {
  return (
    <div className={"sign-in-and-sign-up"}>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
