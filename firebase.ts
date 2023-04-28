import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7dCqUE_OwEiV98Xyh-eUXMFPv_zvhdMY",
    authDomain: "chatgpt-clone-e18ca.firebaseapp.com",
    projectId: "chatgpt-clone-e18ca",
    storageBucket: "chatgpt-clone-e18ca.appspot.com",
    messagingSenderId: "379385999439",
    appId: "1:379385999439:web:f976890a76839d09523a3a"
  };

  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };
