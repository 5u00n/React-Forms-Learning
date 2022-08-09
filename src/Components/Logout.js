import React from "react";
import "./Logout.css";
import { useDispatch,useSelector } from "react-redux";
import { logout,selectUser } from "../features/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
const user=useSelector(selectUser);
  return (
    <div className="logout">
      <h1>
        Welcome <span className="user_name">{user.name}</span>
      </h1>
      <button className="logout_btn" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
