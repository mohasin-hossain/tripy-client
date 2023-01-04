import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const InitializaFirebase = () => {
    initializeApp(firebaseConfig)
}

export default InitializaFirebase;