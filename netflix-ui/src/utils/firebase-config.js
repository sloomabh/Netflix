import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCU7makkohMlqEzdo42JfNjEJ-kMZIkb0w",
  authDomain: "netflix-ea343.firebaseapp.com",
  projectId: "netflix-ea343",
  storageBucket: "netflix-ea343.appspot.com",
  messagingSenderId: "796822126056",
  appId: "1:796822126056:web:d5d6679efe578818fdb85d",
  measurementId: "G-9WL6D9K9P7",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
