// import { createContext, useContext, useEffect, useState } from "react";
// import { initializeApp } from "firebase/app";
// import "firebase/firestore";
// import {
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";

// const FirebaseContext = createContext(null);

// export const useFirebase = () => useContext(FirebaseContext);

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAC7cg8favPLo1bQXTSN3NXSlVlKwYf-1Y",
//   authDomain: "mbc-app-a3a88.firebaseapp.com",
//   projectId: "mbc-app-a3a88",
//   storageBucket: "mbc-app-a3a88.firebasestorage.app",
//   messagingSenderId: "1003628527633",
//   appId: "1:1003628527633:web:c6de42929a4b5ef72e71b0",
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const firebaseAuth = getAuth(firebaseApp);

// const userdb = firebaseApp.firestore();

// const googleProvider = new GoogleAuthProvider();

// export const FirebaseProvider = (props) => {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     onAuthStateChanged(firebaseAuth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });
//   });
//   const signupuser = (email, password) =>
//     createUserWithEmailAndPassword(firebaseAuth, email, password);

//   const signinuser = (email, password) =>
//     signInWithEmailAndPassword(firebaseAuth, email, password);

//   const signinwithgoogle = () => signInWithPopup(firebaseAuth, googleProvider);

//   const isUserLogedIn = user ? true : false;

//   const signout = () => firebaseAuth.signOut();

//   const getAdminId = user?.uid;

//   const getAdminFirebaseId = "Am8gc1dHsnTb3yPEwLbUqLXcHFb2";

//   const userDb = userdb;

//   return (
//     <FirebaseContext.Provider
//       value={{
//         signupuser,
//         signinuser,
//         signinwithgoogle,
//         isUserLogedIn,
//         signout,
//         getAdminId,
//         getAdminFirebaseId,
//         userDb,
//       }}
//     >
//       {props.children}
//     </FirebaseContext.Provider>
//   );
// };

import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDScjSVMxVWi02Apb5ZLcQMKbiJC_P6W7Y",
  authDomain: "its-mbc.firebaseapp.com",
  projectId: "its-mbc",
  storageBucket: "its-mbc.firebasestorage.app",
  messagingSenderId: "173913977074",
  appId: "1:173913977074:web:b411593a8a778a3d37e06b",
  measurementId: "G-P8Y6J3RCR1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const userdb = getFirestore(firebaseApp); // Initialize Firestore here

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signupuser = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signinuser = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const signinwithgoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  const isUserLogedIn = user ? true : false;

  const signout = () => firebaseAuth.signOut();

  const getAdminId = user?.uid;

  const getAdminFirebaseId = "dGd0HIb2RVPnsbqivVn9LxtUBRj2";

  const imageUrllandscape =
    "https://script.viserlab.com/playlab/demo/assets/images/item/landscape/";

  const imageUrlPortrait =
    "https://script.viserlab.com/playlab/demo/assets/images/item/portrait/";

  const globalImage =
    "https://script.viserlab.com/playlab/demo/assets/images/television/";

  return (
    <FirebaseContext.Provider
      value={{
        signupuser,
        signinuser,
        signinwithgoogle,
        isUserLogedIn,
        signout,
        getAdminId,
        getAdminFirebaseId,
        userDb: userdb, // Pass Firestore instance here
        imageUrllandscape,
        imageUrlPortrait,
        globalImage,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
