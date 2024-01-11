import { useState } from "react";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <Header />
      <SearchBar />
      {showLogin ? (
        <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      ) : (
        <SignUp showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
    </>
  );
}

export default App;
