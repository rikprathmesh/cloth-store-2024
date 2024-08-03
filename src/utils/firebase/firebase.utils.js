import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcOrusAcw5xPsZxzh8lAgwNJ2fnoFSCfE",
  authDomain: "crown-clothing-2024.firebaseapp.com",
  projectId: "crown-clothing-2024",
  storageBucket: "crown-clothing-2024.appspot.com",
  messagingSenderId: "377492852796",
  appId: "1:377492852796:web:051c8ae0d5191689e17339",
  measurementId: "G-FWW2B2SJ8H",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef, "userDocRef");

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot, 'userSnapshot');
  // console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error Creating The User", error.message);
    }
  }

  return userDocRef;
};
