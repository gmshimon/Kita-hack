import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { postUser } from "../utilis/queries";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error,setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser =  (obj,password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, obj.email, password)
    .then(res=>{
      if(res?._tokenResponse?.idToken){
        localStorage.setItem('userToken', JSON.stringify({
          token:res?._tokenResponse?.idToken
        }))
        const {returnData,error} = postUser(obj)
        console.log("returnData: ",returnData)
        setUser(returnData)
        if(error)setError(error)
      }
    }).catch(error=>{
      setError(error.message)
    })
    return{user,error}
  };

  const addUsernamePhoto = (username, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photoURL,
    });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    signInWithGoogle,
    addUsernamePhoto,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
