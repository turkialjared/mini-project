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
  const backgroundImageStyle = {
    backgroundImage: 'url("bank.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Adjust the height as needed
  };

  return (
    <div
      style={backgroundImageStyle}
      className=" d-flex justify-content-center align-items-center cc"
    >
      <div>
        <div className="h-50 d-inline-block row justify-content-between rounded SS">
          <h2 className="p-4">Login</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="p-4">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control rounded-pill"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  className="form-control rounded-pill"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="d-flex justify-content-center p-4">
              <button type="submit" className="btn btn-primary rounded-pill">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
