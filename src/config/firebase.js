
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBKwVkDbYH9cR_DJWP1ttu2VZKFoL5ttY0",
  authDomain: "tiktok---jornada-41c77.firebaseapp.com",
  projectId: "tiktok---jornada-41c77",
  storageBucket: "tiktok---jornada-41c77.appspot.com",
  messagingSenderId: "597988101946",
  appId: "1:597988101946:web:908f4b73dd71c62d1c8a03"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;