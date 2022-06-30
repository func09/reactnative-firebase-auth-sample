import { firebaseApp } from "../../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useAuth = () => {
  const auth = getAuth(firebaseApp);
  const [currentUser, setCurrentUser] = useState(auth.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return currentUser;
};

export default useAuth;
