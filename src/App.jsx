
import { useState } from "react";
import SignIn from "./components/SignIn";
import FrontPage from "./components/FrontPage";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(() => localStorage.getItem("ddu-auth") === "true");

  function handleSignIn(stayLoggedIn) {
    setIsSignedIn(true);
    if (stayLoggedIn) {
      localStorage.setItem("ddu-auth", "true");
    }
  }

  function handleSignOut() {
    localStorage.removeItem("ddu-auth");
    setIsSignedIn(false);
  }

  return isSignedIn ? (
    <FrontPage onSignOut={handleSignOut} />
  ) : (
    <SignIn onSignIn={handleSignIn} />
  );
}

export default App;
