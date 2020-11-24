import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyBvQmYRbl5yLV_G0xLUXbPw_ADZn2LYPRA',
  authDomain: 'final-project-volunteer.firebaseapp.com',
  databaseURL: 'https://final-project-volunteer.firebaseio.com',
  projectId: 'final-project-volunteer',
  storageBucket: 'final-project-volunteer.appspot.com',
  messagingSenderId: '858635350392',
  appId: "1:858635350392:web:91feb1d2b4088a56b8588d"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};