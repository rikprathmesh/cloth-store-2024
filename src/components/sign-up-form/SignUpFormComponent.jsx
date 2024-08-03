import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import ButtonComponent from "../button/ButtonComponent";
import FormInputComponent from "../form-input/FormInputComponent";
import "./signup-form-styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpFormComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  //   console.log(formFields, "form fields");

  const { displayName, email, password, confirmPassword } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password Not Matched");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user, "email and password log");
      // setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email alredy exists");
      }
      console.log("Uset Not Created", error);
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
      <h2>Don't have an account?</h2>
      <span>Sign Up With Your Email and Password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInputComponent
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          required
          value={displayName}
        />

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
        <FormInputComponent
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          required
          value={confirmPassword}
        />
        <ButtonComponent type="submit">Sign Up</ButtonComponent>
      </form>
    </div>
  );
};

export default SignUpFormComponent;
