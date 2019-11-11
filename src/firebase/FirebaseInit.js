import {initializeApp} from "firebase";
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp.storage();