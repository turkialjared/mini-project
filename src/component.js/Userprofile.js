import React from "react";

const UserProfileCard = ({ username, image, balance }) => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div className="w-75 d-flex row justify-content-center ">
        <div className="col-md-6 justify-content-between">
          <div
            className="card mt-5 justify-content-between SS"
            style={{ height: "325px" }}
          >
            <img
              src={image}
              alt="User Profile"
              className="card-img-top img-fluid rounded-circle"
            />
            <div className="card-body text-center">
              <h2 className="card-title">Welcome {username}</h2>
              <p className="card-text">Your Balanceis : ${balance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
