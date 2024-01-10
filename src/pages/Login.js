import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import UserContext from "../context/UserContext";
import { useMutation } from "@tanstack/react-query";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: [`login`],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/mainPage");
    },
  });

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="username">userName</label>
            <input
              type="username"
              name="username"
              id="username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
