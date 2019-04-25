import Firebase from 'firebase/app'
import 'firebase/database';

var config = {
};

const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbCoolWords = db.ref('coolwords');