import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJ4FGTMzLF0rbuAhEuvXWuxHaqAvII6qw",
  authDomain: "danti-proj.firebaseapp.com",
  projectId: "danti-proj",
  storageBucket: "danti-proj.appspot.com",
  messagingSenderId: "149018835235",
  appId: "1:149018835235:web:f582ea6a7a55ed4c897496",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
