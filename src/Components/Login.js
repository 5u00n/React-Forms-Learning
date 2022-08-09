import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux/es/exports";
import { login } from "../features/userSlice";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(login({
      name:name,
      email:email,
      password:password,
      loggedin:true
    }));
  };
  return (
    <div className="login">
      <form className="login-form" onSubmit={(e)=>handleSubmit(e)}>
        <h1>LOGIN ...</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className="submit_btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
