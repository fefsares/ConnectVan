
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDP9vuG3sKFo_uggMNnqIwbfy-VSTn23Fo",
  authDomain: "connectvan-bef87.firebaseapp.com",
  projectId: "connectvan-bef87",
  storageBucket: "connectvan-bef87.appspot.com",
  messagingSenderId: "648991757514",
  appId: "1:648991757514:web:3a4afbb17a56e43cf81033",
  databaseURL: "https://connectvan-bef87-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
