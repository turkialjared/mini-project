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

  return (
    <div
      className="bg-body-secondary d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
      }}
    >
      <div className="h-50 d-inline-block bg-primary row d-flex justify-content-space-between">
        <form onSubmit={handleFormSubmit}>
          <h2 className="p-4">Register</h2>
          <div className="p-4">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6 flex justify-center p-4 align-items-center">
            <label htmlFor="image">Profile Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center p-4">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
