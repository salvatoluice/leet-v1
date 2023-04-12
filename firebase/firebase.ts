// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWMjvu7VGUPaGX_pifWKGlMj0b6Qq6HNY",
  authDomain: "leetcode-yt-bfd23.firebaseapp.com",
  projectId: "leetcode-yt-bfd23",
  storageBucket: "leetcode-yt-bfd23.appspot.com",
  messagingSenderId: "8735714153",
  appId: "1:8735714153:web:6e65a806e692e66e8c2bf8"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };

// import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
// 	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
// 	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
// 	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

// const auth = getAuth(app);
// const firestore = getFirestore(app);

// export { auth, firestore, app };
