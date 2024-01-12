import { useState } from "react";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Trending from "./Components/Trending";
import Recomended from "./Components/Recomended";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <Header />
      <SearchBar />
      <Trending />
      <Recomended />
      {showLogin ? (
        <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      ) : (
        <SignUp showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
    </>
  );
}

export default App;
