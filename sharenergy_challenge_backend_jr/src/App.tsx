import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./pages/loginPage/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RandonUsersList from "./pages/RandonUsersLister/RandonUsersList";
import Header from "./components/Header/Header";
import CadastroDeUsuarios from "./pages/CadastroDeUsuarios/CadastroDeUsuarios";
import RandomDogs from "./pages/RandomDogs/RandomDogs";
import CaHTTP from "./pages/CaHTTP/CaHTTP";
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<CaHTTP />} path="/cahttp" />

          <Route element={<RandonUsersList />} path="/randonusers" />
          <Route element={<CadastroDeUsuarios />} path="/cadastrodeusuarios" />
          <Route element={<RandomDogs />} path="/randomdogs" />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
