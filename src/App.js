import logo from "./logo.svg";
import "./App.css";
import NavBar from "./api/navbar";
import { Route, Router, Routes } from "react-router-dom";
import Register from "./pages/Register";
import UserContext from "./context/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono">
        <NavBar />
        <Routes>
          <Route path="/register" Component={Register} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
