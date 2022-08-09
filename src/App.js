import React from "react";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import { useSelector } from "react-redux";
import "./App.css";
import { selectUser } from "./features/userSlice";

const App = () => {
  const user = useSelector(selectUser);
  return <div>{user ? <Logout /> : <Login />}</div>;
};

export default App;
