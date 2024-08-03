import React from "react";
import SigninFormComponent from "../../components/sign-in-form/SigninFormComponent";
import SignUpFormComponent from "../../components/sign-up-form/SignUpFormComponent";
import './authentication-styles.scss'

const AuthenticationComponent = () => {

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



  return (
    <div className="authentication-container">
      <SigninFormComponent />
      <SignUpFormComponent />
      {/* <button onClick={() => signInWithGoogleRedirect()}>
        sign in with Redirect
      </button> */}
    </div>
  );
};

export default AuthenticationComponent;
