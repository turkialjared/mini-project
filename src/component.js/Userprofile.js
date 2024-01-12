import React from "react";

const UserProfileCard = ({ username, image, balance }) => {
  return (
    <div
      className="container-fluid SS"
      style={{
        height: "100vh",
      }}
    >
      <div className="row justify-content-center ">
        <div className="col-md-6">
          <div className="card mt-5 " style={{ height: "400px" }}>
            <img
              src={image}
              alt="User Profile"
              className="card-img-top img-fluid rounded-circle"
            />
            <div className="card-body text-center">
              <h2 className="card-title">{username}</h2>
              <p className="card-text">Balance: ${balance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
