/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCTxghBixh_jPig94ODfixesncUtTnkcoA",
  authDomain: "friendly-chat-cdb75.firebaseapp.com",
  projectId: "friendly-chat-cdb75",
  storageBucket: "friendly-chat-cdb75.appspot.com",
  messagingSenderId: "75093205418",
  appId: "1:75093205418:web:2e1624a7b2252681588bd3"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}