import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { register } from "../api/auth";

const Register = () => {
  const [userInfo, setuserInfo] = useState({});
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setuserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setuserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
  });
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
      className="bg-body-secondary d-flex justify-content-center align-items-center cc"
    >
      <div className="h-75 d-inline-block row justify-content-between rounded SS">
        <form onSubmit={handleFormSubmit}>
          <h2 className="p-4 rounded ">Register</h2>
          <div className="p-4">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
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
                type="password"
                id="password"
                name="password"
                className="form-control rounded-pill"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Profile Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="form-control rounded-pill"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-center p-4">
            <button type="submit" className="btn btn-primary rounded-pill">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
