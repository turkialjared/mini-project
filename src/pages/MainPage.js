import React, { useState } from "react";
import { me } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const MainPage = () => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: me,
  });

  console.log(user.image);
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>My Profile</h2>
      </div>
      <div className="card-body">
        {user ? (
          <div>
            <img
              src={user.image}
              alt="User Profile"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "200px" }}
            />
            <h3 className="card-title">Name: {user.username}</h3>
          </div>
        ) : (
          <p>Loading user profile...</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;
