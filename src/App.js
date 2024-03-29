import "./App.css";
import NavBar from "./api/navbar";
import { Route, Router, Routes } from "react-router-dom";
import Register from "./pages/Register";
import UserContext from "./context/UserContext";
import { useState } from "react";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Users from "./pages/Users";
import Account from "./pages/Account";

function App() {
  const [user, setUser] = useState(false);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono">
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/mainPage" Component={MainPage} />
          <Route path="/transactions" Component={Transactions} />
          <Route path="/users" Component={Users} />
          <Route path="/account" Component={Account} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
