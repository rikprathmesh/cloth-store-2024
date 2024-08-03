import React, { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import ButtonComponent from "../button/ButtonComponent";
import FormInputComponent from "../form-input/FormInputComponent";
import "./signin-form-styles.scss";


const defaultFormFields = {
  email: "",
  password: "",
};

const SigninFormComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  //   console.log(formFields, "form fields");

  // const val = useContext(UserContext)

  // const {setCurrentUser} = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // console.log(response);
    // setCurrentUser(user)
   
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user, "sign in with email and password");
      // setCurrentUser(user)

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Checkout Your Credentials");
          break;

        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In With Your Email and Password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInputComponent
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          required
          value={email}
        />

        <FormInputComponent
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          required
          value={password}
        />
        <div className="buttons-container">
          <ButtonComponent type="submit">Sign In</ButtonComponent>
          <ButtonComponent type='button' buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SigninFormComponent;
