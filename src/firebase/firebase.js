import firebase from "firebase/app";
import "firebase/firestore";

const app= firebase.initializeApp(
    {
        apiKey: "AIzaSyDZwNdBxBW82o76vpxcjFoTImmllqqsBWI",
        authDomain: "golden-db9fe.firebaseapp.com",
        projectId: "golden-db9fe",
        storageBucket: "golden-db9fe.appspot.com",
        messagingSenderId: "7858350637",
        appId: "1:7858350637:web:6cafb9bbc974f2db3766a4"
      }
);

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}