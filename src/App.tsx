import { useState } from "react";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      ) : (
        <SignUp showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
    </>
  );
}

export default App;
