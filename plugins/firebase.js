import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default ({ $config }) => {
  const firebaseConfig = $config.firebase;
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
};
