import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  updatePassword,
  deleteUser,
} from "firebase/auth";
import app from "../firebaseConfig";
export const AUTH_CONTEXT = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user with email password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // create user with email password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user name update
  const updateName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  // user forget password
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  // user update password
  const userUpdatePassword = (newPassword) => {
    return updatePassword(auth.currentUser, newPassword);
  };
 
  // user name update
  const logOut = () => {
    return signOut(auth);
  };
  // track user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User observer", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    loginUser,
    updateName,
    forgetPassword,
    userUpdatePassword,
    user,
    loading,
    setLoading,
    logOut,
  };
  return (
    <AUTH_CONTEXT.Provider value={authInfo}>{children}</AUTH_CONTEXT.Provider>
  );
};

export default AuthProvider;
