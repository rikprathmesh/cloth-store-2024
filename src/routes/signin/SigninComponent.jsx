import React from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import SignUpFormComponent from "../../components/sign-up-form/SignUpFormComponent";

const SigninComponent = () => {

  // useEffect(() => {
  //   logGoogleRedirectUser();
  // }, []);

  // const logGoogleRedirectUser = async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response, "login with redirect");

  //   // deprecated google with redirect
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user)
  //   }
  // };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(response);
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={() => logGoogleUser()}>sign in with Google Popup</button>
      <SignUpFormComponent />
      {/* <button onClick={() => signInWithGoogleRedirect()}>
        sign in with Redirect
      </button> */}
    </div>
  );
};

export default SigninComponent;
