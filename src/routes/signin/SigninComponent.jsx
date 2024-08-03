import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'


const SigninComponent = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    // console.log(response);
    createUserDocumentFromAuth(user)
    
  }
  return (
    <div>
      Sign in page
      <button onClick={() => logGoogleUser()}>
        sign in with Google Popup
      </button>
    </div>
  )
}

export default SigninComponent
