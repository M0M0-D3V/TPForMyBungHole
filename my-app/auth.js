import firebase from "firebase/app";
import "firebase/auth";

const signUp = async (email, password) => {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

const logIn = async (email, password) => {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

const logOut = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

export { signUp, logIn, logOut };
