import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const provider = new GoogleAuthProvider()
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      const createUser = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      }
      const logIn = (email, password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password);
      
      }

      const google = () => {
            signInWithPopup(auth,provider)
      }

      const logOut = () => { 
            setLoading(true)
            return signOut(auth)
      }
           
      
      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, presentUser => {
                  setUser(presentUser);
                  console.log(presentUser)
                   setLoading(false);
            })
            return () => {
                  unsubscribe
            }
      },[])
      const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        loading,
        google,
      };
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;