import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCt5Q7R4sOnr3b4NCzzc9ZO37i9rButqIQ",
    authDomain: "caparazonia-8818c.firebaseapp.com",
    projectId: "caparazonia-8818c",
    storageBucket: "caparazonia-8818c.appspot.com",
    messagingSenderId: "978187501845",
    appId: "1:978187501845:web:65ba61fe97dcdacfa4691c"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}