import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
              
const firebaseConfig = {
  apiKey: "AIzaSyCuOlM5bsacf3A8KSWA_Qb6DexsOpNJ7jM",
  authDomain: "manager-app-project-9999b.firebaseapp.com",
  databaseURL: "https://manager-app-project-9999b-default-rtdb.firebaseio.com",
  projectId: "manager-app-project-9999b",
  storageBucket: "manager-app-project-9999b.appspot.com",
  messagingSenderId: "547133886361",
  appId: "1:547133886361:web:f7f3eb7508249f90434d08",
  measurementId: "G-FJRZMKQX4T"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase();
export default app;
