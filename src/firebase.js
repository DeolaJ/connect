import firebase from '@firebase/app';
import '@firebase/analytics';

let config = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)
const connectFirebase = firebase.initializeApp(config)

connectFirebase.analytics();
connectFirebase.analytics().logEvent('notification_received');

export default connectFirebase