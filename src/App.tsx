import { useState } from "react";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Trending from "./Components/Trending";
import Recomended from "./Components/Recomended";
import Movies from "./Components/Movies";

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [showMovie, setShowMovie] = useState(true);

  return (
    <>
      <Header setShowMovie={setShowMovie} />
      <SearchBar />
      {!showMovie ? (
        <Movies showMovie={showMovie} />
      ) : (
        <>
          <Trending />
          <Recomended />
        </>
      )}
      {showLogin ? (
        <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      ) : (
        <SignUp showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
    </>
  );
}

export default App;
