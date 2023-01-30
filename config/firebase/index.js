import { initializeApp, getApps, getApp, firebase } from "firebase/app";
import { getAuth, browserSessionPersistence,setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

//export default getApps().lenght ? initializeApp(firebaseConfig) : getApp();

/* const initializeAppIfNecessary = () => {
  try {
    return getApp();
  } catch {
    return initializeApp(firebaseConfig);
  }
};
let app = initializeAppIfNecessary();
const auth = getAuth(app); */
